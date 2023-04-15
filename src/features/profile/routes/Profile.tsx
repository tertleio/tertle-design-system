import { useState } from 'react';
import clsx from 'clsx';
import jsonProfile from '@/assets/data/profile.json';
import jsonUser from '@/assets/data/user.json';
import jsonPrefs from '@/assets/data/prefs.json';

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { ProfileCard, StartupCard, MeCard } from '../cmps';

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
          // isAdmin={isAdmin}
          firstName={user.firstName}
          imgSrc={profile.display_pic || user.gPic}
          lastName={user.lastName}
          location={profile.city_country}
          packageId={profile.package_id}
          lookingFor={prefs.need_idea}
        />

        <StartupCard
          isAdmin={isAdmin}
          startupPitch={profile.startup_pitch}
          startupHistory={profile.startup_history}
          startupStage={profile.startup_stage}
          startupUrl={profile.startup_link}
          onChange={handleProfileChange}
          // hasStartup={profile.has_startup}
        />

        <MeCard
          isAdmin={isAdmin}
          headline={profile.headline}
          linkedin={profile.link_linkedin}
          twitter={profile.link_twitter}
          personal={profile.link_personal}
          skills={profile.skills}
          workplace={profile.workplace}
          onChange={handleProfileChange}
        />

        {/* 

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
