import { useState } from 'react';
// import clsx from 'clsx';

import { Aside } from './Aside/Aside';
import { Section } from '@/cmps/Els';
import { Fieldset, Text, Choice } from '@/cmps/Form';

import { SectionPassProps } from '@/cmps/Els/Section/Section';

const skillIcons = {
  'software development': '⚒️',
  'product management': '📈',
  'business development': '📊',
  research: '🔬',
  marketing: '📣',
  design: '✏️',
  other: '📚',
};

type SkillType = keyof typeof skillIcons;
type Skill = {
  // id: number;
  // category: string;
  strVal: SkillType;
  // isSelected: boolean;
};

type MeCardProps = SectionPassProps & {
  // profile: Profile;
  linkedin?: string;
  personal?: string;
  twitter?: string;
  headline: string;
  skills: Skill[];
  workplace: number;
  isAdmin?: boolean;
  className?: string;
  onChange: (e: any) => void;
};

const MeCard = (props: MeCardProps) => {
  const {
    isLoading,
    linkedin = '',
    twitter,
    headline,
    skills,
    workplace,
    isAdmin,
    className,
    onChange,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  console.log('passsed skills', skills);

  return (
    <Section
      isLoading={isLoading}
      title="Me"
      className="flex flex-col gap-2 sm:gap-3"
      aside={
        <Aside
          buttons={{ linkedin, twitter }}
          showControls={isAdmin}
          showEdit={!isEditing}
          showCancel={isEditing}
          showSave={isEditing}
          onEdit={() => setIsEditing(true)}
          onCancel={() => setIsEditing(false)}
          onSave={() => setIsSaving(false)}
        />
      }
    >
      <Fieldset legend="Headline">
        <Text
          name="headline"
          placeholder="What type of co-founder are you looking for?"
          readOnly={!isEditing}
          value={headline}
          onChange={props.onChange}
        />
      </Fieldset>
      <Fieldset legend="Skills">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-[2px]">
          {/* {skills.map((skill) => (
            <Choice
              key={skill.id}
              name="skills"
              readOnly={!isEditing}
              readOnlyIcon={(skillIcons[skill.strVal] as SkillType) || '📚'}
              size="sm"
              type="checkbox"
              value={skill.id}
              label={skill.strVal}
              checked={skill.isSelected}
              onChange={onChange}
            />
          ))} */}
          {skills.map((skill) => (
            <Choice
              key={skill.strVal}
              name="skills"
              readOnly={!isEditing}
              readOnlyIcon={(skillIcons[skill.strVal] as SkillType) || '📚'}
              size="sm"
              type="checkbox"
              value={skill.strVal}
              label={skill.strVal}
              checked={true}
              onChange={onChange}
            />
          ))}
        </div>
      </Fieldset>
    </Section>
  );
};

export { MeCard };
