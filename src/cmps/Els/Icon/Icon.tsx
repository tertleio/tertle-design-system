import * as icons from '@/assets/icons';

type IconMember = keyof typeof icons;
type IconProps = {
  name: IconMember;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, className } = props;

  return (
    <svg className={`fill-white dark:fill-black ${className}`}>
      <path d={icons[name]} />
    </svg>
  );
};

export { Icon };
