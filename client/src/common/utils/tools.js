import store from "../state/store";

export const isFormExists = (name) => {
  const forms = store.getState().form.forms.content || {};
  return Object.keys(forms).includes(name);
};

export const getFormFields = (name) => {
  const forms = store.getState().form.forms.content || {};
  return forms[name] || {};
}

export const isNavOpen = () => {
  return store.getState().nav;
}
