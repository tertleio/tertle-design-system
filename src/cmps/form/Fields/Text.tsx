import { clsx } from '@/utils/classes';

import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStatus, FieldStatusProps } from '../Core/FieldStatus';

import { textStyles } from './styles';

export type TextProps = FieldStatusProps & {
  placeholder: string;
  registration: UseFormRegisterReturn;
  label?: string;
  type?: 'text' | 'email' | 'password';
  readOnly?: boolean;
  className?: string;
};

const Text = ({
  label,
  type = 'text',
  className,
  info,
  readOnly = false,
  error,
  registration,
  ...rest
}: TextProps) => {
  return (
    <label className="w-full">
      <span className="flex gap-1 mb-[-0.35em] text-sm items-center font-primary text-gray-600  dark:text-gray-400">
        {label} <FieldStatus error={error} info={info} />
      </span>
      <input
        type={type}
        readOnly={readOnly}
        autoComplete="off"
        {...registration}
        {...rest}
        // prettier-ignore
        className={clsx(
          'py-[0.35em] px-0', textStyles.base,
          !readOnly && 'w-full', textStyles.editing,
          error && 'border-red dark:border-red-dark',
          className
        )}
      />
    </label>
  );
};

export { Text };
