import { Icon, IconMember } from '@/cmps/Els/Icon';

const twHeader = `text-1xl lg:text-1xl font-primary text-black dark:text-white sm:text-xl`;

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
        border-b border-gray-300 p-4 text-gray-600 first:rounded-t-3xl first:py-6 last:rounded-b-3xl last:border-b-0 last:pb-8 hover:cursor-pointer hover:bg-gray-100
        dark:border-gray-700 dark:hover:bg-[#1D1D1D] sm:p-8 sm:first:py-9
        ${className}`}
    >
      <div className="flex justify-between">
        <h2 className="lg:text-1xl font-primary text-[1.2em] text-black dark:text-white sm:text-2xl">
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
