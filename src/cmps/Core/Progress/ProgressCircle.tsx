import { clsx } from '@/utils/classes';
import React from 'react';

const calcCircumference = (radius: number) => 2 * Math.PI * radius;
const circumference = calcCircumference(30);

type ProgressCircleProps = {
  percent: number;
  show?: boolean;
  innerCircle?: string | React.ReactNode;
  className?: string;
};

const ProgressCircle = (props: ProgressCircleProps) => {
  const { percent = 0, innerCircle, show = true, className } = props;

  const color =
    percent === 0
      ? 'text-gray-300 dark:text-gray-600'
      : percent < 40
      ? 'text-red dark:text-red-dark'
      : percent < 70
      ? 'text-orange text-orange-dark'
      : 'text-green dark:text-green-dark';

  return show ? (
    <div className="flex items-center justify-center relative ml-1.5">
      <svg
        viewBox="0 0 62 62"
        className={clsx(className || 'w-10 h-10', 'text-red')}
      >
        <circle
          className="text-gray-300 dark:text-gray-700"
          strokeWidth="3"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="31"
          cy="31"
        />
        <circle
          className={clsx('transition-all duration-200 ease-in-out', color)}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={`${
            circumference - (percent / 100) * circumference
          }`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="31"
          cy="31"
        />
      </svg>
      <span className={clsx('absolute', color)}>{innerCircle}</span>
    </div>
  ) : null;
};

export { ProgressCircle };
