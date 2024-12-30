import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../auth/navBar/NavBar";
import { AxiosInterceptor } from "./AxiosInterceptor";
import Footer from "../auth/Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"

const AppMainContainer = () => {
  
  const location = useLocation();

  const noNavBarFooterRoutes = ["/client","/client/suivi_Demandes","/client/profile","/client/services/cree_Service","/client/services/mes_services","/client/demandes","/client/historiques","/client/reclamation"];

  const shouldShowNavBarFooter = !noNavBarFooterRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBarFooter && <NavBar />}
      <AxiosInterceptor>
        <Outlet />
      </AxiosInterceptor>
      <ScrollToTopButton />
      {shouldShowNavBarFooter && <Footer />}
    </div>
  );
};

export default AppMainContainer;
