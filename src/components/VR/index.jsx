import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function VR(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "./img/ImageToStl.com_oculus-quest-vr-headset.glb"
  );

  // if(props.resetVR){
  //   group?.current?.rotation.set(-90,110,0)
  //   props.setResetVR(false)
  // }
  group?.current?.rotation.set(0,0,0)

  group?.current?.rotation.set(89.61,110,12.567)
  

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.imagetostl_mesh_1.geometry}
        material={materials.mat0}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_2.geometry}
        material={materials.mat1}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_3.geometry}
        material={materials.mat2}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_4.geometry}
        material={materials.mat3}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_5.geometry}
        material={materials.mat4}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_6.geometry}
        material={materials.mat5}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_7.geometry}
        material={materials.mat6}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_8.geometry}
        material={materials.mat7}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_9.geometry}
        material={materials.mat8}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_10.geometry}
        material={materials.mat9}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_11.geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_12.geometry}
        material={materials.mat11}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_13.geometry}
        material={materials.mat12}
      />
      <mesh
        geometry={nodes.imagetostl_mesh_14.geometry}
        material={materials.mat13}
      />
    </group>
  );
}

useGLTF.preload("./img/ImageToStl.com_oculus-quest-vr-headset.glb");