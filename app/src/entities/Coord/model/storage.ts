import { LngLat } from 'app/src/shared/types';

const KEY = 'lastMarker' as const;

export const setItem = (value: LngLat) => {
  sessionStorage.setItem(KEY, JSON.stringify(value));
};

export const getItem = () => sessionStorage.getItem(KEY);
