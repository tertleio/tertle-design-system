import { IconMember } from '@/cmps/Els/Icon';
import { Button } from '@/cmps/Els/Button';
import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';
import { Form, Fieldset, Choice } from '@/cmps/Form';

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
              <h1 className="mb-1 dark:text-white md:mb-2">{dummyData.name}</h1>
              <div className="text-[1.25em] text-gray-500 dark:text-gray-500 md:text-2xl">
                {dummyData.location} 🇬🇧
              </div>
            </div>
            <Avatar />
          </div>
        </Section>

        <Section title="Startup" aside={<List data={dummyData.startupLinks} />}>
          <div>
            <h3 className="mb-3">Idea</h3>
            <p>
              Tertle makes it easy for aspiring tech founders to discover and
              meet one another in pursuit of a common goal.
            </p>
          </div>
          <div className="flex-row">
            <h3>Goal</h3>
            <Fieldset legend="Goal" className="flex-inline flex gap-1">
              <Choice name="1" id="1" type="radio" label="Indie/lifestyle" />
              <Choice name="2" id="2" type="radio" label="To the moon" />
              <Choice name="3" id="3" type="radio" label="To the stars" />
            </Fieldset>
          </div>
        </Section>

        <Section title="Me" aside={<List data={dummyData.startupLinks} />}>
          <p>Some stuff about me</p>
        </Section>

        <Section
          title="Some other title that's abit longer"
          aside={<List data={dummyData.startupLinks} />}
        >
          <p>Some stuff about me</p>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
