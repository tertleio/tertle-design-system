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
      className={`border-b border-gray-200  p-7 last:border-b-0 dark:border-gray-700 ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="font-primary text-2xl text-black dark:text-white">
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
