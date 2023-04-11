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
        border-b border-gray-300 px-5 py-6 text-gray-600 first:rounded-t-3xl last:rounded-b-3xl last:border-b-0 hover:cursor-pointer hover:bg-gray-100
        dark:border-gray-700 dark:hover:bg-[#171717] sm:p-7
        ${className}`}
    >
      {aside && (
        <div className="mb-4 flex justify-between sm:mb-5">
          <h2>{title}</h2>
          <div>
            <div className="ml-7 mr-[-0.55em] flex h-full flex-col justify-start">
              {aside}
            </div>
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

export { Section };
