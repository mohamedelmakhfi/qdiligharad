import React from 'react'
import GenericSection from '../../../GenericSections/section_about_service/GenericSection'
import image from "../../../../asset/images/backgroundImage.jpg"; 


const ServiceSection1 = () => {
  return (
    <>
    <GenericSection
        backgroundImage={image}
        title="Services"
        text="From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines
            of the classroom."
        buttonText="Savoir plus"
        // onButtonClick={handleButtonClick1}
      />
    </>
  )
}

export default ServiceSection1