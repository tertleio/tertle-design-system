// imported icon base size must be 16x16px
import * as icons from '@/assets/icons';
import clsx from 'clsx';

const sizes = {
  sm: 'w-[14px] h-[14px]',
  md: 'w-[18px] h-[18px]',
  lg: 'w-[20px] h-[20px]',
};

type IconMember = keyof typeof icons;
type IconProps = {
  name: IconMember;
  size?: keyof typeof sizes;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name, className = 'fill-black dark:fill-white', size = 'sm' } = props;
  const paths = icons[name];

  return (
    <svg className={clsx(sizes[size], className)} viewBox="0 0 16 16">
      {paths.map((path, i) => (
        <path key={i + name} d={path} />
      ))}
    </svg>
  );
};

export { Icon, type IconMember };
