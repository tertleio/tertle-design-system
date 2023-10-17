import { clsx } from '@/utils/classes';

import { Icons } from './icons';
import { colors } from '../Actions/ActionWrapper';

const sizes = {
  xs: 'w-[10px] h-[10px]',
  sm: 'w-[12px] h-[12px]',
  md: 'w-[14px] h-[14px]',
  lg: 'w-[20px] h-[20px]',
  xl: 'w-[24px] h-[24px]',
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

export { Icon, type IconMember };
