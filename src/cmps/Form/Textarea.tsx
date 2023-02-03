import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type TextareaProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  rows?: number;
  cols?: number;
  cb: any;
};

const Textarea = (props: TextareaProps) => {
  const { label, value, name, rows, cols, cb } = props;

  return (
    <FieldWrapper label={label} id={value}>
      <textarea
        name={name}
        id={value}
        value={value}
        rows={rows ?? 5}
        cols={cols ?? 1}
        onChange={(e) => cb(e.target.value)}
      />
    </FieldWrapper>
  );
};

export { Textarea };
