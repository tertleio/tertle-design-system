import { useEffect } from 'react';
import { clsx } from '@/utils/classes';

import { NavLink } from '../Core';

type MenuProps = {
  header?: React.ReactNode | string;
  links: {
    label: string;
    path: string;
    icon: React.ReactNode | string;
    end?: boolean;
  }[];
  show: boolean;
  className?: string;
  onClose: () => void;
};

const Menu = ({ links, className, show, onClose, header }: MenuProps) => {
  useEffect(() => {
    function closeOnEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    if (show) {
      window.addEventListener('keydown', closeOnEscapeKey);
    } else {
      window.removeEventListener('keydown', closeOnEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [show, onClose]);

  return show ? (
    <nav
      className={clsx(
        'z-50 absolute bot-0 right-0 w-fit min-w-xl  rounded-2xl0',
        className
      )}
    >
      {header && (
        <div className="text-sm p-5 bg-black dark:bg-white rounded-t-2xl text-white dark:text-black mb-[1px]">
          {header}
        </div>
      )}
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.path}
          end={link.end}
          onClick={() => {
            // onClose(); this is causing a complete re-render of the app
          }}
          className={clsx(
            'bg-white dark:bg-black min-w-[18em] h-14 !px-5 mt-[-1px] text-md flex items-center justify-between border border-gray-300 dark:border-gray-700 first:border-t-none last:border-b-none',
            'rounded-none last:rounded-b-2xl first:rounded-t-2xl hover:text-green dark:hover:text-green-dark',
            link.label === 'Logout' && 'text-red dark:text-red-dark'
          )}
        >
          <span className="text-base">{link.icon}</span>
          <span>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  ) : null;
};

export { Menu };
