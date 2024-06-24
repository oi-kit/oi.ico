import { TFilter } from '../../types/TFilter';

export const getFilters = async (): Promise<TFilter[]> => {
  return await new Promise((resolve) => {
    resolve([
      { filter: 'All' },
      { filter: 'Arrows' },
      { filter: 'User' },
      { filter: 'Device' },
      { filter: 'Document' },
      { filter: 'Map' },
      { filter: 'Communication' },
      { filter: 'Brand Logo' },
    ])
  });
};