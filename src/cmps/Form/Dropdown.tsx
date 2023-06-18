import clsx from 'clsx';

import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type Opt = {
  label: string;
  value: string | number | string[];
  emoji?: string;
};

export type DropdownProps = FieldWrapperPassProps & {
  name: string;
  opts: Opt[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
};

const Dropdown = ({ name, opts, label, onChange, ...props }: DropdownProps) => {
  return (
    <FieldWrapper {...props}>
      <select
        name={name}
        onChange={onChange}
        className={clsx('bg-transparent focus:outline-none')}
      >
        {opts.map(({ label, value, emoji }) => (
          <option key={label?.toString()} value={value}>
            {emoji} {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export { Dropdown };
