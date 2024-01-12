import { cn } from '@/utils/classes';
import { Icon } from '../Icon';

const variants = {
  default: '',
  header: 'dark bg-black dark:bg-gray-800',
};

const roles = {
  default: 'none',
  button: 'button',
};

type SectionContainerProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  role?: keyof typeof roles;
  variant?: keyof typeof variants;
  className?: string;
};

const SectionContainer = ({
  isLoading = false,
  role = 'default',
  onClick,
  children,
  variant = 'default',
  className,
  ...rest
}: SectionContainerProps) => {
  return (
    <section
      role={roles[role]}
      // prettier-ignore
      className={cn(
        'border-b border-gray-300 text-gray-600 text-[15px] first:rounded-t-2xl last:rounded-b-2xl  last:border-b-0 dark:border-gray-700',
        'p-4 sm:p-7',
        role === 'button' && 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900',
        isLoading && 'relative',
        variants[variant],
        className
      )}
      onClick={() => {
        onClick?.();
      }}
      {...rest}
    >
      {isLoading ? (
        <>
          <Icon
            name="spinner"
            color="orange"
            size="md"
            className="absolute right-8"
          />
          {children}
        </>
      ) : (
        children
      )}
    </section>
  );
};

export { SectionContainer, type SectionContainerProps };
