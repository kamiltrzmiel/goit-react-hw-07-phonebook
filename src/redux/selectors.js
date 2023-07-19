import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
);
