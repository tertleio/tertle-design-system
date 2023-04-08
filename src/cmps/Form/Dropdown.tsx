import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type Opt = {
  label: string;
  value: string | number | string[];
};

export type DropdownProps = FieldWrapperPassProps & {
  name: string;
  opts: Opt[];
  placeholder?: string;
  className?: string;
};

const Dropdown = (props: DropdownProps) => {
  const { name, label, opts, error, className, placeholder } = props;

  return (
    <FieldWrapper label={label} error={error} {...props}>
      <select
        name={name}
        placeholder={placeholder}
        className={`
         bg-white focus:outline-none dark:bg-gray-800
      ${className}`}
      >
        {opts.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export { Dropdown };
