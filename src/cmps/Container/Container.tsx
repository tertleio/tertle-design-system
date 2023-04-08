import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`
      rounded-3xl border border-gray-300 bg-white
      p-8 dark:border-stone-800 dark:bg-stone-900
      ${className}`}
    >
      {children}
    </div>
  );
};

export { Container };
