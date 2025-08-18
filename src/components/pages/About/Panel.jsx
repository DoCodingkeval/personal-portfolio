import {
  IconCrystalBall,
  IconDeviceGamepad,
  IconTerminal2,
} from '@tabler/icons-react';

const Panel = () => {
  return (
    <div className="hidden h-full w-max flex-col items-center gap-y-4 border-r-2 border-[var(--border-primary)] p-2 pt-18 lg:visible lg:flex">
      <span>
        <IconTerminal2 size={20} />
      </span>
      <span>
        <IconCrystalBall size={20} />
      </span>
      <span>
        <IconDeviceGamepad size={20} />
      </span>
    </div>
  );
};

export default Panel;
