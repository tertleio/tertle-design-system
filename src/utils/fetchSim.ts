type Sim = {
  pid: number;
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
};

const fetchSim = async (): Promise<Sim> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 150);
  });
};

export default fetchSim;
