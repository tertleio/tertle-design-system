import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ListProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  value: string;
};

const List = (props: ListProps) => {
  const { type, label, value, name, id } = props;

  return (
    <FieldWrapper label={label} id={value}>
      <input name={name} id={value} type={type} value={value} />
    </FieldWrapper>
  );
};

export { List };
