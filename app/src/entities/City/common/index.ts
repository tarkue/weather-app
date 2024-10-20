import { ICity } from '../model/index.js';

export interface AddCityEvent extends CustomEvent {
  detail: ICity;
}
