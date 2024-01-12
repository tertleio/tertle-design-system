import { clsx } from '@/utils/classes';

import { NavLink } from '@/cmps/Core';
import { NavLinkProps } from '@/cmps/Core/Actions/NavLink';

type Tab = Omit<NavLinkProps, 'children' | 'className'> & {
  label: string | React.ReactNode;
};
type TabsProps = {
  links: Tab[];
  show?: boolean;
  className?: string;
};

const Tabs = ({ links, show = true, className }: TabsProps) => {
  return show ? (
    <nav className={clsx('flex gap-[1px] mb-[-1px]', className)}>
      {links?.map((link, idx) => {
        return (
          <NavLink
            to={link.to}
            key={idx}
            className={clsx(
              'border rounded-xl rounded-b-none !px-5 !py-1.5 border-gray-300 dark:border-gray-700 border-b-0',
              '[&.active]:bg-black [&.active]:dark:bg-gray-800 [&.active]:text-white [&:not(.active)]:hover:bg-transparent'
            )}
            count={link.count}
            end={link.end}
          >
            {link.label}
          </NavLink>
        );
      })}
    </nav>
  ) : null;
};

export { Tabs, type Tab, type TabsProps };
