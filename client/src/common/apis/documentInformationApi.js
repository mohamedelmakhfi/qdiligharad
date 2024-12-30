import instance from "../components/general/AxiosInterceptor";

const utl = "/api/document"

export const dossierImportationPostApi = () => {
  return instance.post(`/api/dossier-importation/create`, {});
};

export const dossierImportationUpdateApi = (payload) => {
  return instance.put(`/api/dossier-importation/update`, {...payload});
};

export const searchDocumentsApi = (payload) => {
  return instance.post(`${utl}/search`, { ...payload });
};

export const getDossierImportationDetailsApi = (payload) => {
  return instance.get(`/api/dossier-importation/${payload}`);
};

export const deleteDossierImportationApi = (payload) => {
  return instance.delete(`/api/dossier-importation/${payload}`);
};

export const validerDossierImportationApi = (payload) => {
  return instance.put(`/api/dossier-importation/valider/${payload}`);
};

export const archiverDossierImportationApi = (payload) => {
  return instance.put(`/api/dossier-importation/archiver/${payload}`);
};
