import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`rounded-3xl bg-gray-900 p-8 ${className}`}>{children}</div>
  );
};

export { Container };
