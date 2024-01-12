import clsx from 'clsx';

import { UseFormRegisterReturn } from 'react-hook-form';
import { ActionWrapper, type ActionWrapperProps } from '@/cmps/Core';
import { FieldStatus, type FieldStatusProps } from '../Core/FieldStatus';

type DropdownOptionType = {
  label: string;
  value: string | number | string[];
  icon?: string;
  disabled?: boolean;
};

export type DropdownProps = ActionWrapperProps &
  FieldStatusProps & {
    label?: string;
    registration: UseFormRegisterReturn;
    options: DropdownOptionType[];
    placeholder?: string;
    disablePlaceholder?: boolean;
    onChangeCapture?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    readOnly?: boolean;
    className?: string;
  };

const Dropdown = ({
  options = [],
  size = 'sm',
  label,
  error,
  info,
  placeholder = 'Select an option...',
  disablePlaceholder = false,
  registration,
  onChangeCapture,
  className,
  readOnly,
  ...rest
}: DropdownProps) => {
  return (
    <label
      className={clsx(
        'w-full font-primary gap-2 items-center text-gray-600  dark:text-gray-400',
        className
      )}
    >
      <span className={clsx('flex items-center')}>
        {label} <FieldStatus error={error} info={info} />
      </span>
      <ActionWrapper
        variant="tertiary"
        color={error ? 'red' : 'gray'}
        size={size}
        disabled={rest?.disabled}
        // prettier-ignore
        className={clsx(
            'items-center mr-[1px] mb-[1px]',
            readOnly && '!border-transparent pointer-events-none',
        )}
      >
        <select
          {...registration}
          {...rest}
          onChangeCapture={onChangeCapture}
          className={clsx(
            'w-full bg-transparent focus:outline-none',
            readOnly && 'appearance-none pl-1'
          )}
        >
          <option value="" disabled={disablePlaceholder}>
            {placeholder}
          </option>

          {options.map(({ label, value, icon, disabled = false }, i) => {
            return (
              <option key={i} value={value} disabled={disabled}>
                {icon} {label}
              </option>
            );
          })}
        </select>
      </ActionWrapper>
    </label>
  );
};

export { Dropdown };
export type { DropdownOptionType };
