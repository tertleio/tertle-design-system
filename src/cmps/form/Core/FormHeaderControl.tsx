import {
  ProgressCircle,
  SectionHeader,
  type SectionHeaderProps,
} from '../../Core';
import { LinksList, type LinkStruct } from '../../Links';
import { FormDrawer, type FormMutationStatus } from './FormDrawer';

import { useFormDrawer, UseFormDrawerProps } from '@/hooks/useFormDrawer';

type FormHeaderControlProps = SectionHeaderProps & {
  formId: UseFormDrawerProps['formId'] | string;
  formDrawer: ReturnType<typeof useFormDrawer>;
  status: FormMutationStatus;
  allowControl?: boolean;
  links?: LinkStruct[];
  onReset: (values?: Record<string, unknown>) => void;
  score?: number;
};

const FormHeaderControl = (props: FormHeaderControlProps) => {
  const {
    formId,
    allowControl = false,
    heading,
    links = [],
    formDrawer: fD,
    status,
    score,
    onReset,
  } = props;

  return (
    <SectionHeader
      heading={heading}
      className="pb-2 sm:pb-3"
      aside={
        <div className="flex items-center gap-2">
          <LinksList show={!fD.isEditing} links={links} />

          {score !== undefined && (
            <ProgressCircle
              show={fD.isEditing || score < 100}
              percent={score}
              className="w-7"
            />
          )}

          {(fD.isEditable || allowControl) && (
            <FormDrawer
              formId={formId}
              showTrigger={!fD.isEditing}
              status={status}
              onEdit={fD.open}
              onSuccess={fD.close}
              onCancel={() => {
                if (fD.isEditing && onReset) {
                  onReset();
                }
                fD.close();
              }}
            />
          )}
        </div>
      }
    />
  );
};

export { FormHeaderControl };
export type { FormHeaderControlProps };
