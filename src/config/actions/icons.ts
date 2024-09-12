import type { IconFolder } from '@/types';

export async function fetchIcons(): Promise<IconFolder[]> {
  try {
    const response = await fetch('/api/icons');
    if (!response.ok) {
      throw new Error('Failed to fetch icons');
    }
    const data: IconFolder[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching icons:', error);
    return [];
  }
}