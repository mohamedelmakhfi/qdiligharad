import React from "react";
import ServiceSection1 from "../common/components/ServicesComponent/ServiceSection1/ServiceSection1";
import ServicesDetails from "../common/components/ServicesComponent/ServicesDetails/ServicesDetails";
import AdSection from "../common/components/ServicesComponent/AdSection/AdSection";
import SearchBar from "../common/components/ServicesComponent/SearchBar/SearchBar";

const Services = () => {
  return (
    <>
      <ServiceSection1 />
      <SearchBar />
      <ServicesDetails />
      <AdSection />
    </>
  );
};

export default Services;
