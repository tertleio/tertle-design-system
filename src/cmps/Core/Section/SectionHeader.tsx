import { clsx } from '@/utils/classes';

type SectionHeaderProps = {
  heading: React.ReactNode | string;
  subheading?: string;
  aside?: React.ReactNode;
  className?: string;
};

const SectionHeader = (props: SectionHeaderProps) => {
  const { heading, subheading, aside, className } = props;

  return (
    <div className={clsx('flex justify-between', className)}>
      <div>
        {typeof heading === 'string' ? <h2>{heading}</h2> : heading}
        {subheading && <p className="text-sm text-gray-500">{subheading}</p>}
      </div>
      <div
        className={clsx(
          'ml-1 flex h-full flex-col justify-start'
          // isLoading && 'pointer-events-none cursor-default opacity-30'
        )}
      >
        {aside}
      </div>
    </div>
  );
};

export { SectionHeader, type SectionHeaderProps };
