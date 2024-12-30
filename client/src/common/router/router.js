import React from "react";
import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import { MainPage } from "../../pages/Page.ui";
import AppMainContainer from "../components/general/AppMainContainer";
import DFNetworkErrorPage from "../components/ui/DFNetworkErrorPage";
import DFNotFoundErrorPage from "../components/ui/DFNotFoundErrorPage";
import DFServeurErrorPage from "../components/ui/DFServeurErrorPage";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  CREE_SERVICE_ROUTE,
  DEMANDE_ROUTE,
  GERER_SERVICE_ROUTE,
  HISTORIQUE_ROUTE,
  LOGIN_ROUTE,
  NETWORK_ERROR_PAGE_ROUTE,
  NOT_FOUND_ERROR_PAGE_ROUTE,
  PROFILE_ROUTE,
  RECLAMATION_ROUTE,
  SEARCH_ROUTE,
  SERVER_ERROR_PAGE_ROUTE,
  SERVICES_ROUTE,
  SIGNUP_ROUTE,
  SUIVI_DEMANDE_ROUTE,
} from "../constants/routerConstants";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import Demandes from "../../pages/Demandes";
import Reclamation from "../../pages/Reclamation";
import Historiques from "../../pages/Historiques";
import MainLayout from "../components/general/MainLayout";
import SuiviDemandes from "../../pages/SuiviDemandes";
import PrivateRoute from "./PrivateRoute";
import Unauthorized from "../components/Unauthorized";
import SignupForm from "../components/SignupForm/SignupForm";
import CreeServices from "../../pages/CreeServices";
import MesServices from "../../pages/MesServices";

const ErrorPageContainer = ({ children }) => {
  const navigate = useNavigate();
  const retourHandler = () => {
    navigate(-1);
  };
  return React.cloneElement(children, {
    onRetour: retourHandler,
  });
};

const router = createBrowserRouter([
  { path: "*", element: <Navigate to={NOT_FOUND_ERROR_PAGE_ROUTE} replace /> },
  {
    path: "/",
    element: <AppMainContainer />,
    exact: true,
    children: [
      {
        path: SEARCH_ROUTE,
        element: <MainPage />,
        exact: true,
      },
      {
        path: SERVER_ERROR_PAGE_ROUTE,
        element: (
          <ErrorPageContainer>
            <DFServeurErrorPage />
          </ErrorPageContainer>
        ),
        exact: true,
      },
      {
        path: NOT_FOUND_ERROR_PAGE_ROUTE,
        element: (
          <ErrorPageContainer>
            <DFNotFoundErrorPage />
          </ErrorPageContainer>
        ),
        exact: true,
      },
      {
        path: NETWORK_ERROR_PAGE_ROUTE,
        element: (
          <ErrorPageContainer>
            <DFNetworkErrorPage />
          </ErrorPageContainer>
        ),
        exact: true,
      },
      {
        path: ABOUT_ROUTE,
        element: <About />,
        exact: true,
      },
      {
        path: SERVICES_ROUTE,
        element: <Services />,
        exact: true,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact />,
        exact: true,
      },
      {
        path: LOGIN_ROUTE,
        element: <Login />,
        exact: true,
      },
      {
        path: SIGNUP_ROUTE,
        element: <SignupForm />,
        exact: true,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
        exact: true,
      },
      {
        path: "client",
        element: (
          <PrivateRoute roles={["ROLE_CLIENT","ROLE_AGENT"]}>
            <MainLayout />
          </PrivateRoute>
        ),
        children: [
          { path: PROFILE_ROUTE, element: <Profile /> },
          { path: DEMANDE_ROUTE, element: <Demandes /> },
          { path: HISTORIQUE_ROUTE, element: <Historiques /> },
          { path: GERER_SERVICE_ROUTE, element: <MesServices /> },
          { path: RECLAMATION_ROUTE, element: <Reclamation /> },
          { path: SUIVI_DEMANDE_ROUTE, element: <SuiviDemandes /> },
          { path: CREE_SERVICE_ROUTE, element: <CreeServices /> },
        ],
      },
    ],
  },
]);

export default router;
