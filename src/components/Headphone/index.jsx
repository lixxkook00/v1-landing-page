import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Headphone(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./img/ImageToStl.com_headphones2.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_1.geometry}
        material={materials.mat0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_2.geometry}
        material={materials.mat1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_3.geometry}
        material={materials.mat2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_4.geometry}
        material={materials.mat3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_5.geometry}
        material={materials.mat4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_6.geometry}
        material={materials.mat5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.imagetostl_mesh_7.geometry}
        material={materials.mat6}
      />
    </group>
  );
}

useGLTF.preload("./img/ImageToStl.com_headphones2.glb");