import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

export type TextProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  cb: any;
  type?: 'text' | 'email' | 'password';
};

const Text = (props: TextProps) => {
  const { name, value, cb, type = 'text', label } = props;

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
