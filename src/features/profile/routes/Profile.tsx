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
    <img
      className="h-28 w-28 rounded-full border-2 border-gray-700 dark:border-gray-700"
      src="https://avatars.githubusercontent.com/u/1016365?v=4"
      alt="Ryan Connaughton"
    />
  );
};

const Profile = () => {
  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-default hover:bg-black dark:bg-[#171717] dark:hover:bg-[#171717]">
          <div className="flex justify-between">
            <h1
              className={`font-primary text-2xl text-white dark:text-white md:text-3xl`}
            >
              {dummyData.name}
            </h1>
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
