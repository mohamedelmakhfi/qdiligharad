import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../../../config";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/generalConstants";
import {
  NETWORK_ERROR_PAGE_ROUTE,
  NOT_FOUND_ERROR_PAGE_ROUTE,
  SERVER_ERROR_PAGE_ROUTE,
} from "../../constants/routerConstants";
import { useAlert } from "../../hooks/useAlert";
import DFLoading from "../ui/DFLoading";
//import { jwtDecode } from "jwt-decode";

// export const isTokenExpired = (parsedToken) => {
//   return Boolean(
//     parsedToken?.exp && moment.unix(parsedToken.exp).isBefore(moment())
//   );
// };

const instance = axios.create({
  baseURL: config.baseURL,
});

const AxiosInterceptor = ({ children }) => {
  const { showAlert } = useAlert();

  const navigate = useNavigate();

  const [isAppReady, setIsAppReady] = React.useState(false);

  const getErrorStatusAndMessage = (error) => {
    const errorStatus =
      error?.response?.data?.status ?? error?.response?.status;
    //const errorMessage = error?.response?.data?.message;
    const errorMessage =
      error?.response?.data?.body ?? error?.response?.data?.message;
    return [errorStatus, errorMessage];
  };

  const handleError = (errorStatus, errorMessage) => {
    if (Boolean(errorStatus)) {
      switch (String(errorStatus)) {
        case "404":
          navigate(NOT_FOUND_ERROR_PAGE_ROUTE);
          break;
        case "500":
          navigate(SERVER_ERROR_PAGE_ROUTE);
          break;
        default:
          showAlert("error", errorMessage ?? DEFAULT_ERROR_MESSAGE);
          break;
      }
    } else {
      navigate(NETWORK_ERROR_PAGE_ROUTE);
    }
  };

  const configuration = (config) => {
    const token = sessionStorage.getItem("token");
    //const token = new URLSearchParams(window.location.search).get("token");
    // if (Boolean(token) && !isTokenExpired(jwtDecode(token))) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // } else {
    //   window.location.href = `${config.portnetBaseUrl}/app/seguridad/user/login.jsp`;
    // }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  };

  React.useEffect(() => {
    instance.interceptors.request.use((config) => configuration(config));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const interceptor = instance.interceptors.response.use(
      (response) => {
        const responseStatus = response.data?.status ?? response.status;
        const responseMessage = response.data?.message;

        if (responseStatus === 400 && Boolean(responseMessage)) {
          showAlert("warning", responseMessage);
        }

        if (
          String(responseStatus) > "200" &&
          String(responseStatus) < 400 &&
          Boolean(responseMessage)
        ) {
          showAlert("success", responseMessage);
        }
        return Promise.resolve(response);
      },
      (error) => {
        const [errorStatus, errorMessage] = getErrorStatusAndMessage(error);
        handleError(errorStatus, errorMessage);
        return Promise.reject(error);
      },
    );
    setIsAppReady(true);
    return () => instance.interceptors.response.eject(interceptor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAppReady ? children : <DFLoading open={true} />;
};

export { AxiosInterceptor };

export default instance;
