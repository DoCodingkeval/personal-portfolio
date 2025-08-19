import { IconBrandGithub } from '@tabler/icons-react';
import { projectCards } from '../../../constants/AllData';

const ProjectCards = () => {
  return (
    <section className="h-full w-full overflow-y-auto py-10 lg:text-lg">
      <div className="mx-16 grid md:mx-6 md:grid-cols-2 md:gap-8 lg:gap-0">
        {projectCards.map((item) => {
          return (
            <div>
              <span className="m-4 block px-4 font-semibold text-[#5B59EE] lg:px-10">{`Project ${item.id}`}</span>
              <div className="hover:shadow-[0_10px_30px_rgba(0, 240, 255, 0.2)] my-5 flex flex-col border border-[var(--border-primary)] bg-[#020618] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] lg:mx-auto lg:w-4/5 xl:pb-3">
                <img
                  src={item.image}
                  alt="image"
                  className="border-b border-[var(--border-primary)] object-cover"
                />
                <p className="m-4 text-sm tracking-tighter text-[#738198] xl:text-lg">
                  {item.info}
                </p>
                <div className="mx-4 mb-6 flex items-center">
                  <a
                    href={item.livelink}
                    target="_blank"
                    className="w-max rounded-lg bg-[#1b263b] p-2 px-4 text-sm transition-all duration-300 hover:bg-[#00f0ff] hover:text-[#0d1b2a] hover:shadow-[0_0_15px_#00f0ff]"
                  >
                    view-project
                  </a>
                  <a
                    href={item.githublink}
                    target="_blank"
                    className="mx-4 rounded-lg bg-[#1b263b] p-2 transition-all duration-300 hover:rotate-[10deg] hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    <IconBrandGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCards;
