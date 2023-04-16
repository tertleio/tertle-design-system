import { useEffect, useState } from 'react';
// import jsonProfile from '@/assets/data/profile.json';
// const getLocalProfile = async () => return jsonProfile;

const dataStruct = {
  id: '',
  url: '',
  firstName: '',
  lastName: '',
  headline: '',
  googlePic: '',
  displayPic: '',
  hasStartup: false,
  startupStage: 0,
  startupPitch: '',
  startupLink: '',
  cityCountry: '',
  // cntryName: '',
  countryCode: '',
  // latLong: '',
  // isTechnical: null,
  linkLinkedin: '',
  linkPersonal: '',
  linkTwitter: '',
  startupHistory: 0,
  achievement: '',
  commitment: 0,
  workplace: 0,
  packageId: 0,
  skills: [],
};

type Profile = {
  [key in keyof typeof dataStruct]: (typeof dataStruct)[key];
};

async function getProfile(profileUrl: string) {
  const baseUrl = 'http://localhost:1337';
  const path = profileUrl ? `api/profile/${profileUrl}` : `/api/profile`;
  const res = await fetch(`${baseUrl}/${path}`);
  console.log('fetching data');
  return res.json();
}

const useProfile = (profileUrl: string) => {
  const [profile, setProfile] = useState<Profile>(dataStruct);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!profileUrl) return;

    getProfile(profileUrl)
      .then(({ status, msg, payload }) => {
        if (status !== 'success') throw new Error('Problem fetching profile');

        setProfile({
          id: payload.pid,
          // url: payload.profile_url,
          url: profileUrl,
          firstName: payload.first_name,
          lastName: payload.last_name,
          headline: payload.headline,
          googlePic: payload.google_pic,
          displayPic: payload.display_pic,
          hasStartup: payload.has_startup,
          startupStage: payload.startup_stage,
          startupPitch: payload.startup_pitch,
          startupLink: payload.startup_link,
          cityCountry: payload.city_country,
          // cntryName: payload.cntry_name,
          countryCode: payload.country_code,
          // latLong: payload.lat_long,
          // isTechnical: payload.is_technical,
          linkLinkedin: payload.link_linkedin,
          linkPersonal: payload.link_personal,
          linkTwitter: payload.link_twitter,
          startupHistory: payload.startup_history,
          achievement: payload.achievement,
          commitment: payload.commitment,
          workplace: payload.workplace,
          packageId: payload.package_id,
          skills: payload.skills,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log('useProfile Error:', err);
        setError(true);
        // setLoading(false);
      });
  }, []);

  return [profile, loading, error] as [Profile, boolean, boolean];
};

export { getProfile, useProfile, type Profile };
