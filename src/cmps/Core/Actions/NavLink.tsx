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
  count?: CountProps['count'];
  countVariant?: 'left' | 'corner';
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode | string;
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
    countVariant = 'left',
    count = 0,
    children,
    className,
    ...rest
  } = props;
  // RouterNavLink auto adds 'active' class when url matches
  return (
    <RouterNavLink
      {...rest}
      className={cn(
        'text-gray-500 dark:text-gray-600 [&.active]:text-black [&.active]:dark:text-white',
        'hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
        sizes[size],
        className
      )}
    >
      <>
        {count === 0 ? (
          children
        ) : (
          <span
            className={clsx(
              'flex items-center',
              countVariant === 'corner' ? 'relative' : 'gap-2'
            )}
          >
            <Count
              count={count}
              className={clsx(
                countVariant === 'corner' &&
                  'absolute top-[-2px] right-[-0.35rem]'
              )}
            />
            {children}
          </span>
        )}
      </>
    </RouterNavLink>
  );
};

export { NavLink, type NavLinkProps };
