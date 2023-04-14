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
      className={`
        border-b border-gray-300 p-5 text-gray-600 first:rounded-t-3xl last:rounded-b-3xl last:border-b-0 hover:cursor-pointer hover:bg-gray-100
        dark:border-gray-700 dark:hover:bg-gray-900 sm:px-6 sm:py-5 sm:pb-7
        ${className}`}
    >
      <div className="mb-6 flex justify-between sm:mb-6">
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
