import clsx from 'clsx';

import { Controls } from './Controls';
import { Button, IconMember } from '@/cmps/Els';
import { ControlsProps } from './Controls';

type AsideProps = ControlsProps & {
  buttons: Partial<Record<IconMember, string>>;
  allowControls?: boolean;
  className?: string;
};

const Aside = (props: AsideProps) => {
  const { buttons, allowControls = false, className } = props;

  return (
    <ul className={clsx('flex items-center gap-4 sm:gap-2', className)}>
      {Object.entries(buttons).map((item, i) => {
        const iconName = item[0] as IconMember;
        const url = item[1] as string;
        if (!url) return null;
        return (
          <li key={i}>
            <a href={url} target="_blank">
              <Button icon={iconName} variant="secondaryGray" />
            </a>
          </li>
        );
      })}
      {allowControls && <Controls {...props} />}
    </ul>
  );
};

export { Aside };
