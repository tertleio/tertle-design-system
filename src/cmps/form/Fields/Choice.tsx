import React from 'react';
import { clsx } from '@/utils/classes';
import { ActionWrapper, ActionWrapperProps } from '@/cmps/Core';
import { UseFormRegisterReturn } from 'react-hook-form';

const colors = {
  base: `peer-checked:text-black peer-checked:dark:text-white peer-checked:opacity-100`,
  gray: `peer-checked:text-gray-600 peer-checked:dark:text-gray-500 peer-checked:opacity-100`,
  green: `peer-checked:text-green peer-checked:dark:text-green-dark peer-checked:opacity-100`,
  orange: `peer-checked:text-orange peer-checked:dark:text-orange-dark peer-checked:opacity-100`,
  red: `peer-checked:text-red peer-checked:dark:text-red-dark peer-checked:opacity-100`,
};

type ChoiceProps = ActionWrapperProps & {
  label?: string;
  registration: UseFormRegisterReturn;
  constantValue?: string;
  defaultChecked?: boolean;
  type: 'radio' | 'checkbox';
  color?: keyof typeof colors;
  readOnly?: boolean;
  readOnlyIcon?: React.ReactNode | string;
  onChangeCapture?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  children?: React.ReactNode; // for custom components e.g probably don't want to pass a standard label prop but re-use the interaction logic
  className?: string;
};

const Choice = (props: ChoiceProps) => {
  const {
    label,
    isError,
    readOnly = false,
    readOnlyIcon,
    size,
    type,
    color = 'gray',
    constantValue,
    onChangeCapture,
    children,
    registration,
    className,
    ...rest
  } = props;

  return (
    <label className={clsx(className, readOnly && 'pointer-events-none')}>
      <ActionWrapper
        variant="tertiary"
        color={isError ? 'red' : 'gray'}
        disabled={rest?.disabled}
        size={size}
        className={clsx(
          'flex gap-1.5 content-center items-center',
          readOnly && '!border-transparent',
          className
        )}
      >
        {children}

        <input
          {...registration}
          {...rest}
          onChangeCapture={onChangeCapture}
          type={type}
          defaultValue={constantValue}
          className={clsx('peer', readOnly && '!hidden')}
        />
        {readOnly && readOnlyIcon && (
          <div className="text-xs opacity-30 peer-checked:opacity-100 ">
            {readOnlyIcon}
          </div>
        )}

        {label && (
          <span
            className={clsx(
              readOnly ? colors[color] : colors['base'],
              readOnly && 'opacity-30'
            )}
          >
            {label}
          </span>
        )}
      </ActionWrapper>
    </label>
  );
};

export { Choice };
