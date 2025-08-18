import { skillsStack } from '../../../constants/AllData';
import SkillBalls from './Ball';

const Skill = () => {
  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-wrap items-center justify-center text-center">
      <div className="flex h-max flex-wrap items-center justify-center py-10 sm:w-5/6 sm:gap-10 lg:gap-16 xl:w-2/3 xl:gap-20">
        {skillsStack.map((techonologies, index) => (
          <div className="mx-auto h-28 w-28" key={index}>
            <SkillBalls icon={techonologies.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
