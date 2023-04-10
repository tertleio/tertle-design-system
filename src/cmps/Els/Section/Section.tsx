import { Icon, IconMember } from '@/cmps/Els/Icon';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

const Section = (props: SectionProps) => {
  const { title, aside, children, className = '' } = props;

  return (
    <div
      className={`
      border-b border-gray-200 p-4 first:py-9 last:border-b-0 last:pb-8 dark:border-gray-700 md:p-8
      ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="text-1xl lg:text-1xl font-primary text-black dark:text-white md:text-xl">
          {title}
        </h2>
        <div>
          <div className="ml-7 mr-[-0.55em] flex h-full flex-col justify-start">
            {aside}
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export { Section };
