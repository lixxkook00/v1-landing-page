import React from 'react'
import './LandingPage.scss'

import Intro from '../../components/Intro'
import Header from '../../components/Header'
import Metaverse from '../../components/Metaverse'
import Team from '../../components/Team'
import Story from '../../components/Story'
import SliderMain from '../../components/SliderMain'
import DemoApp from '../../components/DemoApp'
import Tokenomic from '../../components/Tokenomic'
import Roadmap from '../../components/RoadMap'
import Footer from '../../components/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <Intro />
      <Story />
      <SliderMain />
      <Metaverse />
      <DemoApp />
      <Tokenomic />
      <Roadmap />
      <Team />
      <Footer />
    </>
  )
}
