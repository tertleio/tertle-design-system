import { ReactNode } from 'react';
import clsx from 'clsx';

import { ActionWrapper, ActionWrapperProps } from '@/cmps/Core';

type FieldWrapperProps = ActionWrapperProps & {
  children: ReactNode;
  type?: 'text' | 'email' | 'password' | 'radio' | 'checkbox';
  readOnly?: boolean;
  label?: string;
  checked?: boolean;
  info?: string;
  error?: string;
};

type FieldWrapperPassProps = Omit<
  FieldWrapperProps,
  'children' | 'className' | 'type'
>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const {
    size = 'sm',
    readOnly = false,
    label,
    error,
    checked,
    className = '',
    children,
  } = props;
  const emojiSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <>
      <label className={clsx(className)}>
        <ActionWrapper
          variant="tertiary"
          color={error ? 'red' : readOnly && checked ? 'green' : 'gray'}
          size={size}
          // prettier-ignore
          className={clsx(
            'flex items-center mr-[1px] mb-[1px] !border-opacity-40 !justify-start',
            readOnly && '!border-transparent pointer-events-none',
            readOnly && !checked && 'hidden sm:flex sm:opacity-30',
        )}
        >
          <span className="flex items-center gap-2">
            <span className={emojiSize}>{children}</span>
            {label}
          </span>
        </ActionWrapper>
      </label>
      {/* {error && <div>{error}</div>} */}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
