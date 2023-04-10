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
    <ul className="flex gap-2 lg:gap-0">
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
            Primary Sm
          </Button>
          <Button size="md" variant="primary" icon="linkedin">
            Primary md
          </Button>
          <Button size="lg" variant="primary" icon="twitter">
            Primary lg
          </Button>
          <Button size="sm" variant="secondary">
            Secondary Sm
          </Button>
          <Button size="sm" variant="secondary" icon="github">
            Primary Sm
          </Button>
          <Button size="md" variant="secondary" icon="linkedin">
            Primary md
          </Button>
          <Button size="lg" variant="secondary" icon="twitter">
            Primary lg
          </Button>
          <Button size="sm" variant="tertiary" icon="github">
            Primary Sm
          </Button>
          <Button size="md" variant="tertiary" icon="linkedin">
            Primary md
          </Button>
          <Button size="lg" variant="tertiary" icon="twitter">
            Primary lg
          </Button>
          <Button size="sm" variant="secondary">
            Secondary Sm
          </Button>
          <Button size="md" variant="secondary">
            Secondary Md
          </Button>
          <Button size="lg" variant="secondary">
            Secondary Lg
          </Button>
          <Button size="sm" variant="tertiary">
            Tertiary Sm
          </Button>
          <Button size="md" variant="tertiary">
            Tertiary Md
          </Button>
          <Button size="lg" variant="tertiary">
            Tertiary Lg
          </Button>

          <Button size="sm" variant="primary" icon="github" />
          <Button size="md" variant="primary" icon="linkedin" />
          <Button size="lg" variant="primary" icon="twitter" />
          <Button size="sm" variant="secondary" icon="github" />
          <Button size="md" variant="secondary" icon="linkedin" />
          <Button size="lg" variant="secondary" icon="twitter" />
          <Button size="sm" variant="tertiary" icon="github" />
          <Button size="md" variant="tertiary" icon="linkedin" />
          <Button size="lg" variant="tertiary" icon="twitter" />
          <Button size="sm" variant="secondary" />
          <Button size="md" variant="secondary" />
          <Button size="lg" variant="secondary" />
          <Button size="sm" variant="tertiary" />
          <Button size="md" variant="tertiary" />
          <Button size="lg" variant="tertiary" />
        </Section>
      </Container>
    </MainLayout>
  );
};

export { Profile };
