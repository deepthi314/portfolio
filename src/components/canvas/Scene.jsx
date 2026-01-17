import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import Prism from './Prism';

export default function Scene({ onRoleSelect, activeRole }) {
    return (
        <div className="absolute inset-0 w-full h-full z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    <Prism onRoleSelect={onRoleSelect} activeRole={activeRole} />
                    <Environment preset="city" />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
