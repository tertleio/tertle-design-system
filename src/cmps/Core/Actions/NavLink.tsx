import clsx from 'clsx';
import {
  NavLink as RouterNavLink,
  NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

import { ActionWrapper, ActionWrapperProps } from './ActionWrapper';

type NavLinkProps = RouterNavLinkProps &
  ActionWrapperProps & {
    count?: number | string;
  };

const NavLink = ({
  color,
  size,
  variant,
  icon,
  count,
  children,
  className,
  classNameText,
  ...props
}: NavLinkProps) => {
  // RouterNavLink auto adds 'active' class when url matches
  return (
    <RouterNavLink className="group" {...props}>
      <ActionWrapper
        icon={icon}
        color={color}
        variant={variant}
        size={size}
        className={clsx('group-[&:not(.active)]:bg-transparent', className)}
        classNameText={clsx(
          'text-gray-500 group-[.active]:text-white group-[.active]:dark:text-black',
          classNameText
        )}
      >
        {!count && children}
        {!!count && count !== 0 && (
          <span className="flex gap-2 items-center">
            <span className="flex items-center justify-center w-4 h-4 font-primary text-xs font-bold rounded-full bg-red dark:bg-red-dark text-white">
              {count}
            </span>
            {children}
          </span>
        )}
      </ActionWrapper>
    </RouterNavLink>
  );
};

export { NavLink };
