import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, stagger } from 'motion/react';
import { navLinks } from '../../../constants/AllData';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const ulVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-10 mx-auto h-18 w-full max-w-7xl border-b-2 border-[var(--border-primary)] bg-[#0f172a] text-white lg:h-14">
      <nav className="flex h-full w-full items-center justify-between text-white/80">
        <Link
          to="/"
          className="font-fira pl-4 text-sm whitespace-nowrap lg:w-1/4 xl:text-[1rem]"
        >
          keval-gohel
        </Link>
        {menu ? (
          <IconX
            className="absolute right-4 cursor-pointer lg:hidden"
            onClick={() => setMenu(false)}
          />
        ) : (
          <IconMenu2
            className="absolute right-4 cursor-pointer lg:hidden"
            onClick={() => setMenu(!menu)}
          />
        )}

        <div
          className={`-top-[400px] left-0 z-[100] h-max w-full bg-[#0f172a] transition duration-300 max-[1024px]:absolute lg:translate-y-0 lg:bg-transparent ${
            menu && 'top-18'
          } }`}
        >
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={ulVariants}
            className="relative flex w-full flex-col lg:flex-row lg:gap-0"
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className={`border border-[var(--border-primary)] py-2 pl-4 leading-10 capitalize transition duration-300 first:pt-4 hover:text-[#00f0ff] lg:border-t-0 lg:border-b-0 lg:py-1 lg:pl-0 lg:text-xs lg:first:hidden lg:last:ml-auto xl:text-sm xl:last:border-r-0`}
              >
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'active-link py-4 lg:px-8 lg:text-center'
                      : 'lg:px-8 lg:text-center'
                  }
                  onClick={() => {
                    setMenu(false);
                  }}
                >
                  {item.link}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
