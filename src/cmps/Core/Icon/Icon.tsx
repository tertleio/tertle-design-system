import { clsx } from '@/utils/classes';

import { Icons } from './Icons';
import { colors } from '../Actions/ActionWrapper';

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
};

type IconMember = keyof typeof Icons;
type IconProps = {
  name: IconMember;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
};

const Icon = (props: IconProps) => {
  const { name = 'link', color, size = 'sm', className } = props;
  const iconFn = Icons[name];

  return iconFn({
    className: clsx(sizes[size], color && colors[color], className),
  });
};

export { Icon };
export type { IconProps, IconMember };
