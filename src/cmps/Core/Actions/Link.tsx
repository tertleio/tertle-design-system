import clsx from 'clsx';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

type LinkProps = RouterLinkProps & {
  children: React.ReactNode;
  className?: string;
};

const Link = (props: LinkProps) => {
  const { children, className } = props;

  return (
    <RouterLink
      className={clsx(
        'text-[15px] text-blue dark:text-blue-dark hover:underline hover:text-blue-dark dark:hover:text-blue',
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export { Link };
