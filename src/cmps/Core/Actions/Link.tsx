import { clsx } from '@/utils/classes';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

import { Icon, IconProps, IconMember } from '../Icon';

type LinkProps = RouterLinkProps &
  Omit<IconProps, 'name'> & {
    icon?: IconMember;
    children: React.ReactNode;
    className?: string;
  };

const Link = ({
  children,
  className,
  icon,
  size = 'xs',
  color = 'gray',
  ...rest
}: LinkProps) => {
  return (
    <RouterLink
      className={clsx(
        'text-[15px] text-blue dark:text-blue-dark hover:underline hover:text-blue-dark dark:hover:text-blue',
        className
      )}
      {...rest}
    >
      {icon && <Icon name={icon} size={size} color={color} />}
      {children}
    </RouterLink>
  );
};

export { Link };
export type { LinkProps };
