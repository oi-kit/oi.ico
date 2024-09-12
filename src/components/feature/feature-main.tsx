'use client';

import type { ComponentProps, FC } from 'react';

import type { IconFolder } from '@/types';

import { Button } from '@/components/primitives/button';

import { Dialog, DialogContainer, DialogContent, DialogTrigger } from '@/components/primitives/dialog';

import { useEffect, useState } from 'react';

import SVG from '@/components/svg';

import { fetchIcons } from '@/config/actions/icons';

import { useFeature } from '@/components/feature/feature-context';

const FeatureMain: FC<ComponentProps<'div'>> = ({ className, ...rest }) => {
  const [iconFolders, setIconFolders] = useState<IconFolder[]>([]);
  const [filteredIcons, setFilteredIcons] = useState<IconFolder[]>([]);

  const { searchQuery } = useFeature();

  useEffect(() => {
    const loadIcons = async () => {
      const data = await fetchIcons();
      setIconFolders(data);
      setFilteredIcons(data);
    };
    loadIcons();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredIcons(iconFolders);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = iconFolders
        .map((folder) => ({
          ...folder,
          files: folder.files.filter(
            (icon) =>
              icon.name.toLowerCase().includes(query) ||
              folder.folder.toLowerCase().includes(query)
          ),
        }))
        .filter(folder =>
          folder.files.length > 0);

      setFilteredIcons(filtered);
    }
  }, [searchQuery, iconFolders]);

  return (
    <div className='space-y-8' {...rest}>
      {filteredIcons.length > 0 ?
        filteredIcons.map((folder, folderIndex) =>
          <div className='space-y-4' key={folderIndex}>
            <h2 className='text-2xl'>{folder.folder}</h2>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(4rem,1fr))] gap-6'>
              {folder.files.map((icon, idx) =>
                <Dialog key={idx}>
                  <Button asChild variant='icon' size='icon'>
                    <DialogTrigger>
                      <SVG d={icon.d} />
                    </DialogTrigger>
                  </Button>
                  <DialogContainer>
                    <DialogContent>
                      <SVG d={icon.d} />
                      <p>{icon.name}</p>
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
              )}
            </div>
          </div>
        ) : <p>No icons found</p>}
    </div>
  );
};

export default FeatureMain;