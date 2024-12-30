import axios from "axios";
import config from "../../../config";

const getReferentielData = async (reference) => {
  try {
    const response = await axios({
      method: "post",
      url: `${config.referentielBaseURL}api/referentiel/getAll`,
      headers: {
        Authorization: `${config.referentielToken}`,
      },
      data: {
        cleReferentiel: reference,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReferentielDataFromServer = async (api, body) => {
  try {
    const response = await axios({
      method: "post",
      url: `${config.baseURL}${api}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: {
        body,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getReferentielData;
