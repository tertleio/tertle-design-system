import { ReactNode } from 'react';

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  description?: string;
  info?: string;
  error?: string;
  id?: string;
};

type FieldWrapperPassProps = Omit<FieldWrapperProps, 'children' | 'className'>;

const FieldWrapper = ({ children, error, ...props }: FieldWrapperProps) => {
  const { label, id } = props;
  return (
    <>
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <div>{children}</div>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
