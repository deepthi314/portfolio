import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'wouter';

// Role configuration
const ROLES = [
    { name: 'Web Developer', id: 'web-dev', color: '#00F0FF', position: [0, 0, 1.5], rotation: [0, 0, 0] },
    { name: 'Data Scientist', id: 'data-sci', color: '#7000FF', position: [1.3, 0, -1], rotation: [0, -2 * Math.PI / 3, 0] },
    { name: 'UI/UX Designer', id: 'ui-ux', color: '#FF0055', position: [-1.3, 0, -1], rotation: [0, 2 * Math.PI / 3, 0] },
];

export default function Prism({ onRoleSelect, activeRole }) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(null);
    const [location, setLocation] = useLocation();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    const handlePointerOver = (roleId) => {
        setHover(roleId);
        document.body.style.cursor = 'pointer';
    };

    const handlePointerOut = () => {
        setHover(null);
        document.body.style.cursor = 'auto';
    };

    const handleClick = (roleId) => {
        onRoleSelect(roleId);
        // Optional: Update URL manually if wouter doesn't handle component state sync automatically
        // setLocation(`/work/${roleId}`); 
    };

    return (
        <Float floatIntensity={2} rotationIntensity={1.5} speed={1.5}>
            <group>
                {/* Central Crystal using a Icosahedron */}
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={5}
                        thickness={2}
                        roughness={0}
                        transmission={0.9}
                        ior={1.5}
                        chromaticAberration={1}
                        anisotropy={20}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color={
                            activeRole
                                ? ROLES.find(r => r.id === activeRole).color
                                : hovered
                                    ? ROLES.find(r => r.id === hovered).color
                                    : '#ffffff'
                        }
                        toneMapped={false}
                    />
                </mesh>

                {/* Floating Role Labels/Orbs that orbit the crystal */}
                {ROLES.map((role, i) => (
                    <group key={role.id} rotation={[0, (i * Math.PI * 2) / 3, 0]}>
                        <group position={[2.5, 0, 0]}>
                            <mesh
                                onClick={() => handleClick(role.id)}
                                onPointerOver={() => handlePointerOver(role.id)}
                                onPointerOut={handlePointerOut}
                            >
                                <sphereGeometry args={[0.3, 32, 32]} />
                                <meshStandardMaterial
                                    color={role.color}
                                    emissive={role.color}
                                    emissiveIntensity={2}
                                    toneMapped={false}
                                />
                            </mesh>
                            <Text
                                position={[0, -0.6, 0]}
                                fontSize={0.25}
                                color="white"
                                anchorX="center"
                                outlineWidth={0.02}
                                outlineColor="#000000"
                                font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                            >
                                {role.name}
                            </Text>
                        </group>
                    </group>
                ))}
            </group>
        </Float>
    );
}
