import { useState } from 'react';
import {
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconChevronDown,
  IconChevronRight,
  IconFolder,
  IconFolderOpen,
  IconMarkdown,
} from '@tabler/icons-react';

const Sidebar = ({ setActiveView }) => {
  const [info, setInfo] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [hobbiesOpen, setHobbiesOpen] = useState(false);

  return (
    <aside className="flex w-full flex-col pt-16 pb-4 text-xs lg:z-50 lg:border-r-2 lg:border-[var(--border-primary)] xl:text-[1rem]">
      <a href="#" className="py-4 pl-4 lg:hidden">
        _about-me
      </a>
      <button
        onClick={() => setInfo(!info)}
        className="flex items-center gap-2 bg-[#314158] py-3.5 pl-4 lg:border-b-2 lg:border-[#1e2d3d] lg:bg-transparent"
      >
        {info ? (
          <IconCaretDownFilled size={15} />
        ) : (
          <IconCaretRightFilled size={15} />
        )}
        personal-info
      </button>
      {info && (
        <ul className="flex cursor-pointer flex-col gap-2 py-4 pl-4 text-sm">
          {/* 
          <li className="flex items-center gap-2">
            <IconChevronRight size={13} />
            <img src="folder-green.png" alt="folder" className="w-4" />
            interests
          </li> */}

          <li
            className="flex items-center gap-2"
            onClick={() => setEducationOpen(!educationOpen)}
          >
            {educationOpen ? (
              <IconChevronDown size={13} />
            ) : (
              <IconChevronRight size={13} />
            )}
            {educationOpen ? (
              <IconFolderOpen size={16} />
            ) : (
              <IconFolder size={16} />
            )}
            education
          </li>

          {educationOpen && (
            <div className="ml-4.5 flex flex-col gap-2">
              <li
                className="flex items-center gap-2"
                onClick={() => setActiveView('Master')}
              >
                <IconMarkdown size={20} />
                Master
              </li>

              <li
                className="flex items-center gap-2"
                onClick={() => setActiveView('Bachelor')}
              >
                <IconMarkdown size={20} />
                bachelor
              </li>
            </div>
          )}
        </ul>
      )}
      <a
        href="#"
        onClick={() => {
          setActiveView('Hobbies');
          setHobbiesOpen(!hobbiesOpen);
        }}
        className="flex items-center gap-1 bg-[#314158] py-3.5 pl-4 lg:border-b-2 lg:border-[#1e2d3d] lg:bg-transparent"
      >
        {hobbiesOpen ? (
          <IconCaretDownFilled size={15} />
        ) : (
          <IconCaretRightFilled size={15} />
        )}
        hobbies
      </a>
    </aside>
  );
};

export default Sidebar;
