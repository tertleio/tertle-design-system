import { useState } from 'react';
import clsx from 'clsx';

import { Controls } from './Controls';
import { Section, Button, IconMember } from '@/cmps/Els';
import { Fieldset, Text, Choice } from '@/cmps/Form';

const skillIcons = {
  'software development': '⚒️',
  'product management': '📈',
  'business development': '📊',
  marketing: '📣',
  design: '✏️',
  other: '📚',
};

type SkillType = keyof typeof skillIcons;
type Skill = {
  id: number;
  category: string;
  strVal: SkillType;
  isSelected: boolean;
};

type MeCardProps = {
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
    linkedin,
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

  const Aside = ({ data }: any) => {
    return (
      <ul className="flex items-center gap-3 sm:gap-2">
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
      className={clsx('flex flex-col gap-5 ', className)}
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
      <Fieldset legend="Looking for">
        <Text
          name="headline"
          placeholder="What type of co-founder are you looking for?"
          readOnly={!isEditing}
          value={headline}
          onChange={props.onChange}
        />
      </Fieldset>
      <Fieldset
        legend="Skills"
        className={clsx(
          '[&>*:nth-child(1)] grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-[1px]'
        )}
      >
        {skills.map((skill) => {
          return (
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
          );
        })}
      </Fieldset>
    </Section>
  );
};

export { MeCard };
