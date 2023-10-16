import clsx from 'clsx';

import { UseFormRegisterReturn } from 'react-hook-form';
import { ActionWrapper, type ActionWrapperProps } from '@/cmps/Core';
import { FieldStatus, type FieldStatusProps } from '../Core/FieldStatus';

type Option = {
  label: string;
  value: string | number | string[];
  icon?: string;
};

export type DropdownProps = ActionWrapperProps &
  FieldStatusProps & {
    label?: string;
    registration: UseFormRegisterReturn;
    options: Option[];
    readOnly?: boolean;
    className?: string;
  };

const Dropdown = ({
  options,
  size = 'sm',
  label,
  error,
  info,
  registration,
  className,
  readOnly,
  ...rest
}: DropdownProps) => {
  return (
    <label
      className={clsx('flex font-secondary gap-2 items-center', className)}
    >
      {label} <FieldStatus error={error} info={info} />
      <ActionWrapper
        variant="tertiary"
        color={error ? 'red' : 'gray'}
        size={size}
        disabled={rest?.disabled}
        // prettier-ignore
        className={clsx(
            'flex items-center mr-[1px] mb-[1px]',
            readOnly && '!border-transparent pointer-events-none',
        )}
      >
        <select
          {...registration}
          className={clsx('bg-transparent focus:outline-none')}
        >
          {options.map(({ label, value, icon }) => (
            <option key={label} value={value}>
              {icon} {label}
            </option>
          ))}
        </select>
      </ActionWrapper>
    </label>
  );
};

export { Dropdown };
