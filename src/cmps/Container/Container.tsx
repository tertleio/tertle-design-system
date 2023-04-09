import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`
      rounded-3xl border border-gray-200 bg-white
       dark:border-gray-700 dark:bg-gray-800
      ${className}`}
    >
      {children}
    </div>
  );
};

export { Container };
