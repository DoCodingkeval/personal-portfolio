import { useState } from 'react';
import {
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconExternalLink,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const Sidebar = () => {
  const [contact, setContact] = useState(false);
  const [social, setSocial] = useState(false);

  return (
    <aside className="flex h-full w-full flex-col pt-16 text-xs lg:border-r-2 lg:border-[#1e2d3d] xl:text-[1rem]">
      <a href="#" className="py-4 pl-4 lg:hidden">
        _contact-me
      </a>
      <a
        href="#"
        className="flex items-center gap-2 bg-[#314158] py-3.5 pl-4 lg:bg-transparent"
        onClick={() => setContact(!contact)}
      >
        {contact ? (
          <IconCaretDownFilled size={15} />
        ) : (
          <IconCaretRightFilled size={15} />
        )}
        contacts
      </a>
      {contact && (
        <div className="flex flex-col gap-2 p-2 py-2 pl-4 text-[#607B96]">
          <span className="flex items-center gap-2">
            <IconMail fill="#607B96" color="#0f172a" size={18} />{' '}
            gohelkeval7@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <IconPhone fill="#607B96" color="#0f172a" size={18} /> +91
            7383044088
          </span>
        </div>
      )}

      <a
        href="#"
        className="flex items-center gap-2 bg-[#314158] py-3.5 pl-4 lg:bg-transparent"
        onClick={() => setSocial(!social)}
      >
        {social ? (
          <IconCaretDownFilled size={15} />
        ) : (
          <IconCaretRightFilled size={15} />
        )}
        find-me-also-in
      </a>
      {social && (
        <div className="flex flex-col gap-2 py-2 pl-4 text-[#607B96]">
          <a
            href="https://www.linkedin.com/in/keval-gohel-599b28310"
            target="_blank"
            className="flex items-center gap-2"
          >
            <IconExternalLink size={15} />
            Linkedin
          </a>
          <a
            href="https://github.com/DoCodingkeval"
            target="_blank"
            className="flex items-center gap-2"
          >
            <IconExternalLink size={15} />
            Github
          </a>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
