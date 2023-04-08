import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ChoiceProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  onChange?: any;
  checked: boolean;
  value?: string | number;
  className?: string;
};

// TODO: switch

const Choice = (props: ChoiceProps) => {
  const { type, label, value, name, checked, onChange, id = '' } = props;
  console.log(id);

  return (
    <FieldWrapper label={label} name={name}>
      <input
        name={name}
        id={id}
        type={type}
        checked={checked}
        onChange={onChange}
        value={value}
        className="focus:ring-3 border-red-300 focus:ring-blue-300 h-3 w-7 "
      />
    </FieldWrapper>
  );
};

Choice.displayName = 'Choice';
export { Choice };
