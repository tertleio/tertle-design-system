import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ListProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  value: string;
  className?: string;
};

// tw examples: https://freefrontend.com/tailwind-radio-buttons/

// 1. vertical or horizontal (easily changeable)
// 2. Needs to wrap inside a box to selctable (mobile-like taps)

const List = (props: ListProps) => {
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

export { List };
