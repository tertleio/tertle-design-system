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
  primary: `border border-transparent bg-current`,
  secondary: `border border-current bg-transparent text-current dark:text-current-dark`,
  tertiary: `border border-gray-300 dark:border-gray-800 bg-transparent text-current dark:text-current-dark hover:border-gray-500 dark:hover:border-white hover:text-black dark:hover:text-white`,
};

const sizes = {
  xs: 'font-secondary py-0.5 px-1.5 h-7 rounded-md text-[13px] font-secondary sm:py-0 sm:px-1.5',
  sm: 'font-secondary py-1.5 px-2 rounded-md text-sm font-secondary sm:py-1 sm:px-1.5',
  md: 'font-secondary py-1.5 px-2.5 rounded-lg text-sm font-secondary sm:py-1.5 sm:px-2',
  lg: 'font-primary py-1.5 px-2.5 rounded-xl text-md sm:py-1.5 sm:px-3 uppercase',
  xl: 'font-primary py-2 px-3 rounded-2xl text-md sm:py-2.5 sm:px-4 uppercase',
};

type ActionWrapperProps = {
  variant?: keyof typeof variants;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  disabled?: boolean;
  className?: string;
  classNameText?: string;
  children?: React.ReactNode | string;
  icon?: IconMember | React.ReactNode;
};

const ActionWrapper = (props: ActionWrapperProps) => {
  const {
    color = 'base',
    variant = 'primary',
    size = 'md',
    icon,
    disabled = false,
    className,
    classNameText,
    children: text,
  } = props;
  const inverse = variant === 'primary' && 'text-white dark:text-black';

  return (
    // prettier-ignore
    <div
      className={cn(
        'flex gap-2 content-center items-center justify-center',
        'select-none hover:contrast-125 disabled:cursor-not-allowed disabled:opacity-70',
        disabled && 'opacity-30',
        variants[variant],
        sizes[size],
        colors[color],
        !text && 'border-gray-400 dark:border-gray-800 dark:border-opacity-0 border-opacity-0 hover:border-current dark:hover:border-current',
        className,
      )}
    >
      {typeof icon === 'string' ? <Icon name={icon} size={size} className={clsx(inverse)} /> : icon}
      {text && <span className={cn(classNameText || inverse)}>{text}</span>}
    </div>
  );
};

export { ActionWrapper, type ActionWrapperProps, sizes };
