import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Headphone from '../Headphone'

import './Intro.scss'

export default function Intro() {
  const ref = useRef()
  return (
    <div className="Intro centering">
      <div className="container">
        <div className="row">

          <div className="col-xl-6">
            <div className="title">
              <div className="text-box">
                <div className="line"></div>
                <div className="layer"></div>
                <h1>VIEW TO EARN</h1>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="Intro-icon centering">
              <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 , position: [0, 0, 0] }}>
                <Suspense fallback={null}>
                  <Stage controls={ref} preset="soft" intensity={0.8}  contactShadow={false} environment="city">
                    <Headphone />
                  </Stage>
                </Suspense>
                <OrbitControls ref={ref} autoRotate enableZoom={false} enablePan={true}/>
              </Canvas>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
