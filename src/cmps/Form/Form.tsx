import React from 'react';

type FormProps = {
  children: React.ReactNode;
  id: string;
  onSubmit: any; // for now
  className?: string;
};

const Form = (props: FormProps) => {
  const { children, id, onSubmit, className } = props;

  return (
    <form id={id} onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export { Form };
