import { useState } from 'react';
import clsx from 'clsx';
import jsonProfile from '@/assets/data/profile.json';
import jsonUser from '@/assets/data/user.json';
import jsonPrefs from '@/assets/data/prefs.json';

import { IconMember } from '@/cmps/Els/Icon';
import { Button } from '@/cmps/Els/Button';
import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';
import { Form, Textarea, Fieldset, Choice } from '@/cmps/Form';
import { ProfileCard } from '@/features/profile/cmps/ProfileCard';

// startup_history [1, 2, 3]
// package_id [1, 2, 3]
// achievement string
// profile_url string

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profile, setProfile] = useState(jsonProfile);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [user] = useState(jsonUser);

  function handleProfileChange(e: any) {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }

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

  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-default  hover:bg-black dark:bg-gray-800 dark:hover:bg-[#171717]">
          <ProfileCard
            firstName={user.firstName}
            avatar={profile.display_pic || user.gPic}
            lastName={user.lastName}
            location={profile.city_country}
            packageId={profile.package_id}
            lookingFor={prefs.need_idea}
          />
        </Section>

        <Section
          title="Startup"
          aside={
            <AsideStartup
              data={{
                github: profile.link_personal,
              }}
            />
          }
          className={clsx(
            'flex flex-col',
            isEditing && 'hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <Fieldset legend="Idea" className="flex flex-wrap items-center">
            <div className="flex gap-[1px]">
              <Choice
                name="1"
                id="1"
                type="radio"
                size="sm"
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
                size="sm"
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
                size="sm"
                checked={false}
                label="B2C"
                readOnly={!isEditing}
                readOnlyIcon="#"
                onChange={() => console.log('change')}
              />
            </div>
            <div className="mb-5 w-full">
              <Textarea
                name="ideaPitch"
                placeholder="Write something about your idea..."
                readOnly={!isEditing}
                value={profile.startup_pitch}
                onChange={handleProfileChange}
              />
            </div>
          </Fieldset>

          <div
            className={clsx('flex flex-col sm:gap-[3px]', isEditing && 'gap-5')}
          >
            <Fieldset
              legend="Ambition"
              className={clsx(
                'block items-center gap-[2px] sm:flex',
                !isEditing && 'flex'
              )}
            >
              <Choice
                name="1"
                id="1"
                type="radio"
                size="sm"
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
                size="sm"
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
                size="sm"
                checked={false}
                label="To the stars"
                readOnly={!isEditing}
                readOnlyIcon="✨"
                onChange={() => console.log('change')}
              />
            </Fieldset>

            <Fieldset
              legend="Stage"
              className={clsx(
                'block items-center gap-[2px] sm:flex',
                !isEditing && 'flex'
              )}
            >
              <Choice
                name="1"
                id="1"
                type="radio"
                checked={false}
                size="sm"
                label="Discovery"
                readOnly={!isEditing}
                readOnlyIcon="🔬"
                onChange={() => console.log('change')}
              />
              <Choice
                name="2"
                id="2"
                type="radio"
                size="sm"
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
                size="sm"
                checked={true}
                label="Paying customers"
                readOnly={!isEditing}
                readOnlyIcon="💰"
                onChange={() => console.log('change')}
              />
            </Fieldset>
          </div>
        </Section>

        <Section
          title="Me"
          aside={
            <AsideStartup
              data={{
                linkedin: profile.link_linkedin,
                github: profile.link_personal,
                twitter: profile.link_twitter,
              }}
            />
          }
        >
          <h3 className="mb-3">Looking for</h3>
          <p>{profile.headline}</p>
        </Section>

        <Section
          title="Preferences"
          aside={
            <div className="flex gap-3.5 sm:gap-2">
              <Controls />
            </div>
          }
        >
          <p>Preferences here</p>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
