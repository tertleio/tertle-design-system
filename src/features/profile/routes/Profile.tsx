import React from 'react';

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
  name: 'Ryan Smith',
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
      className="ml-2 h-24 w-24 rounded-full border-2 border-gray-700 dark:border-gray-700 md:h-28 md:w-28"
      src="https://avatars.githubusercontent.com/u/1016365?v=4"
      alt="Ryan Connaughton"
    />
  );
};

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(true);
  const [data, setData] = React.useState(dummyData);

  const Controls = () => {
    return !isEditing ? (
      <Button
        className="bg-[orange] dark:bg-[orange]"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </Button>
    ) : (
      <>
        <Button
          className="bg-[red] dark:bg-[red]"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </Button>
        <Button
          className="bg-[orange] dark:bg-[orange]"
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    );
  };

  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-default  hover:bg-black dark:bg-[#171717] dark:hover:bg-[#171717]">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-0.5 text-white sm:mb-1">{dummyData.name}</h1>
              <div className="text-[1.25em] text-gray-500 dark:text-gray-500 md:text-2xl">
                {dummyData.location} 🇬🇧
              </div>
              <ul className="flex-inline flex flex-wrap gap-3 sm:mt-1">
                <li className="opacity-50">Join your idea</li>
                <li className="opacity-50">|</li>
                <li className="text-white dark:text-primary-dark">
                  Join my idea
                </li>
              </ul>
            </div>
            <Avatar />
          </div>
        </Section>

        <Section
          title="Startup"
          aside={
            <div className="flex gap-3">
              <List data={dummyData.startupLinks} />
              {isAdmin && <Controls />}
            </div>
          }
        >
          <div>
            <h3 className="mb-3">Idea</h3>
            <p>
              Tertle makes it easy for aspiring tech founders to discover and
              meet one another in pursuit of a common goal.
            </p>
          </div>
          <div className="flex-row">
            <Fieldset legend="Ambition" variant="inline">
              <Choice
                name="1"
                id="1"
                type="radio"
                checked={true}
                label="Indie/lifestyle"
                readOnly={isEditing ? false : true}
                onChange={() => console.log('change')}
              />
              <Choice
                name="2"
                id="2"
                type="radio"
                checked={false}
                label="To the moon"
                readOnly={isEditing ? false : true}
                onChange={() => console.log('change')}
              />
              <Choice
                name="3"
                id="3"
                type="radio"
                checked={false}
                label="To the stars"
                readOnly={isEditing ? false : true}
                onChange={() => console.log('change')}
              />
            </Fieldset>
          </div>
        </Section>

        <Section title="Me" aside={<List data={dummyData.startupLinks} />}>
          <h3 className="mb-3">Looking for</h3>
          <p>{dummyData.lookingFor}</p>
        </Section>

        <Section
          title="Preferences"
          aside={
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-[orange] dark:bg-[orange]"
            >
              Edit
            </Button>
          }
        >
          <p>Preferences here</p>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
