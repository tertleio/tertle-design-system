import clsx from 'clsx';

import { Avatar } from '@/features/avatar/cmps/Avatar';
import { Section } from '@/cmps/Els';

import { SectionPassProps } from '@/cmps/Els/Section/Section';

const active = 'text-white dark:text-primary-dark';

type ProfileHeaderProps = SectionPassProps & {
  name: string;
  imgSrc: string;
  location: string;
  packageId: number;
  countryCode: string;
  lookingFor: 'myIdea' | 'yourIdea';
  className?: string;
};

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

const ProfileCard = (props: ProfileHeaderProps) => {
  const {
    isLoading,
    name,
    location,
    imgSrc,
    countryCode,
    lookingFor,
    className,
  } = props;

  return (
    <Section isLoading={isLoading} className="bg-black dark:bg-gray-800">
      <div className={clsx('flex justify-between', className)}>
        <div>
          <h1 className="mb-0.5 text-white sm:mb-1">{name}</h1>
          <div className="text-[1.25em] text-gray-500 dark:text-gray-500 md:text-2xl">
            {location} {countryCode && getFlagEmoji(countryCode)}
          </div>
          <ul className="flex-inline flex flex-wrap gap-3 sm:mt-1">
            <li
              className={clsx(
                lookingFor === 'yourIdea' && !isLoading ? active : 'opacity-50'
              )}
            >
              Join your idea
            </li>
            <li className="opacity-50">|</li>
            <li
              className={clsx(
                lookingFor === 'myIdea' && !isLoading ? active : 'opacity-50'
              )}
            >
              Join my idea
            </li>
          </ul>
        </div>
        <Avatar src={imgSrc} title={`${name}'s Avatar`} />
      </div>
    </Section>
  );
};

export { ProfileCard };
