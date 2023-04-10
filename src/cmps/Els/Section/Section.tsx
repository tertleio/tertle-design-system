import { Icon, IconMember } from '@/cmps/Els/Icon';

const testIcons = ['github', 'twitter', 'linkedin'] as IconMember[];

const Section = () => {
  return (
    <div className="m-7 border">
      <div className="flex justify-between">
        <h2 className="font-primary text-2xl text-black dark:text-white">
          Startup
        </h2>
        <div>
          <div className="flex h-full flex-col justify-center">
            <ul className="flex gap-3">
              {testIcons.map((icon, i) => (
                <li key={icon + i}>
                  <Icon name={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Section };
