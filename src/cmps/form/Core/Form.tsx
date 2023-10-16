import { zodResolver } from '@hookform/resolvers/zod';
import { clsx } from '@/utils/classes';
import { ZodType, ZodTypeDef } from 'zod';
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
// https://react-hook-form.com/docs/useform

import { useScorer } from '@/hooks/useScorer';
import { useFormDrawer, UseFormDrawerProps } from '@/hooks/useFormDrawer';

type FormProps<TFormValues extends FieldValues, Schema> = {
  id: UseFormDrawerProps['formId'] | string;
  schema: Schema;
  onSubmit: SubmitHandler<TFormValues>;
  scoreMaxCount?: number;
  options?: UseFormProps<TFormValues>;
  className?: string;
  children: ({
    formId,
    methods,
    formDrawer,
    scorer,
  }: {
    formId: UseFormDrawerProps['formId'];
    methods: UseFormReturn<TFormValues>;
    formDrawer: ReturnType<typeof useFormDrawer>;
    scorer: ReturnType<typeof useScorer>;
  }) => React.ReactNode;
};

const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  id,
  onSubmit,
  children,
  options,
  schema,
  scoreMaxCount,
  className,
  ...rest
}: FormProps<TFormValues, Schema>) => {
  const formDrawer = useFormDrawer({ formId: id });
  const scorer = useScorer({ scoreMaxCount });
  const methods = useForm<TFormValues>({
    resolver: schema && zodResolver(schema),
    mode: 'onTouched', // default - override by passing in options prop
    ...options,
  });

  // methods.register('score', { value: scorer.score });
  // methods.setValue('score', scorer.score);
  // console.group('FORM score', scorer.score);

  return (
    <form
      id={id}
      onSubmit={methods.handleSubmit(onSubmit)}
      className={clsx(className)}
      {...rest}
    >
      {children({
        formId: id,
        methods,
        formDrawer,
        scorer,
      })}
    </form>
  );
};

export { Form };
