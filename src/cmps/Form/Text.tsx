import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type TextProps = FieldWrapperPassProps & {
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  cb: any;
};

const Text = (props: TextProps) => {
  const { type, label, value, name, id, cb } = props;

  return (
    <FieldWrapper label={label} id={value}>
      <input
        name={name}
        id={value}
        type={type}
        value={value}
        onChange={(e) => cb(e.target.value)}
      />
    </FieldWrapper>
  );
};

export { Text };
