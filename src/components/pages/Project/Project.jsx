import ProjectCards from './ProjectCards';

const Project = () => {
  return (
    <section className="mx-auto h-full w-full max-w-7xl bg-[#182c3d46] pt-2 text-[var(--text-white)] xl:text-lg">
      <div className="flex flex-col pt-14">
        <a href="#" className="pt-4 pl-4">
          _projects
        </a>
      </div>
      <ProjectCards />
    </section>
  );
};

export default Project;
