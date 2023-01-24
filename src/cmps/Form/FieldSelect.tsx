import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type Opt = {
  str: string;
  val: string | number | string[];
};

export type FieldSelectProps = FieldWrapperPassProps & {
  fieldKey: string;
  className?: string;
  defaultVal?: string;
  placeholder?: string;
  opts: Opt[];
};

const FieldSelect = (props: FieldSelectProps) => {
  const { fieldKey, label, opts, error, className, defaultVal, placeholder } =
    props;

  return (
    <FieldWrapper label={label} error={error}>
      <select
        name={fieldKey}
        className={className}
        defaultValue={defaultVal}
        placeholder={placeholder}
      >
        {opts.map(({ str, val }) => (
          <option key={str?.toString()} value={val}>
            {str}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

export { FieldSelect };
