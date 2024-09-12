import type { IconFile, IconFolder } from '@/types';

import { promises as fs } from 'fs';

import path from 'path';

import { NextResponse } from 'next/server';

import { JSDOM } from 'jsdom';

export async function GET() {
  const iconsDir = path.join(process.cwd(), 'public/icons');

  async function getSvgPathData(filePath: string): Promise<string> {
    const svgContent = await fs.readFile(filePath, 'utf-8');
    const dom = new JSDOM(svgContent);
    const pathElement = dom.window.document.querySelector('path');
    return pathElement?.getAttribute('d') || '';
  }

  async function getFolders(dir: string): Promise<IconFolder[]> {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const folders: IconFolder[] = [];

    for (const dirent of dirents) {
      const res = path.resolve(dir, dirent.name);

      if (dirent.isDirectory()) {
        const files: IconFile[] = [];
        const subdir = await fs.readdir(res);

        for (const file of subdir) {
          if (file.endsWith('.svg')) {
            const filePath = path.join(res, file);
            const d = await getSvgPathData(filePath);
            files.push({
              name: file.replace('.svg', ''),
              d,
            });
          }
        }

        folders.push({
          folder: dirent.name,
          files,
        });
      }
    }

    return folders;
  }

  const icons = await getFolders(iconsDir);

  return NextResponse.json(icons);
}