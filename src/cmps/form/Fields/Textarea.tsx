import { useRef, useEffect } from 'react';
import { clsx } from '@/utils/classes';

import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStatus, FieldStatusProps } from '../Core/FieldStatus';

import { textStyles } from './styles';

const variants = {
  default: 'font-primary text-sm mb-[-0.35em]',
  compact: `font-secondary text-xs mb-[-0.25em] text-gray-500 dark:text-gray-400`,
  solid: `font-secondary border rounded-xl p-2`,
};

const spacings = {
  default: '',
  compact: 'font-secondary text-xs mb-[-0.25em]',
};

function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
  if (!e?.target) console.warn(`Expected a textarea ref to resize. Got '${e}'`);
  e.target.style.height = 'inherit';
  e.target.style.height = e.target.scrollHeight + 'px';
}

type TextareaProps = FieldStatusProps & {
  placeholder: string;
  variant?: keyof typeof variants;
  spacing?: keyof typeof spacings;
  label?: string;
  readOnly?: boolean;
  className?: string;
  registration: UseFormRegisterReturn;
  onValid?: (isValid: boolean) => void;
};

const Textarea = ({
  label,
  variant = 'default',
  spacing = 'default',
  placeholder,
  readOnly = false,
  error,
  className = '',
  registration,
  info,
  ...restUnknown
}: TextareaProps) => {
  const localRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref: regRefCallback, ...restRegistration } = registration || {};

  useEffect(() => {
    if (!localRef.current) return;

    resize({ target: localRef.current } as any);
  }, [localRef, className]);

  return (
    <label className="flex flex-col relative">
      <span className={clsx('flex items-center', spacings[spacing])}>
        {label}
        <FieldStatus
          error={error}
          info={info}
          className={clsx(!label && 'absolute right-0 top-2')}
        />
      </span>
      <textarea
        ref={(el) => {
          localRef.current = el;
          regRefCallback?.(el);
        }}
        placeholder={placeholder}
        autoComplete="off"
        readOnly={readOnly}
        rows={1}
        onInput={resize}
        onFocus={resize}
        {...restUnknown}
        {...restRegistration}
        // prettier-ignore
        className={clsx(
          'flex py-2 resize-none', textStyles.base,
          !readOnly && textStyles.editing,
          error && textStyles.error,
          variants[variant],
          className,
        )}
      />
    </label>
  );
};

export { Textarea };
