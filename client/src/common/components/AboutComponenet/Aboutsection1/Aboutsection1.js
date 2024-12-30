import React from "react";
import image from "../../../../asset/images/backgroundImage.jpg"; 
import GenericSection from "../../../GenericSections/section_about_service/GenericSection";

const Aboutsection1 = () => {
  return (
    <>
    <GenericSection
        backgroundImage={image}
        title="À propos"
        text="From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom."
        buttonText="Savoir plus"
        // onButtonClick={handleButtonClick1}
      />
    </>
  );
};

export default Aboutsection1;
