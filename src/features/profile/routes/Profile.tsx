import { IconMember } from '@/cmps/Els/Icon';
import { Button } from '@/cmps/Els/Button';
import { MainLayout } from '@/cmps/Layouts';
import { Container } from '@/cmps/Container';
import { Section } from '@/cmps/Els/Section';

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

const List = ({ data }: any) => {
  return (
    <ul className="flex gap-4 lg:gap-2">
      {Object.entries(data).map((item, i) => {
        const iconName = item[0] as IconMember;
        const url = item[1] as string;
        return (
          <li key={item[0] + i}>
            <a href={url}>
              <Button icon={iconName} variant="tertiary" />
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
        <Section title="Me" aside={<List data={dummyData.startupLinks} />}>
          <h1>Some stuff about me</h1>
        </Section>
        <Section
          title="Some other title that's abit longer"
          aside={<List data={dummyData.startupLinks} />}
        >
          <h1>Some other section</h1>
          <Button size="sm" variant="primary" icon="github">
            With text
          </Button>
          <Button size="md" variant="primary" icon="linkedin">
            With text
          </Button>
          <Button size="lg" variant="primary" icon="twitter">
            With text
          </Button>
          <Button size="sm" variant="secondary">
            With text
          </Button>
          <Button size="md" variant="secondary">
            With text
          </Button>
          <Button size="lg" variant="secondary">
            Tertiary
          </Button>
          <Button size="sm" variant="tertiary">
            With text
          </Button>
          <Button size="md" variant="tertiary">
            With text
          </Button>
          <Button size="lg" variant="tertiary">
            Tertiary
          </Button>

          <Button size="sm" variant="primary" icon="github" />

          <Button size="md" variant="primary" icon="linkedin" />

          <Button size="lg" variant="primary" icon="twitter" />

          <Button size="sm" variant="secondary" />

          <Button size="md" variant="secondary" />

          <Button size="lg" variant="secondary">
            Tertiary
          </Button>
          <Button size="sm" variant="tertiary" />

          <Button size="md" variant="tertiary" />

          <Button size="lg" variant="tertiary" />
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
