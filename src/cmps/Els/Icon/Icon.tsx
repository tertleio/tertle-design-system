// imported icon base size must be 16x16px
import * as ICONS from '@/assets/icons';
import clsx from 'clsx';

// prettier-ignore
const icons = {
  spinner: ['M4 12a8 8 1 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'],
  ...ICONS
}

const sizes = {
  sm: 'w-[14px] h-[14px]',
  md: 'w-[18px] h-[18px]',
  lg: 'w-[20px] h-[20px]',
};

type IconMember = keyof typeof icons;
type IconProps = {
  name: IconMember;
  size?: keyof typeof sizes;
  className?: string;
};

const Icon = (props: IconProps) => {
  const {
    name = '',
    className = 'fill-black dark:fill-white',
    size = 'sm',
  } = props;
  const paths = icons[name as IconMember];
  const isSpinner = name === 'spinner';

  return (
    <svg
      className={clsx(isSpinner && 'animate-spin', className, sizes[size])}
      viewBox={clsx(isSpinner ? '0 0 24 24' : '0 0 16 16')}
      fill="currentColor"
    >
      {isSpinner && (
        <circle
          className="opacity-10"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          fill="none"
          strokeWidth="4"
        ></circle>
      )}
      {paths.map((path, i) => (
        <path className={clsx(isSpinner && 'opacity-30')} key={i} d={path} />
      ))}
    </svg>
  );
};

export { Icon, type IconMember };
