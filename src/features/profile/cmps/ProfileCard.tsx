import clsx from 'clsx';

type User = {
  // id: string;
  // pid: string | number;
  firstName: string;
  lastName: string;
  avatar: string | undefined;
  gPic: string | undefined;
  // email: string;
  // onboard: number;
  // onboarded: boolean;
};

type ProfileHeaderProps = Omit<User, 'gPic'> & {
  // profile: Profile;
  avatar: string | undefined;
  location: string;
  packageId: number;
  className?: string;
  lookingFor: number;
};

const ProfileCard = (props: ProfileHeaderProps) => {
  const { firstName, lastName, location, avatar, className } = props;

  const Avatar = () => {
    return (
      <img
        className="ml-2 h-24 w-24 rounded-full border-2 border-gray-700 dark:border-gray-700 md:h-28 md:w-28"
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
    );
  };

  return (
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
      <Avatar />
    </div>
  );
};

export { ProfileCard };
