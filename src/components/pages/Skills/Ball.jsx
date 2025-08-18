import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loading from '../../../Models/Loading';
import { useMediaQuery } from 'react-responsive';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.75]} />
      <mesh castShadow receiveShadow scale={isMobile ? 2.3 : 3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8ed"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const SkillBalls = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loading />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SkillBalls;
