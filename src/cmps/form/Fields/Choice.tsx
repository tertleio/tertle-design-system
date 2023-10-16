import React from 'react';
import { clsx } from '@/utils/classes';
import { ActionWrapper, ActionWrapperProps } from '@/cmps/Core';
import { UseFormRegisterReturn } from 'react-hook-form';

type ChoiceProps = ActionWrapperProps & {
  label: string;
  registration: UseFormRegisterReturn;
  constantValue: string;
  type: 'radio' | 'checkbox';
  readOnly?: boolean;
  readOnlyIcon?: React.ReactNode | string;
  isError?: boolean;
  className?: string;
};

const Choice = (props: ChoiceProps) => {
  const {
    label,
    isError,
    readOnly = false,
    readOnlyIcon = '❓',
    size = 'md',
    constantValue,
    registration,
    className,
    ...rest
  } = props;

  return (
    <label
      className={clsx(
        'font-secondary',
        readOnly && 'pointer-events-none',
        className
      )}
    >
      <ActionWrapper
        variant="tertiary"
        color={isError ? 'red' : 'gray'}
        disabled={rest?.disabled}
        size={size}
        className={clsx(
          'flex items-center border-opacity-40 justify-start',
          readOnly && '!border-transparent'
        )}
      >
        <div className="flex gap-1.5 items-center">
          <input
            {...registration}
            {...rest}
            defaultValue={constantValue}
            className={clsx('peer', readOnly && '!hidden')}
          />
          <span
            className={clsx(
              'text-xs',
              readOnly ? 'opacity-40 peer-checked:opacity-100' : 'hidden'
            )}
          >
            {readOnlyIcon}
          </span>
          <span
            className={clsx(
              'peer-checked:text-green peer-checked:dark:text-green-dark',
              readOnly && 'opacity-40 peer-checked:opacity-100'
            )}
          >
            {label}
          </span>
        </div>
      </ActionWrapper>
    </label>
  );
};

export { Choice };
