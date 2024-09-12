import { promises as fs } from 'fs';

import path from 'path';

import { JSDOM } from 'jsdom';

export async function getSvgPathData(filePath: string): Promise<string> {
  if (path.extname(filePath) !== '.svg') {
    throw new Error('File is not an SVG');
  }

  try {
    await fs.access(filePath);

    const svgContent = await fs.readFile(filePath, 'utf-8');
    const dom = new JSDOM(svgContent);
    const pathElement = dom.window.document.querySelector('path');

    return pathElement?.getAttribute('d') || '';
  } catch (err) {
    console.error(`Error reading or parsing SVG file: ${filePath}. Error log: ${err}`);
    return '';
  };
};