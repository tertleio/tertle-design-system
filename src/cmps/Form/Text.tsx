import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ListProps = FieldWrapperPassProps & {
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  cb: any;
};

const Text = (props: ListProps) => {
  const { type, label, value, name, id, cb } = props;

  // if type = checkbox | radio -> map

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
