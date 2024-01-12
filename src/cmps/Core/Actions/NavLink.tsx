import { cn, clsx } from '@/utils/classes';
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

import { sizes } from './ActionWrapper';

type CountProps = {
  count: number;
  className?: string;
};

type NavLinkProps = RouterNavLinkProps & {
  idleIcon?: React.ReactNode | string;
  activeIcon?: React.ReactNode | string;
  count?: CountProps['count'];
  countPosition?: 'left' | 'corner'; // TODO: more positions
  size?: keyof typeof sizes;
  className?: string;
  children?: React.ReactNode | string;
};

const Count = ({ count, className }: CountProps) => {
  return (
    <div
      role="alert"
      className={clsx(
        'flex items-center justify-center w-4 h-4 font-primary font-bold rounded-full bg-red dark:bg-red-dark text-white',
        count > 99 ? 'text-[9px]' : 'text-[11px]',
        className
      )}
    >
      {count}
    </div>
  );
};

const NavLink = (props: NavLinkProps) => {
  const {
    size = 'sm',
    countPosition = 'left',
    count = 0,
    idleIcon,
    activeIcon,
    children,
    className,
    ...rest
  } = props;
  // RouterNavLink auto adds 'active' class when url matches
  return (
    <RouterNavLink
      {...rest}
      className={cn(
        'group flex items-center gap-1 relative text-gray-500 dark:text-gray-600 [&.active]:text-black [&.active]:dark:text-white',
        'hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
        sizes[size],
        className,
        'px-2 py-1'
      )}
    >
      {count !== 0 && (
        <Count
          count={count}
          className={clsx(
            countPosition === 'corner' && 'absolute top-0.5 right-0'
          )}
        />
      )}
      {idleIcon && <span className="group-[&.active]:hidden">{idleIcon}</span>}
      {activeIcon && (
        <span className="group-[&:not(.active)]:hidden">{activeIcon}</span>
      )}
      {children}
    </RouterNavLink>
  );
};

export { NavLink, type NavLinkProps };
