import instance from "../components/general/AxiosInterceptor";

export const getTabsApi = (payload) => {
  return instance.get(`/api/tabs/dossier/${payload}`);
};
