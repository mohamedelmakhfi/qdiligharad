import React from 'react'
import Aboutsection1 from '../common/components/AboutComponenet/Aboutsection1/Aboutsection1'
import Features from '../common/components/AboutComponenet/Features/Features'
import SkillsComponent from '../common/components/AboutComponenet/SkillsComponent/SkillsComponent'
import VideoComponent from '../common/components/AboutComponenet/VideoComponent/VideoComponent'
import SliderComponent from '../common/components/AboutComponenet/SliderComponent/SliderComponent'
import StartButtonComponent from '../common/components/AboutComponenet/StartButtonComponent/StartButtonComponent'

const About = () => {
  return (
    <>
      <Aboutsection1 />
      <Features />
      <SkillsComponent />
      <VideoComponent />
      <SliderComponent />
      <StartButtonComponent />
    </>
  )
}

export default About
