import { clsx } from '@/utils/classes';

import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStatus, FieldStatusProps } from '../Core/FieldStatus';
import { Icon, type IconMember } from '@/cmps/Core';

import { textStyles } from './styles';

const variants = {
  default: 'font-primary text-sm mb-[-0.35em]',
  compact: `font-secondary text-xs mb-[-0.5em] text-gray-700 dark:text-gray-400`,
  solid: `font-secondary text-sm mb-[-0.35em]`,
};

export type TextProps = FieldStatusProps & {
  placeholder: string;
  registration: UseFormRegisterReturn;
  variant?: keyof typeof variants;
  icon?: IconMember;
  label?: string;
  isError?: boolean;
  type?: 'text' | 'email' | 'password';
  readOnly?: boolean;
  className?: string;
};

const Text = ({
  label,
  variant = 'default',
  type = 'text',
  className,
  info,
  icon,
  readOnly = false,
  isError = false,
  error,
  registration,
  ...rest
}: TextProps) => {
  return (
    <label className="w-full relative">
      <span className={clsx('flex items-center', variants[variant])}>
        {label}
        <FieldStatus
          error={error}
          info={info}
          className={clsx(!label && 'absolute right-0 bottom-1/3')}
        />
      </span>

      <span className={clsx(icon && 'flex items-center gap-2')}>
        {icon && (
          <Icon
            name={icon}
            size="sm"
            color="gray"
            className="border-b border-gray-400 dark:border-gray-700 h-[2.35em]"
          />
        )}
        <input
          type={type}
          readOnly={readOnly}
          autoComplete="off"
          {...registration}
          {...rest}
          // prettier-ignore
          className={clsx(
          'py-[0.35em] px-0', textStyles.base,
          !readOnly ? `w-full ${textStyles.editing}` : 'border-none',
          error || isError && 'border-red dark:border-red-dark',
          className
        )}
        />
      </span>
    </label>
  );
};

export { Text };
