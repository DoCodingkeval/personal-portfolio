import React from 'react';
import Bio from './Bio';
import Master from './Master';
import Bachelor from './Bachelor';
import Hobbies from './Hobbies';
import Map from '../../Map';

const Main = ({ activeView, children }) => {
  return (
    <main className="relative h-full w-full pb-16">
      {activeView === 'Master' && (
        <div className="grid w-full grid-cols-[1fr_auto] lg:py-12">
          <Master />
          <Map className="py-12" />
        </div>
      )}
      {activeView === 'Bachelor' && (
        <div className="grid w-full grid-cols-[1fr_auto] lg:py-12">
          <Bachelor />
          <Map className="py-12" />
        </div>
      )}
      {activeView === 'Hobbies' && (
        <div className="grid w-full grid-cols-[auto_auto] lg:py-12">
          <Hobbies />
          <Map className="py-12" />
        </div>
      )}
      {children}
      <Bio />
    </main>
  );
};

export default Main;
