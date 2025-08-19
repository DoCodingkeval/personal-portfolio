import Sidebar from './Sidebar';
import Panel from './Panel';
import Main from './Main';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

const About = () => {
  const [activeView, setActiveView] = useState('');

  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 overflow-hidden text-[var(--text-white)] lg:h-screen lg:grid-cols-[auto_170px_auto] xl:grid-cols-[auto_221.5px_auto]">
      <Panel />
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <Main activeView={activeView}>
        {activeView && (
          <div className="absolute top-0 w-full lg:top-13">
            <div className="flex h-9 w-34 cursor-pointer items-center justify-between border-t-2 border-r-2 border-[var(--border-primary)] pr-2 pl-5">
              <span className="text-xs">{activeView}</span>
              <IconX
                size={16}
                onClick={() => setActiveView(null)}
                className="transition duration-300 hover:bg-neutral-700"
              />
            </div>
            <div className="border-t-2 border-r-2 border-[var(--border-primary)]"></div>
          </div>
        )}
      </Main>
    </section>
  );
};

export default About;
