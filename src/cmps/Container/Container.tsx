import React from 'react';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'dark:black border-gray-300bg-white rounded-3xl border dark:border-gray-700 dark:bg-black',
        className
      )}
    >
      {children}
    </div>
  );
};

export { Container };
