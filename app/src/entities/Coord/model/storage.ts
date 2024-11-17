import { LngLat } from 'app/src/shared/types/index.js';

const KEY = 'lastMarker' as const;

export const setMarker = (value: LngLat) => {
  sessionStorage.setItem(KEY, JSON.stringify(value));
};

export const getMarker = () => sessionStorage.getItem(KEY);
