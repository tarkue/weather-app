import { toggleViewModal } from '../shared/libs/index.js';
import { InputChangeEvent } from '../shared/types/index.js';

export const InitIndexPage = () => {
  const modalAddCity = document.getElementById('add_city_modal');
  const buttonAddCity = document.getElementById('add_city_button');
  const closeModal = document.getElementById('close_modal');
  const cityList = document.getElementById('city_list');
  const searchInputWrapper = document.getElementById('search_input_wrapper');
  const searchInput = document.getElementById(
    'search_input',
  ) as HTMLInputElement;

  buttonAddCity?.addEventListener('click', () => toggleViewModal(modalAddCity));
  closeModal?.addEventListener('click', () => {
    toggleViewModal(modalAddCity);
    searchInput.value = '';
  });
  searchInputWrapper?.addEventListener('click', () => searchInput?.focus());

  searchInput?.addEventListener('input', (e: InputChangeEvent) => {
    cityList?.setAttribute('search', e.target?.value || '');
  });
};
