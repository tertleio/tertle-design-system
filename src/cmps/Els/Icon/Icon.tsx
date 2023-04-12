// imported icon base size must be 16x16px
import * as icons from '@/assets/icons';

type IconMember = keyof typeof icons;
type IconProps = {
  name: IconMember;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const variants = {
  primary: 'fill-white dark:fill-black',
  secondary: 'fill-primary dark:fill-primary-dark',
  tertiary: 'fill-gray-600 dark:fill-gray-500',
};

const sizes = {
  sm: 'w-[16px] h-[16px]',
  md: 'w-[18px] h-[18px]',
  lg: 'w-[20px] h-[20px]',
};

const Icon = (props: IconProps) => {
  const { name, className = '', size = 'sm', variant = 'secondary' } = props;
  const paths = icons[name];

  return (
    <svg
      className={`
        fill-black dark:fill-white
        ${variants[variant]}
        ${sizes[size]}
        ${className}`}
      viewBox="0 0 16 16"
    >
      {paths.map((path, i) => (
        <path key={i + name} d={path} />
      ))}
    </svg>
  );
};

export { Icon, type IconMember };
