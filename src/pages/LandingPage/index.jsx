import React from 'react'
import './LandingPage.scss'

import Intro from '../../components/Intro'
// import PlayButton from '../../components/PlayButton'
import Header from '../../components/Header'
import Metaverse from '../../components/Metaverse'
import Team from '../../components/Team'

export default function LandingPage() {
  return (
    <>
      <Header />
      <Intro />
      {/* <PlayButton  /> */}
      <Metaverse />
      <Team />
    </>
  )
}
