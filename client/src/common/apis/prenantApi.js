import instance from "../components/general/AxiosInterceptor";

export const getApportateurFromDossierApi = (payload) => {
  return instance.get(`/api/dossier-prenante/${payload}`);
};

export const getApportateurByIdApi = (payload) => {
  return instance.get(`/api/dossier-prenante/apporteur/${payload}`);
}

export const getPrenantTabsApi = ({dossier, tab}) => {
  return instance.get(`/api/dossier-prenante/${dossier}/tab/${tab}`);
}

export const updatePrenantApi = (payload) => {
  return instance.put(`/api/tabs/update`, {...payload});
}