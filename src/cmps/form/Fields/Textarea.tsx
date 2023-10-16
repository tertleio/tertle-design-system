import { useRef, useEffect } from 'react';
import { clsx } from '@/utils/classes';

import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldStatus, FieldStatusProps } from '../Core/FieldStatus';

import { textStyles } from './styles';

function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
  if (!e?.target) console.warn(`Expected a textarea ref to resize. Got '${e}'`);
  e.target.style.height = 'inherit';
  e.target.style.height = e.target.scrollHeight + 'px';
}

type TextareaProps = FieldStatusProps & {
  placeholder: string;
  label?: string;
  readOnly?: boolean;
  className?: string;
  registration: UseFormRegisterReturn;
  onValid?: (isValid: boolean) => void;
};

const Textarea = ({
  label,
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
  }, [localRef]);

  return (
    <label className="flex flex-col">
      <span className="flex gap-1 text-sm items-center font-primary text-gray-600  dark:text-gray-400">
        {label} <FieldStatus error={error} info={info} />
      </span>
      <textarea
        ref={(el) => {
          localRef.current = el;
          regRefCallback?.(el);
        }}
        placeholder={placeholder}
        autoComplete="off"
        readOnly={readOnly}
        onInput={resize}
        onFocus={resize}
        {...restUnknown}
        {...restRegistration}
        // prettier-ignore
        className={clsx(
          'flex pt-1 pb-3 resize-none leading-5', textStyles.base,
          !readOnly && textStyles.editing,
          error && textStyles.error,
          className,
        )}
      />
    </label>
  );
};

export { Textarea };
