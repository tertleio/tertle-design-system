import clsx from 'clsx';

import { Controls } from './Controls';
import { Button, IconMember } from '@/cmps/Els';

type AsideProps = {
  buttons: Record<IconMember, string>;
  allowControls?: boolean;
  showEdit?: boolean;
  showCancel?: boolean;
  showSave?: boolean;
  className?: string;
  onEdit?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
};

const Aside = (props: AsideProps) => {
  const {
    buttons,
    allowControls = false,
    showEdit,
    showCancel,
    showSave,
    className,
    onEdit,
    onCancel,
    onSave,
  } = props;

  return (
    <ul className={clsx('flex items-center gap-3.5 sm:gap-2', className)}>
      {Object.entries(buttons).map((item, i) => {
        const iconName = item[0] as IconMember;
        const url = item[1] as string;
        return (
          <li key={i}>
            <a href={url}>
              <Button icon={iconName} variant="secondaryGray" />
            </a>
          </li>
        );
      })}
      {allowControls && (
        <Controls
          showEdit={showEdit}
          showCancel={showCancel}
          showSave={showSave}
          onEdit={onEdit}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
    </ul>
  );
};

export { Aside };
