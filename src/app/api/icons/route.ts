import type { IconFile, IconFolder } from '@/types';

import { promises as fs } from 'fs';

import path from 'path';

import { NextResponse } from 'next/server';

import { getSvgPathData } from '@/utils/getSvgPathData';

export async function GET() {
  const iconsDir = path.join(process.cwd(), 'public/icons');

  async function getFiles(dir: string): Promise<IconFolder> {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files: IconFile[] = [];

    for (const dirent of dirents) {
      const res = path.resolve(dir, dirent.name);

      if (dirent.isDirectory()) {
        const subfolder = await getFiles(res);
        files.push(...subfolder.files);
      } else if (path.extname(res) === '.svg') {
        const dAttribute = await getSvgPathData(res);
        files.push({
          name: path.basename(res, '.svg'),
          d: dAttribute,
        });
      }
    }

    return {
      folder: path.basename(dir),
      files,
    };
  }

  const dirents = await fs.readdir(iconsDir, { withFileTypes: true });
  const icons = await Promise.all(
    dirents
      .filter((dirent) =>
        dirent.isDirectory())
      .map((dirent) =>
        getFiles(path.join(iconsDir, dirent.name)))
  );

  return NextResponse.json(icons);
}