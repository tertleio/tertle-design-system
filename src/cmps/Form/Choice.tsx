import React from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ChoiceProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  value?: string | number;
  readOnly?: boolean;
  readOnlyIcon?: React.ReactNode | string;
  className?: string;
};

// TODO: switch

const Choice = (props: ChoiceProps) => {
  const {
    type,
    label,
    value,
    name,
    checked,
    onChange,
    id,
    readOnly = false,
    readOnlyIcon = '',
    className = '',
  } = props;

  return (
    <FieldWrapper label={label} checked={checked}>
      {readOnly ? (
        <span className="mr-3 h-5 w-5 text-sm">{readOnlyIcon}</span>
      ) : (
        <input
          readOnly={readOnly}
          name={name}
          id={id}
          type={type}
          checked={checked}
          onChange={onChange}
          value={value}
          className={`
            mx-6 mt-[0.3em] h-4 checked:border-transparent
            focus:ring-0 
            ${className}`}
        />
      )}
    </FieldWrapper>
  );
};

Choice.displayName = 'Choice';
export { Choice };
