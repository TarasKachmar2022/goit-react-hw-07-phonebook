import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.items;
export const selectContacts = ({ contacts }) =>
  [...contacts.items].sort((first, last) =>
    first.name.localeCompare(last.name)
  );
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, selectFilter) => {
    console.log(selectIsLoading);
    const normalize = selectFilter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );

    return visibleContacts;
  }
);
