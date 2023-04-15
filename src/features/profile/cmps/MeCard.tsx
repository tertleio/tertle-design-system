import { useState } from 'react';
import clsx from 'clsx';

import { Controls } from './Controls';
import { Section, Button, IconMember } from '@/cmps/Els';

type Skill = {
  id: number;
  category: string;
  strVal: string;
  isSelected: boolean;
};

type MeCardProps = {
  // profile: Profile;
  linkedin: string;
  twitter: string;
  headline: string;
  skills: Skill[];
  workplace: number;
  isAdmin?: boolean;
  className?: string;
  onChange: (e: any) => void;
};

const MeCard = (props: MeCardProps) => {
  const { linkedin, twitter, headline, skills, workplace, isAdmin, className } =
    props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const Aside = ({ data }: any) => {
    return (
      <ul className="flex items-center gap-3.5 sm:gap-2">
        {Object.entries(data).map((item, i) => {
          const iconName = item[0] as IconMember;
          const url = item[1] as string;
          return (
            <li key={item[0] + i}>
              <a href={url}>
                <Button icon={iconName} variant="secondaryGray" />
              </a>
            </li>
          );
        })}
        {isAdmin && (
          <Controls
            showEdit={!isEditing}
            showCancel={isEditing}
            showSave={isEditing}
            onEdit={() => setIsEditing(true)}
            onCancel={() => setIsEditing(false)}
            onSave={() => setIsSaving(false)}
          />
        )}
      </ul>
    );
  };

  return (
    <Section
      title="Me"
      aside={
        <Aside
          data={{
            linkedin,
            twitter,
          }}
        />
      }
    >
      <h3 className="mb-3">Looking for</h3>
      <p>{headline}</p>
    </Section>
  );
};

export { MeCard };
