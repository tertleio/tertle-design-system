import { IconMember } from '@/cmps/Els/Icon';
import { Button } from '@/cmps/Els/Button';
import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';

type dummyDataProps = {
  name: string;
  location: string;
  lookingFor: string;
  startupLinks: {};
};

const dummyData: dummyDataProps = {
  name: 'Ryan Connaughton',
  location: 'London, UK',
  lookingFor: 'Something cool to work on',
  startupLinks: {
    github: 'https://github.com/ryanconnaughton',
    linkedin: 'https://www.linkedin.com/in/ryanconnaughton/',
    twitter: 'https://twitter.com/ryanconnaughton',
  },
};

const List = ({ data }: any) => {
  return (
    <ul className="flex gap-1 md:gap-0">
      {Object.entries(data).map((item, i) => {
        const iconName = item[0] as IconMember;
        const url = item[1] as string;
        return (
          <li key={item[0] + i}>
            <a href={url}>
              <Button icon={iconName} variant="tertiary" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Avatar = () => {
  return (
    <img
      className="h-24 w-24 rounded-full border-2 border-gray-700 dark:border-gray-700 md:h-28 md:w-28"
      src="https://avatars.githubusercontent.com/u/1016365?v=4"
      alt="Ryan Connaughton"
    />
  );
};

const Profile = () => {
  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-auto  hover:bg-black dark:bg-[#171717] hover:dark:bg-[#171717]">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-1 font-primary text-2xl text-white dark:text-white md:mb-2 md:text-3xl">
                {dummyData.name}
              </h1>
              <div className="text-[1.25em] text-gray-500 dark:text-gray-500 md:text-2xl">
                {dummyData.location} 🇬🇧
              </div>
            </div>
            <Avatar />
          </div>
        </Section>

        <Section title="Startup" aside={<List data={dummyData.startupLinks} />}>
          <h1>Profile</h1>
        </Section>

        <Section title="Me" aside={<List data={dummyData.startupLinks} />}>
          <h1>Some stuff about me</h1>
        </Section>

        <Section
          title="Some other title that's abit longer"
          aside={<List data={dummyData.startupLinks} />}
        >
          <h1>Some stuff about me</h1>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
