import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center p-8 bg-gray-900 rounded-3xl">
      {children}
    </div>
  );
};

export { Container };
