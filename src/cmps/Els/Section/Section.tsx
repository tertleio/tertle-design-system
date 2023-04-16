import clsx from 'clsx';

const spacings = `px-5 py-6 first:pb-8 sm:py-7 sm:px-7 sm:pb-9`;
// const clickable = `hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900`;

type SectionProps = {
  title?: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

const Section = (props: SectionProps) => {
  const { title, aside, children, className = '' } = props;

  return (
    <div
      className={clsx(
        'border-b border-gray-300 text-gray-600 first:rounded-t-3xl last:rounded-b-3xl  last:border-b-0 dark:border-gray-700',
        spacings,
        className
      )}
    >
      <div className={clsx('flex justify-between')}>
        <h2>{title}</h2>
        {aside && (
          <div className="ml-1 flex h-full flex-col justify-start">{aside}</div>
        )}
      </div>

      {children}
    </div>
  );
};

export { Section };
