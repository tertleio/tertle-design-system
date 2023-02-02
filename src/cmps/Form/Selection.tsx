import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type SelectionProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  value: string;
  className?: string;
};

// TODO: switch

const Selection = (props: SelectionProps) => {
  const { type, label, value, name, id } = props;

  return (
    <FieldWrapper label={label} id={value}>
      <input
        name={name}
        id={value}
        type={type}
        value={value}
        className="focus:ring-3 h-3 w-7 border-red-300 focus:ring-blue-300"
      />
    </FieldWrapper>
  );
};

export { Selection };
