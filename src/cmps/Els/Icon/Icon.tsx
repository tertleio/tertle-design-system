import * as icons from '@/assets/icons';

type IconMember = keyof typeof icons;
type IconProps = {
  name: IconMember;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, className = '' } = props;
  const paths = icons[name];

  return (
    <svg
      className={`
       h-[20px] w-[20px] border fill-black outline hover:cursor-pointer hover:opacity-90
        dark:fill-white
        ${className}`}
      // width="20px"
      // height="20px"
      // viewBox="0 0 16 16"
      // preserveAspectRatio="xMidYMid meet"
      // preserveAspectRatio="none"
    >
      {paths.map((path, i) => (
        <path key={i} d={path} />
      ))}
    </svg>
  );
};

export { Icon, type IconMember };
