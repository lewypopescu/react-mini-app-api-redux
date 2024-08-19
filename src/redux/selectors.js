export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectContactsIsLoading = state =>
  state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
