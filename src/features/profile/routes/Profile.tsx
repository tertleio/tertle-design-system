import { useState } from 'react';
import { useProfile } from '../api/getProfile';

import jsonProfile from '@/assets/data/profile.json';
import jsonUser from '@/assets/data/user.json';
import jsonPrefs from '@/assets/data/prefs.json';

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { ProfileCard, StartupCard, MeCard } from '../cmps';

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  // const [profile, setProfile] = useState(jsonProfile);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [skills, setSkills] = useState(jsonProfile.skills);
  const [user] = useState(jsonUser);
  const [profile, loading, error] = useProfile('raz');

  if (loading) {
    console.log('loading', loading);
    return <div>Loading...</div>;
  }

  if (error) {
    console.log('error', error);
    return <div>Error...</div>;
  }

  function handleProfileChange(e: any) {
    console.log('handling profile change');
    // const { name, value } = e.target;
    // setProfile({ ...profile, [name]: value });
  }

  // console.log(profile);

  return (
    <MainLayout>
      <Container>
        <ProfileCard
          // isAdmin={isAdmin}
          firstName={user.firstName}
          imgSrc={profile.displayPic || user.gPic || ''}
          lastName={user.lastName}
          location={profile.cityCountry}
          packageId={profile.packageId}
          lookingFor={prefs.need_idea}
        />

        <StartupCard
          isAdmin={isAdmin}
          ambition={1}
          readyness={profile.commitment}
          pitch={profile.startupPitch}
          experience={profile.startupHistory}
          stage={profile.startupStage}
          startupUrl={profile.startupLink}
          onChange={handleProfileChange}
          hasStartup={profile.hasStartup}
        />

        <MeCard
          isAdmin={isAdmin}
          headline={profile.headline}
          linkedin={profile.linkLinkedin}
          twitter={profile.linkTwitter}
          personal={profile.linkPersonal}
          skills={skills}
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
