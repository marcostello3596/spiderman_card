import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Spiderman(props) {
  const { nodes, materials } = useGLTF('/models/Spiderman.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Spiderman.gltf')
