import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';

import { Icon, Button } from '@/cmps/Core';

type SectionProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
  title?: React.ReactNode | string;
  aside?: React.ReactNode;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
};

type SectionPassProps = Omit<SectionProps, 'class' | 'children'>;

const Section = (props: SectionProps) => {
  const {
    isLoading = false,
    title,
    aside,
    children,
    className = '',
    onOpen,
    onClose,
  } = props;
  const [searchParams] = useSearchParams();
  const isEditingGoal = searchParams.get('goal') === 'edit';

  return (
    <div
      // prettier-ignore
      className={clsx(
        'border-b border-gray-300 text-gray-600 text-[15px] first:rounded-t-3xl last:rounded-b-3xl  last:border-b-0 dark:border-gray-700',
        'px-5 py-5 sm:px-7 sm:py-7 sm:first:pt-7 sm:last:pb-8',
        onOpen && !isEditingGoal && 'hover:bg-gray-100 dark:hover:bg-gray-900',
        className
      )}
      role={onOpen ? 'button' : 'div'}
      tabIndex={0}
      onClick={() => {
        if (isEditingGoal) return;
        onOpen && onOpen();
      }}
    >
      <div className="flex justify-between pb-2 sm:pb-2">
        <div className="flex gap-3">
          {onClose && (
            <Button
              variant="tertiary"
              size="md"
              onClick={onClose}
              classNameText="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h20"
                />
              </svg>
            </Button>
          )}
          {title && (typeof title === 'string' ? <h2>{title}</h2> : title)}
        </div>
        {isLoading && (
          <span className="py-1.2 absolute right-0 top-0">
            <Button
              variant="secondary"
              className="mr-0 bg-transparent p-0 dark:bg-transparent"
            >
              <Icon name="spinner" size="md" />
            </Button>
          </span>
        )}
        {aside && (
          <div
            className={clsx(
              'ml-1 flex h-full flex-col justify-start',
              isLoading && 'pointer-events-none cursor-default opacity-30'
            )}
          >
            {aside}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export { Section, type SectionPassProps };
