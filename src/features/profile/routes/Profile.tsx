import React from 'react';
import clsx from 'clsx';

import { IconMember } from '@/cmps/Els/Icon';
import { Button } from '@/cmps/Els/Button';
import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';
import { Form, Textarea, Fieldset, Choice } from '@/cmps/Form';

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
  const [textarea, setTextarea] = React.useState(
    'Tertle makes it easy for aspiring tech founders to discover and meet one another in pursuit of a common goal. Tertle makes it easy for aspiring tech founders to discover and meet one another in pursuit of a common goal.'
  );

  const Controls = () => {
    return !isEditing ? (
      <Button
        className="border-orange dark:border-orange-dark"
        variant="secondaryOrange"
        icon="edit"
        onClick={() => setIsEditing(true)}
      ></Button>
    ) : (
      <>
        <Button
          className="border-red dark:border-red-dark"
          variant="secondaryRed"
          icon="cancel"
          onClick={() => setIsEditing(false)}
        />
        <Button
          className="border"
          variant="primaryGreen"
          icon="save"
          onClick={() => setIsEditing(false)}
        ></Button>
      </>
    );
  };

  const AsideStartup = ({ data }: any) => {
    return (
      <ul className="flex items-center gap-3.5 sm:gap-2">
        {Object.entries(data).map((item, i) => {
          const iconName = item[0] as IconMember;
          const url = item[1] as string;
          return (
            <li key={item[0] + i}>
              <a href={url}>
                <Button icon={iconName} variant="secondaryGray" />
              </a>
            </li>
          );
        })}
        {isAdmin && <Controls />}
      </ul>
    );
  };

  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-default  hover:bg-black dark:bg-gray-800 dark:hover:bg-[#171717]">
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
          aside={<AsideStartup data={dummyData.startupLinks} />}
          className={clsx(
            'flex flex-col gap-2 sm:gap-3',
            isEditing && 'hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <Fieldset legend="Idea" className="flex flex-wrap items-center">
            <div className="flex h-8 gap-[1px]">
              <Choice
                name="1"
                id="1"
                type="radio"
                checked={true}
                label="AI"
                readOnly={!isEditing}
                readOnlyIcon="#"
                onChange={() => console.log('change')}
              />
              <Choice
                name="2"
                id="2"
                type="radio"
                checked={false}
                label="SaaS"
                readOnly={!isEditing}
                readOnlyIcon="#"
                onChange={() => console.log('change')}
              />
              <Choice
                name="3"
                id="3"
                type="radio"
                checked={false}
                label="B2C"
                readOnly={!isEditing}
                readOnlyIcon="#"
                onChange={() => console.log('change')}
              />
            </div>
            <div className="w-full">
              <Textarea
                name="ideaPitch"
                placeholder="Write something about your idea..."
                readOnly={!isEditing}
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              />
            </div>
          </Fieldset>

          <div className="flex flex-col gap-1 sm:gap-[3px]">
            <Fieldset
              legend="Ambition"
              className="flex-inline flex items-center justify-between"
            >
              <div className="flex h-2 sm:h-9">
                <Choice
                  name="1"
                  id="1"
                  className="h-5"
                  type="radio"
                  checked={false}
                  label="Indie"
                  readOnly={!isEditing}
                  readOnlyIcon="🌎"
                  onChange={() => console.log('change')}
                />
                <Choice
                  name="2"
                  id="2"
                  type="radio"
                  checked={true}
                  label="To the moon"
                  readOnly={!isEditing}
                  readOnlyIcon="🌙"
                  onChange={() => console.log('change')}
                />
                <Choice
                  name="3"
                  id="3"
                  type="radio"
                  checked={false}
                  label="To the stars"
                  readOnly={!isEditing}
                  readOnlyIcon="✨"
                  onChange={() => console.log('change')}
                />
              </div>
            </Fieldset>
            <Fieldset
              legend="Stage"
              className="flex-inline flex items-center justify-between"
            >
              <div className="flex h-2 sm:h-9">
                <Choice
                  name="1"
                  id="1"
                  type="radio"
                  checked={false}
                  label="Discovery"
                  readOnly={!isEditing}
                  readOnlyIcon="🔬"
                  onChange={() => console.log('change')}
                />
                <Choice
                  name="2"
                  id="2"
                  type="radio"
                  checked={false}
                  label="Prototype"
                  readOnly={!isEditing}
                  readOnlyIcon="🧪"
                  onChange={() => console.log('change')}
                />
                <Choice
                  name="3"
                  id="3"
                  type="radio"
                  checked={true}
                  label="Paying customers"
                  readOnly={!isEditing}
                  readOnlyIcon="💰"
                  onChange={() => console.log('change')}
                />
              </div>
            </Fieldset>
          </div>
        </Section>

        <Section
          title="Me"
          aside={<AsideStartup data={dummyData.startupLinks} />}
        >
          <h3 className="mb-3">Looking for</h3>
          <p>{dummyData.lookingFor}</p>
        </Section>

        <Section
          title="Preferences"
          aside={<AsideStartup data={dummyData.startupLinks} />}
        >
          <p>Preferences here</p>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
