import { cn } from '@/utils/classes';
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

import { sizes } from './ActionWrapper';

type NavLinkProps = RouterNavLinkProps & {
  count?: number | string;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode | string;
};

const NavLink = ({
  size = 'sm',
  count,
  children,
  className,
  ...props
}: NavLinkProps) => {
  // RouterNavLink auto adds 'active' class when url matches
  return (
    <RouterNavLink
      {...props}
      className={cn(
        'text-gray-600 dark:text-gray-600 [&.active]:text-black [&.active]:dark:text-white',
        'hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
        sizes[size],
        className
      )}
    >
      <>
        {!count && children}
        {!!count && count !== 0 && (
          <span className="flex gap-2 items-center">
            <span className="flex items-center justify-center w-4 h-4 font-primary text-xs font-bold rounded-full bg-red dark:bg-red-dark text-white">
              {count}
            </span>
            {children}
          </span>
        )}
      </>
    </RouterNavLink>
  );
};

export { NavLink, type NavLinkProps };
