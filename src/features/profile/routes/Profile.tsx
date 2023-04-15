import { useState } from 'react';
import clsx from 'clsx';
import jsonProfile from '@/assets/data/profile.json';
import jsonUser from '@/assets/data/user.json';
import jsonPrefs from '@/assets/data/prefs.json';

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';
import { ProfileCard, StartupCard, Controls } from '../cmps';

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [profile, setProfile] = useState(jsonProfile);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [user] = useState(jsonUser);

  function handleProfileChange(e: any) {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  }

  return (
    <MainLayout>
      <Container>
        <ProfileCard
          firstName={user.firstName}
          imgSrc={profile.display_pic || user.gPic}
          lastName={user.lastName}
          location={profile.city_country}
          packageId={profile.package_id}
          // isAdmin={isAdmin}
          lookingFor={prefs.need_idea}
        />

        <StartupCard
          startupPitch={profile.startup_pitch}
          startupHistory={profile.startup_history}
          startupStage={profile.startup_stage}
          startupUrl={profile.startup_link}
          isAdmin={isAdmin}
          onChange={handleProfileChange}
          // hasStartup={profile.has_startup}
        />

        {/* <Section
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
        </Section> */}
      </Container>
    </MainLayout>
  );
};

export { Profile };
