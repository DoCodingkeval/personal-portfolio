import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loading from '../../../Models/Loading';
import Room from '../../../Models/Room';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import RoomLights from '../../../Models/RoomLights';

const Hero = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <section className="mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="h-max w-full px-4 pt-20 text-[var(--text-white)]"
      >
        <span>Hi, all. I am</span>
        <h1 className="text-4xl leading-15 tracking-tighter text-[var(--text-green)] select-none sm:text-6xl xl:text-7xl">
          Keval Gohel <span className="waving-hand">👋</span>
        </h1>
        <span className="block pt-4 text-xl text-[var(--text-blue)] sm:text-[22px]">{`> Front-end developer`}</span>
        <div className="flex flex-col flex-wrap gap-2 pt-4 text-sm text-[var(--text-gray)] sm:text-[1rem] xl:pt-10">
          <span>// find my profile on Github:</span>
          <p className="flex flex-wrap gap-x-2 pr-3">
            <span className="text-[var(--text-blue)]">const</span>{' '}
            <span className="text-[var(--text-green)]">githubLink</span> =
            <a
              href="https://github.com/DoCodingkeval"
              target="_blank"
              className="text-[var(--text-ofred)] transition duration-300 hover:translate-y-1"
            >{`"https://github.com/DoCodingkeval"`}</a>
          </p>
        </div>
      </motion.div>

      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.2} color="#1a1a40" />
        <Suspense fallback={<Loading />}>
          <RoomLights />
          <group
            scale={0.9}
            position={isTablet ? [0, -1.5, 0] : [0, -2.5, 0]}
            rotation={[0, -Math.PI / 3.5, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;
