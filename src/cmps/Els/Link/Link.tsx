import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link = ({ className = '', children, ...props }: LinkProps) => {
  return (
    <RouterLink
      className={`text-blue-600 hover:text-blue-900 ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export { Link };
