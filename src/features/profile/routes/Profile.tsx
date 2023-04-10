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
  name: 'John Doe',
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
    <div className="flex flex-col items-center">
      <img
        className="h-24 w-24 rounded-full"
        src="https://avatars.githubusercontent.com/u/1016365?v=4"
        alt="Ryan Connaughton"
      />
      <h1 className="mt-2 font-primary text-2xl text-black dark:text-white">
        {dummyData.name}
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {dummyData.location}
      </p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {dummyData.lookingFor}
      </p>
    </div>
  );
};

const Profile = () => {
  return (
    <MainLayout>
      <Container>
        <Section header={true} title="Ryan Connaughton" aside={<Avatar />}>
          <h1>Profile</h1>
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
