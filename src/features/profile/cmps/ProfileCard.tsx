import clsx from 'clsx';

import { Avatar } from '@/features/avatar/cmps/Avatar';
import { Section } from '@/cmps/Els';

type User = {
  // id: string;
  // pid: string | number;
  firstName: string;
  lastName: string;
  gPic: string | undefined | null;
  // email: string;
  // onboard: number;
  // onboarded: boolean;
};

type ProfileHeaderProps = Omit<User, 'gPic'> & {
  // profile: Profile;
  imgSrc: string;
  location: string;
  packageId: number;
  className?: string;
  lookingFor: number;
};

const ProfileCard = (props: ProfileHeaderProps) => {
  const { firstName, lastName, location, imgSrc, className } = props;

  return (
    <Section className="bg-black dark:bg-gray-800">
      <div className={clsx('flex justify-between', className)}>
        <div>
          <h1 className="mb-0.5 text-white sm:mb-1">
            {firstName + ' ' + lastName}
          </h1>
          <div className="text-[1.25em] text-gray-500 dark:text-gray-500 md:text-2xl">
            {location} 🇬🇧
          </div>
          <ul className="flex-inline flex flex-wrap gap-3 sm:mt-1">
            <li className="opacity-50">Join your idea</li>
            <li className="opacity-50">|</li>
            <li className="text-white dark:text-primary-dark">Join my idea</li>
          </ul>
        </div>
        <Avatar src={imgSrc} title={`${firstName}'s Avatar`} />
      </div>
    </Section>
  );
};

export { ProfileCard };
