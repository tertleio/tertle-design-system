import { clsx } from '@/utils/classes';

type SectionHeaderProps = {
  heading?: React.ReactNode | string;
  subheading?: React.ReactNode | string;
  aside?: React.ReactNode;
  className?: string;
};

const SectionHeader = (props: SectionHeaderProps) => {
  const { heading, subheading, aside, className } = props;

  return (
    <div className={clsx('flex justify-between items-start  mb-2', className)}>
      <div>
        {typeof heading === 'string' ? <h2>{heading}</h2> : heading}
        {typeof subheading === 'string' ? (
          <p className="text-sm text-gray-500">{subheading}</p>
        ) : (
          subheading
        )}
      </div>

      {aside}
    </div>
  );
};

export { SectionHeader, type SectionHeaderProps };
