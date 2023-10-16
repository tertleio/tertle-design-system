import { clsx } from '@/utils/classes';

const calcCircumference = (radius: number) => 2 * Math.PI * radius;
const circumference = calcCircumference(30);

type ProgressCircleProps = {
  show?: boolean;
  percent: number;
  withText?: boolean;
  className?: string;
};

const ProgressCircle = (props: ProgressCircleProps) => {
  const { percent = 0, withText = true, show = true, className } = props;

  return show ? (
    <div className="flex items-center justify-center relative ml-1.5">
      <svg viewBox="0 0 62 62" className={clsx(className || 'w-10 h-10')}>
        <circle
          className="text-gray-300 dark:text-gray-600"
          strokeWidth="2"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="31"
          cy="31"
        />
        <circle
          className={clsx(
            percent >= 80 && 'text-green dark:text-green-dark',
            percent < 80 && percent > 20 && 'text-orange dark:text-orange-dark',
            percent <= 20 && 'text-red dark:text-red-dark'
          )}
          strokeWidth="2"
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
      {withText && (
        <span className="absolute text-xs opacity-60 text-gray-500">
          {percent}
          {/* <span className="text-[8px]">%</span> */}
        </span>
      )}
    </div>
  ) : null;
};

export { ProgressCircle };
