'use client'

import { Canvas } from '@react-three/fiber'
import { Fragment, PropsWithChildren, Suspense } from 'react'

import { Lights } from './components/lights/lights'

export const LegoModel = ({ children }: PropsWithChildren) => (
  <div className="absolute -top-4 left-0 -mt-6  ">
    <Canvas
      style={{
        width: 200,
        height: 200,
        marginTop: -150,
        overflow: 'visible',
      }}
      gl={{ preserveDrawingBuffer: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 2, 6], fov: 33 }}
      shadows
    >
      <Suspense fallback={<Fragment />}>
        <Lights />
        {children}
      </Suspense>
    </Canvas>
  </div>
)
