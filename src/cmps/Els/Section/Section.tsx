import clsx from 'clsx';

const spacings = `py-6 px-5 first:pb-8 sm:px-6 sm:py-7 sm:px-7 sm:pb-9`;

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
        'border-b border-gray-300 text-gray-600 first:rounded-t-3xl last:rounded-b-3xl  last:border-b-0 hover:cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900',
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
