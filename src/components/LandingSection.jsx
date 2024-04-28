// Styles
import styles from './LandingSection.module.css'

import { useEffect, useState, useRef } from 'react';

import Image from './Image';
const landingImage = "/rocket.png"

// Icons
import { LuRocket } from "react-icons/lu"

// GSAP
import { gsap } from 'gsap'

// 3D
import * as THREE from "three";
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Link } from 'react-router-dom';

const scene = new THREE.Scene();

const LandingSection = () => {
    const el = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const testimonialsElements = document.querySelectorAll('.item');

        tl.current = gsap.timeline()
            .from(testimonialsElements, {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                filter: 'blur(0)',
                scale: 1,
                duration: 1,
            });

        return () => {
            tl.current.kill();
        };
    }, []);

    // 3D
    const [model, setModel] = useState(null);

    useEffect(() => {
        const loader = new GLTFLoader();

        loader.load('/Rocket.glb', (gltf) => {
            const object = gltf.scene;
            const material = object.children[0].material;
            const texture = material.map;
            const newMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffa500, map: texture });
            object.position.set(0, -2, 0);
            object.scale.set(1.5, 1.5, 1.5);
            object.children[0].material = newMaterial;
            //scene.add(object);
            setModel(object);

            gsap.to(object.position, {
                y: object.position.y + 0.5,
                duration: 1.5,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
            });
        }, undefined, function (error) {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        if (!model) return;

        gsap.to(model.rotation, {
            y: Math.PI * 2,
            duration: 5,
            repeat: -1,
            ease: "linear",
        });

    }, [model]);

    return (
        <main>
            <div className={`${styles.imageContainer}`} ref={el}>
                <Canvas scene={scene} className='item'>
                    <ambientLight intensity={0.5} color="white" />
                    <directionalLight intensity={0.8} color="white" position={[0, 5, 5]} />
                    <spotLight
                        intensity={0.6}
                        color="white"
                        position={[0, 5, 5]}
                        angle={Math.PI / 6}
                        penumbra={0.5}
                        decay={2}
                        distance={100}
                        castShadow
                    />
                    {model && <primitive object={model} />}
                    <OrbitControls
                        maxDistance={5.5}
                        minDistance={5}
                    />
                </Canvas>
            </div>
            <div className={`${styles.landingContentContainer}`} ref={el}>
                <div className={`${styles.insideLandingContent} item`}>
                    <p>Olá,</p>
                    <h2>Me chamo <span>Raphael Muniz</span></h2>
                    <h6>Sou Desenvolvedor Full Stack React.js + Node.js</h6>
                    <Link to="/projetos">Conheça meu trabalho<LuRocket /></Link>
                </div>
            </div>
        </main>
    );
};

export default LandingSection;