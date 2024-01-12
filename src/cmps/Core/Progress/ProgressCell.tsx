import { ReactNode } from 'react';
import { clsx } from '@/utils/classes';
import { useState } from 'react';

import { Tooltip } from '..';

const variants: Record<string, Record<number, string>> = {
  default: {
    0: 'bg-gray-200 dark:bg-gray-800',
    10: 'bg-green bg-green-dark opacity-10',
    20: 'bg-green bg-green-dark opacity-20',
    30: 'bg-green bg-green-dark opacity-30',
    40: 'bg-green bg-green-dark opacity-40',
    50: 'bg-green bg-green-dark opacity-50',
    60: 'bg-green bg-green-dark opacity-60',
    70: 'bg-green bg-green-dark opacity-70',
    80: 'bg-green bg-green-dark opacity-80',
    90: 'bg-green bg-green-dark opacity-90',
    100: 'bg-green bg-green-dark opacity-100',
  },
  trafficLights: {
    0: '',
    10: 'bg-red dark:bg-red-dark opacity-90',
    20: 'bg-red dark:bg-red-dark opacity-60',
    30: 'bg-red dark:bg-red-dark opacity-30',
    40: 'bg-orange dark:bg-orange-dark opacity-30',
    50: 'bg-orange dark:bg-orange-dark opacity-60',
    60: 'bg-orange dark:bg-orange-dark',
    70: 'bg-green dark:bg-green-dark opacity-40',
    80: 'bg-green dark:bg-green-dark opacity-80',
    90: 'bg-green dark:bg-green-dark',
    100: 'bg-green dark:bg-green-dark',
  },
};

type ScoreToNearestTen = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
type ProgressCellProps = {
  score: ScoreToNearestTen;
  info?: ReactNode | string;
  variant?: keyof typeof variants;
  className?: string;
};

const ProgressCell = ({
  score,
  info,
  variant = 'default',
  className,
}: ProgressCellProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative w-fit h-fit">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="progressbar"
        // prettier-ignore
        className={clsx(
          'w-3 h-3 rounded-[0.15em] transition-all duration-200 ease-in-out',
          variants[variant][score],
          score == 0 && '!border border-1 border-gray-300 dark:border-gray-700 border-opacity-100',
          className,
        )}
      ></div>
      {info && <Tooltip showTooltip={showTooltip}>{info}</Tooltip>}
    </div>
  );
};

export { type ScoreToNearestTen, ProgressCell };
