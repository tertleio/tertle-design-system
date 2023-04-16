import { useState } from 'react';
import { useProfile } from '../api/getProfile';

import jsonPrefs from '@/assets/data/prefs.json';

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { ProfileCard, StartupCard, MeCard } from '../cmps';

const Profile = ({ profileUrl = '' }) => {
  console.log(profileUrl);
  const [isAdmin, setIsAdmin] = useState(false);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [profile, loading, error] = useProfile(profileUrl);

  console.log('FETCHED', profile);

  function handleProfileChange(e: any) {
    console.log('handling profile change');
    // const { name, value } = e.target;
    // setProfile({ ...profile, [name]: value });
  }

  return (
    <MainLayout>
      <Container>
        <ProfileCard
          isLoading={loading}
          // isAdmin={isAdmin}
          name={profile?.firstName + ' ' + profile?.lastName || ''}
          imgSrc={profile?.displayPic || profile?.googlePic || ''}
          location={profile?.cityCountry}
          countryCode={profile?.countryCode}
          packageId={profile?.packageId}
          lookingFor={profile?.hasStartup ? 'myIdea' : 'yourIdea'}
        />

        <StartupCard
          isLoading={loading}
          // isAdmin={isAdmin}
          hasStartup={profile?.hasStartup}
          ambition={1}
          readyness={profile?.commitment}
          pitch={profile?.startupPitch}
          experience={profile?.startupHistory}
          stage={profile?.startupStage}
          startupUrl={profile?.startupLink}
          onChange={handleProfileChange}
        />

        <MeCard
          isLoading={loading}
          // isAdmin={isAdmin}
          headline={profile?.headline}
          linkedin={profile?.linkLinkedin}
          twitter={profile?.linkTwitter}
          personal={profile?.linkPersonal}
          skills={profile?.skills || []}
          workplace={profile?.workplace}
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
