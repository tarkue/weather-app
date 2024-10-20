import { LngLat } from '../types/index.js';

export function stringArrayToLngLat(value: string[]): LngLat {
  return [parseFloat(value[0]), parseFloat(value[1])];
}
