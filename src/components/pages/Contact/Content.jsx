import { Suspense } from 'react';
import ContactForm from './ContactForm';
import Map from '../../Map';
import { Canvas } from '@react-three/fiber';
import CoderRoom from '../../../Models/CoderDesk';
import Loading from '../../../Models/Loading';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import CoderRoomCamera from '../../../Models/CoderDeskCamera';

const Content = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLarge = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="m-auto h-screen w-full">
      <div className="grid h-[115vh] w-full grid-cols-1 place-items-center justify-center pb-30 lg:h-full lg:grid-cols-[1fr_1fr_auto] xl:grid-cols-[1fr_1fr_auto]">
        <div className="flex h-full w-full flex-col items-center justify-center px-12">
          <ContactForm />
        </div>
        <Canvas className="h-full w-full">
          <Suspense fallback={<Loading />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <CoderRoomCamera isMobile={isMobile}>
              <CoderRoom
                scale={isLarge ? 0.07 : 0.13}
                position={isLarge ? [0, -4, 0] : [0.5, -10, 0]}
                rotation={[0.1, -Math.PI, 0]}
              />
            </CoderRoomCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        <Map className="py-16" />
      </div>
    </main>
  );
};

export default Content;
