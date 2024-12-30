import Accordion from "../common/components/AccueilComponenent/Accordion/Accordion";
import HeroSection from "../common/components/AccueilComponenent/HeroSection/HeroSection";
import Opportunities from "../common/components/AccueilComponenent/Opportunities/Opportunities";
import Commnetmarche from "../common/components/AccueilComponenent/commentMarche/Commnetmarche";

export const MainPage = () => {

  return (
    <>
      <HeroSection />
      <Commnetmarche />
      <Accordion />
      <Opportunities />
    </>

  );
};