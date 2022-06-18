import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from '../Fans'

import './Intro.scss'

export default function Intro() {
  const ref = useRef()
  return (
    <div className="Intro centering">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <img className='img-width' src="https://cdn.axieinfinity.com/landing-page/_next/static/images/banner-941f68fe82413ac57390b1d4b6ca51ef.png" width="540"></img>
          </div>

          <div className="col-xl-6">
            <div className="Intro-icon centering">
              <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                <Suspense fallback={null}>
                  <Stage controls={ref} preset="soft" intensity={0.8}  contactShadow={false} environment="city">
                    <Model />
                  </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate />
              </Canvas>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
