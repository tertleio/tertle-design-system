import clsx from 'clsx';

import { Button } from '@/cmps/Els/Button';

type ControlsProps = {
  showEdit: boolean;
  showSave: boolean;
  showCancel?: boolean;
  // showDelete?: boolean;
  onSave: () => void;
  onEdit: () => void;
  // onDelete?: () => void;
  onCancel?: () => void;
};

const Controls = (props: ControlsProps) => {
  const {
    showEdit,
    showCancel,
    showSave,
    // showDelete,
    onEdit,
    onSave,
    onCancel,
    // onDelete,
  } = props;

  return (
    <div className={clsx('flex flex-row justify-end')}>
      {showEdit && (
        <Button
          className="border-orange dark:border-orange-dark"
          variant="secondaryOrange"
          icon="edit"
          onClick={onEdit}
        ></Button>
      )}
      {showCancel && (
        <Button
          className="border-red dark:border-red-dark"
          variant="secondaryRed"
          icon="cancel"
          onClick={onCancel}
        />
      )}
      {showSave && (
        <Button
          className="border"
          variant="primaryGreen"
          icon="save"
          onClick={onSave}
        ></Button>
      )}
    </div>
  );
};

export { Controls };
