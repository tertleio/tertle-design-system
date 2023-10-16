import clsx from 'clsx';

type TooltipProps = {
  showTooltip: boolean;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const Tooltip = ({ showTooltip, children, className }: TooltipProps) => {
  return (
    <div
      className={clsx(
        !showTooltip && 'hidden',
        'absolute min-w-[10em] z-50 left-1/2 -translate-x-1/2 mt-7 flex justify-center items-center',
        className
      )}
    >
      <div className="mb-3 relative px-3 py-2 bg-white dark:bg-gray-900 rounded-md border border-gray-400 dark:border-gray-700">
        {children}
        <svg
          className="absolute left-1/2 top-[-0.68em] -translate-x-1/2 rotate-180 text-gray-400 dark:text-gray-700"
          width={16}
          height={10}
          viewBox="0 0 16 10"
        >
          <polygon
            points="0,0 16,0 8,10"
            className="fill-current text-white dark:text-gray-900"
          />
          <line
            x1="0"
            y1="0"
            x2="8"
            y2="9"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="16"
            y1="0"
            x2="8"
            y2="9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
};

export { Tooltip };
