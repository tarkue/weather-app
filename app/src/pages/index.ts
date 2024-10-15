import { toggleViewModal } from '../shared/libs/index.js';
import { InputChangeEvent } from '../shared/types/index.js';

export const InitIndexPage = () => {
  const modalAddCountry = document.getElementById('add_country_modal');
  const buttonAddCountry = document.getElementById('add_country_button');
  const closeModal = document.getElementById('close_modal');
  const countryList = document.getElementById('country_list');
  const searchInputWrapper = document.getElementById('search_input_wrapper');
  const searchInput = document.getElementById('search_input');

  buttonAddCountry?.addEventListener('click', () =>
    toggleViewModal(modalAddCountry),
  );
  closeModal?.addEventListener('click', () => toggleViewModal(modalAddCountry));
  searchInputWrapper?.addEventListener('click', () => searchInput?.focus());

  searchInput?.addEventListener('input', (e: InputChangeEvent) => {
    countryList?.setAttribute('search', e.target?.value || '');
  });
};
