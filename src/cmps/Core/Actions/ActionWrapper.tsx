import { cn, clsx } from '@/utils/classes';
import { Icon, IconMember } from '../Icon';

// const test = false;
// const capitlalize = (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1);
// {test && `${capitlalize(color)} ${variant} ${size}`}

const colors = {
  base: 'text-black dark:text-white',
  gray: 'text-gray-600 dark:text-gray-500',
  green: 'text-green dark:text-green-dark',
  orange: 'text-orange dark:text-orange-dark',
  red: 'text-red dark:text-red-dark',
  blue: 'text-blue dark:text-blue-dark',
};

const variants = {
  primary: `border border-current bg-current text-black`,
  secondary: `border border-current bg-transparent text-current dark:text-current-dark`,
  tertiary: `border border-gray-100 dark:border-gray-800 bg-transparent text-current dark:text-current-dark hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white`,
};

const sizes = {
  xs: 'font-secondary py-[2px] px-[5px] rounded-md text-xs font-secondary gap-0.5',
  sm: 'font-secondary py-0.5 px-1 rounded-md text-sm font-secondary gap-1',
  md: 'font-secondary py-[0.175rem] px-[0.325rem] rounded-lg text-sm font-secondary gap-1.5',
  lg: 'font-primary py-1 px-2 rounded-xl text-md uppercase gap-2',
  xl: 'font-primary py-2 px-3 rounded-2xl text-md uppercase gap-2.5',
};

type ActionWrapperProps = {
  variant?: keyof typeof variants;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode | string;
  icon?: IconMember;
};

const ActionWrapper = (props: ActionWrapperProps) => {
  const {
    color = 'base',
    variant = 'primary',
    size = 'md',
    icon,
    disabled = false,
    className,
    children,
  } = props;
  const inverse = variant === 'primary' && 'text-white dark:text-black';

  return (
    <div
      // prettier-ignore
      className={cn(
        disabled && 'opacity-30 cursor-not-allowed',
        variants[variant],
        sizes[size],
        colors[color],
        !children && 'border-gray-400 dark:border-gray-800 dark:border-opacity-0 border-opacity-0 hover:border-current dark:hover:border-current',
        className,
      )}
    >
      {icon && <Icon name={icon} size={size} className={clsx(inverse)} />}
      {children}
    </div>
  );
};

export { ActionWrapper, type ActionWrapperProps, sizes, colors };
