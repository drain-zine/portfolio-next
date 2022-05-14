import Link from 'next/link';
import React, { useMemo } from 'react';
import styles from '../styles/index.module.scss'
import { variants } from '../animations/fadeOut';
import { staggerVariants } from '../animations/stagger';
import { motion } from 'framer-motion';
import { Canvas, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const slideVariants=  {
    out: { x: '65%' }
};


const generateRandom = (min, max) => {
    return Array.from({length: 3}, () => Math.round(Math.random() * (max - min) + min));
}

const getRandomPos = () => {
    return generateRandom(-2, 10);
}

const Scene = () => {


    return(
        <Canvas  gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={50} aspect={1536 / 721.6} near={1} far={1000}/>
            <OrbitControls enableZoom={true} enableRotate={true} enableDamping={true} dampingFactor={0.1} rotateSpeed={0.1} />
            <group>
                <group position={getRandomPos()} scale={[1, 2, 1]} rotation={[Math.PI / 2, 0, 0]}>
                    <sprite position={getRandomPos()} scale={[10, 2, 3]} center={[-0.1, 0]}>
                        <spriteMaterial color={'darkred'} rotation={Math.PI / 3}></spriteMaterial>
                    </sprite>
                </group>
                <sprite position={getRandomPos()} scale={[2,10,1]}>
                    <spriteMaterial color={'#000'}></spriteMaterial>
                </sprite>
                <sprite position={getRandomPos()} scale={[0.1, 0.5, 0.1]} center={[0.5, 0]}>
                    <spriteMaterial color={'darkgoldenrod'} rotation={Math.PI / 3 * 4} sizeAttenuation={false}></spriteMaterial>
                </sprite>
            </group>
        </Canvas>
    );
};

const Home = () => {
    return (
        // <motion.main
        //     className={styles.main}
        //     variants={staggerVariants}
        //     initial={'initial'}
        //     animate={'in'}
        //     exit={'out'}
        // >
        //     <motion.section className={styles.nav}>
        //         <motion.div className={styles.horizLine}></motion.div>
        //         <motion.div className={styles.verticalLine}></motion.div>
        //         <h3>Tom Stannett</h3>

        //         <motion.div className={styles.controls}>
        //             <Link href='/design'>
        //             <h4>Design</h4>
        //             </Link>
        //             <h4>Digital Posters</h4>
        //             <h4>Contact</h4>
        //         </motion.div>

        //         <motion.div className={styles.blurb}>
        //             <p>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae finibus lacus, eget dictum libero. Duis dapibus consequat dolor id lacinia. Nam et nisi at felis hendrerit dapibus vitae vel eros. Etiam ligula libero, viverra fermentum efficitur suscipit, aliquam pulvinar ipsum. Pellentesque consequat pretium augue, non efficitur nunc pulvinar ac.
        //             </p>
        //         </motion.div>
        //     </motion.section>
        //     <motion.section className={styles.canvas}>
        //         <Scene />
        //     </motion.section>
        // </motion.main>
        <main className={styles.main2}>
            <section className={styles.title2}>
                <h3>Tom Stannett</h3>
            </section>
            <section className={styles.controls2}>
                <Link href='/design'><h4>Design</h4></Link>
                <h4>Digital Posters</h4>
                <h4>Contact</h4>
            </section>
            <section className={styles.canvas2}>
                <Scene />
            </section>
        </main>
    );
};

export default Home;