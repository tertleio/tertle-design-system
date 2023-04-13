import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`
      dark:black rounded-3xl border border-gray-300
       bg-white dark:border-gray-700 dark:bg-black
      ${className}`}
    >
      {children}
    </div>
  );
};

export { Container };
