import React, { Suspense, useState,useEffect,useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

import './Metaverse.scss'

import VR from '../VR'

export default function Metaverse() {
  const vrRef = useRef()
  const metaverseComponent = useRef();

  const [percent,setPercent] = useState(0)
  const [resetVR,setResetVR] = useState(false)
  const [autoRotateVR,setAutoRotateVR] = useState(true)
  const [opacityVideo,setOpacityVideo] = useState(0)
  const [vrScale,setVrScale] = useState(1)

  // get percent of metaverseComponent
  useEffect(() => {
    const hanldeSlider = () => {
      let distanceFromTop = metaverseComponent.current?.getBoundingClientRect?.().y;
      let heightComponents = metaverseComponent.current?.clientHeight;

      let thisArea = distanceFromTop+heightComponents

      if(thisArea<=heightComponents && thisArea >0){
          setPercent((100-((thisArea/heightComponents)*100)).toFixed(2))
      }

      if(distanceFromTop >= 20){
        setVrScale(1)
        setResetVR(false)
      }

      // handle Transmission
      // vr
      if(percent>0 && percent<30){
        setVrScale(1+(percent)/10)

        if(percent >2  && resetVR===false){
          setAutoRotateVR(false)
          setResetVR(true)
        }
      }

      // clear vr state
      if(percent > 40){
        setVrScale(1.2)
      }

      // video
      if(percent>28 && percent<38){
        setOpacityVideo((percent-28)/9 )
      }

      // clear video
      if(percent<28 ){
        setOpacityVideo(0)
      }
    }

    // clean up code
    window.removeEventListener('scroll', hanldeSlider);
    window.addEventListener('scroll', hanldeSlider, { passive: true });

    return () => window.removeEventListener('scroll', hanldeSlider);
  }, [percent]);

  return (
    <div className="metaverse" ref={metaverseComponent}>
      <div className="metaverse-content">
        {/* VR */}
        <div className="metaverse-vr centering">
          <div 
            className="metaverse-vr-content centering" 
            style={{
              transform: `translate(-50%,-50%) scale(${vrScale})`,
              opacity:``
            }}
          >
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
              <Suspense fallback={null}>
                <Stage controls={vrRef} preset="soft" intensity={0.1}  contactShadow={false} environment="city">
                  <VR resetVR={resetVR} setResetVR={setResetVR}/>
                </Stage>
              </Suspense>
              <OrbitControls ref={vrRef} autoRotate={autoRotateVR} enableZoom={false} enablePan={true}/>
            </Canvas>
          </div>
        </div>

        {/* Transmission */}
        

        {/* Video */}
        <div 
          className="metaverse-video"
          style={{
            opacity:`${opacityVideo}`,
            // transform:`scale(${opacityVideo})`,
            display: opacityVideo !==0 ? "block" : "none"
          }}
        >
          <img className="img-width" src="https://socradar.io/wp-content/uploads/2022/03/future-of-cybersecurity-in-the-era-of-metaverse-1-1200x800.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
