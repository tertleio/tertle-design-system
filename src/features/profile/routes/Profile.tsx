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
import { ProfileCard, StartupCard, Controls } from '../cmps';

// startup_history [1, 2, 3]
// package_id [1, 2, 3]
// achievement string
// profile_url string

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [profile, setProfile] = useState(jsonProfile);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [user] = useState(jsonUser);

  console.log(profile);

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
        {isAdmin && (
          <Controls
            showEdit={!isEditing}
            showCancel={isEditing}
            showSave={isEditing}
            onEdit={() => setIsEditing(true)}
            onCancel={() => setIsEditing(false)}
            onSave={() => setIsSaving(false)}
          />
        )}
      </ul>
    );
  };

  console.log(profile);

  return (
    <MainLayout>
      <Container>
        <Section className="bg-black hover:cursor-default  hover:bg-black dark:bg-gray-800 dark:hover:bg-[#171717]">
          <ProfileCard
            firstName={user.firstName}
            imgSrc={profile.display_pic || user.gPic}
            lastName={user.lastName}
            location={profile.city_country}
            packageId={profile.package_id}
            lookingFor={prefs.need_idea}
          />
        </Section>

        <StartupCard />

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
              <Controls
                showEdit={!isEditing}
                showCancel={isEditing}
                showSave={isEditing}
                onEdit={() => setIsEditing(true)}
                onCancel={() => setIsEditing(false)}
                onSave={() => setIsSaving(false)}
              />
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
