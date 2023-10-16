import { clsx } from '@/utils/classes';

const variants = {
  default: '',
  header: 'dark bg-black dark:bg-gray-800',
};

type SectionContainerProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

const SectionContainer = ({
  children,
  variant = 'default',
  className,
  ...rest
}: SectionContainerProps) => {
  return (
    <div
      className={clsx(
        'border-b border-gray-300 text-gray-600 text-[15px] first:rounded-t-3xl last:rounded-b-3xl  last:border-b-0 dark:border-gray-700',
        'px-5 py-5 sm:px-7 sm:py-7 sm:first:pt-7 sm:last:pb-8',
        variants[variant],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { SectionContainer, type SectionContainerProps };
