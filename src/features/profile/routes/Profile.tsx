import { useState } from 'react';
import { useProfile } from '../api/getProfile';

import jsonProfile from '@/assets/data/profile.json';
import jsonPrefs from '@/assets/data/prefs.json';

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { ProfileCard, StartupCard, MeCard } from '../cmps';

import { Icon } from '@/cmps/Els';

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [prefs, setPrefs] = useState(jsonPrefs);
  const [profile, loading, error] = useProfile('raz');

  console.log('FETCHED', profile);

  function handleProfileChange(e: any) {
    console.log('handling profile change');
    // const { name, value } = e.target;
    // setProfile({ ...profile, [name]: value });
  }

  return (
    <MainLayout>
      {/* <Icon name="github" /> */}
      <Container>
        <ProfileCard
          isLoading={loading}
          isAdmin={isAdmin}
          name={profile?.firstName + ' ' + profile?.lastName || ''}
          imgSrc={profile?.displayPic || profile?.googlePic || ''}
          location={profile?.cityCountry}
          countryCode={profile?.countryCode}
          packageId={profile?.packageId}
          lookingFor={prefs.need_idea}
        />

        <StartupCard
          isLoading={loading}
          isAdmin={isAdmin}
          ambition={1}
          readyness={profile?.commitment}
          pitch={profile?.startupPitch}
          experience={profile?.startupHistory}
          stage={profile?.startupStage}
          startupUrl={profile?.startupLink}
          onChange={handleProfileChange}
          hasStartup={profile?.hasStartup}
        />

        <MeCard
          isLoading={loading}
          isAdmin={isAdmin}
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
