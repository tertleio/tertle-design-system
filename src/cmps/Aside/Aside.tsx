import clsx from 'clsx';

import { Link } from '@/cmps/Core';
import { ProgressCircle } from '@/cmps/Progress';
import { Controls } from './Controls';
import { Button, IconMember } from '@/cmps/Core';
import { ControlsProps } from './Controls';

type AsideProps = ControlsProps & {
  buttons?: Partial<Record<IconMember, string>>;
  allowControls?: boolean;
  progress?: number;
  className?: string;
};

const Aside = (props: AsideProps) => {
  const { buttons, allowControls = false, progress = null, className } = props;

  return (
    <ul className={clsx('flex items-center gap-1 sm:gap-1.5', className)}>
      {buttons &&
        Object.entries(buttons).map((item, i) => {
          const iconName = item[0] as IconMember;
          const url = item[1] as string;
          if (!url) return null;
          return (
            <li key={i}>
              <Link
                to={!/^https?:\/\//i.test(url) ? '//' + url : url}
                target="_blank"
              >
                <Button
                  icon={iconName}
                  size="md"
                  variant="secondary"
                  color="gray"
                />
              </Link>
            </li>
          );
        })}

      {allowControls && <Controls {...props} />}
      {progress !== null && (
        <ProgressCircle percent={progress} withText={true} className="w-7" />
      )}
    </ul>
  );
};

export { Aside };
