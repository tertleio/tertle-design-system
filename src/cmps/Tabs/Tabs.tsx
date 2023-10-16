import { clsx } from '@/utils/classes';

import { NavLink } from '@/cmps/Core';
import { NavLinkProps } from '@/cmps/Core/Actions/NavLink';

type Tab = Omit<NavLinkProps, 'children' | 'className'> & {
  label: string;
};
type TabsProps = {
  show?: boolean;
  links: Tab[];
};

const Tabs = ({ links, show = true }: TabsProps) => {
  return show ? (
    <nav className="flex gap-[1px] justify-center mb-[-1px]">
      {links?.map((link, idx) => {
        return (
          <NavLink
            to={link.to}
            key={idx + link.label}
            className={clsx(
              'border rounded-t-[0.75em] rounded-b-none px-5 sm:pt-1.5 sm:pb-1 sm:px-5 border-gray-300 dark:border-gray-700',
              '[&.active]:bg-black [&.active]:dark:bg-gray-800 [&.active]:text-white [&.active]:border-b-0 [&:not(.active)]:hover:bg-transparent'
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
