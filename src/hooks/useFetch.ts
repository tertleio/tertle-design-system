import React from 'react';
type Sim = {
  pid: number | string;
  goals: number[];
  skillsHard: string[];
  isTechnical: boolean;
  idea: boolean;
  ideaPitch: string;
  ideaUrl: string;
};

const dummyData = {
  pid: 1,
  goals: [1, 4],
  skillsHard: [],
  isTechnical: false,
  idea: false,
  ideaPitch: '',
  ideaUrl: '',
  name: 'Ryan Smith',
  location: 'London, UK',
  lookingFor: 'Something cool to work on',
  startupLinks: {
    github: 'https://github.com/ryanconnaughton',
    linkedin: 'https://www.linkedin.com/in/ryanconnaughton/',
    twitter: 'https://twitter.com/ryanconnaughton',
  },
};

function fetchSim(pid: string | number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 1000);
  });
}

const useFetch = (pid: string | number) => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const result = (await fetchSim(`/api/${pid}`)) as Sim;
      setData(result);
      setLoading(false);
    })();
  }, []);

  return { isLoading, error, data };
};

export default useFetch;
