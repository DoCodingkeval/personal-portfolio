import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 mx-auto grid w-full max-w-7xl grid-cols-[auto_max-content] items-center border-t-2 border-[var(--border-primary)] bg-[#0f172a] text-[#B0B6D8] lg:h-14 lg:grid-cols-[max-content_auto_max-content]">
      <span className="px-4 lg:px-0 xl:px-6">find me in:</span>
      <div className="flex w-max cursor-pointer items-center">
        <a
          href="https://www.linkedin.com/in/keval-gohel-599b28310"
          target="_blank"
          className="grid h-12 w-12 place-items-center border-l-2 border-[var(--border-primary)] lg:h-14"
        >
          <IconBrandLinkedin color="#e5e9f0" size={18} />
        </a>
        <a
          href="https://github.com/DoCodingkeval"
          target="_blank"
          className="grid h-12 w-12 place-items-center border-l-2 border-[var(--border-primary)] lg:h-14"
        >
          <IconBrandGithub color="#e5e9f0" size={18} />
        </a>
      </div>
      <span className="flex items-center gap-2 border-l-2 border-[var(--border-primary)] px-7 max-[1024px]:hidden lg:visible lg:h-14">
        @DoCodingkeval <IconBrandGithubFilled size={18} />
      </span>
    </footer>
  );
};

export default Footer;
