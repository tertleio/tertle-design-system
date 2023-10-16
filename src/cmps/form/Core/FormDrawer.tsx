import { useEffect, useState } from 'react';
import { clsx } from '@/utils/classes';

import { Button } from '../../Core';
import type { QueryStatus } from '@tanstack/react-query';

// TODO:
// 1. add delete
// 2. other statuses, info on error, warning, etc.

type FormMutationStatus = Omit<QueryStatus, 'idle'> | false;
type FormDrawerProps = {
  formId: string; // TODO: create a type that warns if formId is not in formIds or duplicate
  showTrigger: boolean;
  status: FormMutationStatus;
  size?: 'sm' | 'md' | 'lg';
  onEdit: () => void;
  onCancel: () => void;
  onSuccess: () => void;
  // onDelete?: () => void;
};

const FormDrawer = (props: FormDrawerProps) => {
  const [showResult, setShowResult] = useState(false);
  const {
    formId,
    size = 'md',
    status,
    showTrigger,
    onSuccess,
    onEdit,
    onCancel,
  } = props;

  useEffect(() => {
    if (status === 'success') onSuccess && onSuccess();
    if (status === 'error' || status === 'success') {
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
      }, 2000);
    }
    // eslint-disable-next-line
  }, [status]);

  return (
    <div className={clsx('flex items-center gap-2')}>
      {showTrigger ? (
        <Button
          icon="edit"
          size={size}
          variant="secondary"
          color="orange"
          onClick={onEdit}
        />
      ) : (
        <>
          <Button
            icon="cancel"
            size={size}
            variant="secondary"
            color="red"
            onClick={onCancel}
          />
          <Button
            form={formId} // submits based on formId instead of passing a callback
            type="submit"
            icon={status === 'loading' ? 'spinner' : 'save'}
            size={size}
            variant="primary"
            color="green"
            disabled={status === 'loading'}
          />
        </>
      )}

      {showResult && status === 'success' && (
        <div className="flex flex-row justify-end gap-3.5 sm:gap-2">
          <Button
            variant="tertiary"
            size="sm"
            color="green"
            className="pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="w-[18x] h-[18px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </Button>
        </div>
      )}

      {!!showResult && status === 'error' && (
        <div className="flex flex-row justify-end gap-3.5 sm:gap-2">
          <Button
            variant="tertiary"
            size="sm"
            color="red"
            className="pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="w-[18x] h-[18px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
};
export { FormDrawer, type FormDrawerProps, type FormMutationStatus };
