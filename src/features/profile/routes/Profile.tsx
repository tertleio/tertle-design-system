import { Icon, IconMember } from '@/cmps/Els/Icon';

type dummyDataProps = {
  name: string;
  location: string;
  lookingFor: string;
  startupLinks: {};
};

const dummyData: dummyDataProps = {
  name: 'John Doe',
  location: 'London, UK',
  lookingFor: 'Something cool to work on',
  startupLinks: {
    github: 'https://github.com/ryanconnaughton',
    linkedin: 'https://www.linkedin.com/in/ryanconnaughton/',
    twitter: 'https://twitter.com/ryanconnaughton',
  },
};

import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';

const List = ({ data }: any) => {
  const aside = Object.entries(data);

  return (
    <ul className="flex gap-6">
      {aside.map((item, i) => {
        const iconName = item[0] as IconMember;
        const url = item[1] as string;
        return (
          <li key={item[0] + i}>
            <a href={url}>
              <Icon name={iconName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Profile = () => {
  return (
    <MainLayout>
      <Container>
        <Section title="Startup" aside={<List data={dummyData.startupLinks} />}>
          <h1>Profile</h1>
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
