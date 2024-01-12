import React from 'react';
import clsx from 'clsx';

import { Icon } from '@/cmps/Core';
// import IMG_rocket_dark from '@/assets/imgs/tertle_rocket-dark-sm.gif';

type ContainerProps = {
  isLoading?: boolean;
  msg?: string;
  children: React.ReactNode;
  className?: string;
};

const Indicator = ({ msg }: { msg: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[15em]">
      {/* <img src={IMG_rocket_dark} alt="loading" className="w-[6em]" /> */}
      <div className="flex flex-col items-center gap-2">
        <Icon name="spinner" size="lg" />
        <p>{msg}</p>
      </div>
    </div>
  );
};

const Container = ({
  isLoading = false,
  msg = 'Loading...',
  children,
  className,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        'bg-white dark:bg-black rounded-2xl border border-gray-300 dark:border-gray-700',
        className
      )}
    >
      {isLoading ? <Indicator msg={msg} /> : children}
    </div>
  );
};

export { Container };
