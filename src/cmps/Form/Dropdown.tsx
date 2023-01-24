import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type Opt = {
  label: string;
  value: string | number | string[];
};

export type FieldSelectProps = FieldWrapperPassProps & {
  name: string;
  opts: Opt[];
  placeholder?: string;
  className?: string;
};

const Dropdown = (props: FieldSelectProps) => {
  const { name, label, opts, error, className, placeholder } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <select name={name} placeholder={placeholder} className={className}>
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
