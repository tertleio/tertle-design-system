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
    <div className={`m-7 ${className}`}>
      <div className="flex justify-between">
        <h2 className="font-primary text-2xl text-black dark:text-white">
          {title}
        </h2>
        <div>
          <div className="flex h-full flex-col justify-center">{aside}</div>
        </div>
      </div>

      {children}
    </div>
  );
};

export { Section };
