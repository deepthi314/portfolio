import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ position, geometry, color, rotationSpeed = 0.01 }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed;
            meshRef.current.rotation.y += rotationSpeed * 0.5;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                {geometry}
                <meshStandardMaterial
                    color={color}
                    wireframe
                    emissive={color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </Float>
    );
};

const FloatingShapes = () => {
    return (
        <group>
            {/* Icosahedron - Neon Lime */}
            <Shape
                position={[-4, 2, -5]}
                geometry={<icosahedronGeometry args={[1, 0]} />}
                color="#39ff14"
            />

            {/* Cube - Electric Blue */}
            <Shape
                position={[4, -1, -8]}
                geometry={<boxGeometry args={[1.5, 1.5, 1.5]} />}
                color="#00b4d8"
                rotationSpeed={0.005}
            />

            {/* Tetrahedron - Hot Magenta */}
            <Shape
                position={[-3, -3, -4]}
                geometry={<tetrahedronGeometry args={[1.2]} />}
                color="#ff006e"
                rotationSpeed={0.02}
            />

            {/* Torus - Bright Orange */}
            <Shape
                position={[3, 3, -6]}
                geometry={<torusGeometry args={[0.8, 0.2, 16, 50]} />}
                color="#ff6d00"
                rotationSpeed={-0.01}
            />
        </group>
    );
};

// Exporting the Shapes scene to be used inside a Canvas
export const ShapesScene = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <FloatingShapes />
        </>
    );
};

export default FloatingShapes;
