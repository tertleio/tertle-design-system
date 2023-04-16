import { useState } from 'react';
import clsx from 'clsx';

import { Textarea, Fieldset, Choice } from '@/cmps/Form';
import { Section } from '@/cmps/Els';
import { Aside } from './Aside/Aside';

import { SectionPassProps } from '@/cmps/Els/Section/Section';

type StartupCardProps = SectionPassProps & {
  isLoading: boolean;
  pitch: string;
  experience: number;
  stage: number;
  startupUrl: string;
  ambition: number;
  hasStartup: boolean;
  readyness: number;
  isAdmin?: boolean;
  className?: string;
  onChange: (e: any) => void;
};

// const STARTUP_STAGE = {
//   idea: 1,
//   prototyped: 2,
//   established: 3,
// };

// const STARTUP_HISTORY = {
//   firstTimer: 1,
//   experienced: 2,
//   veteran: 3,
// };

// const COMMITMENT = {
//   partTime: 1,
//   fullTime: 2,
// };

// const WORKPLACE = {
//   office: 1,
//   remote: 2,
//   any: 3,
// };

// -> was STARTUP_STAGE
const STAGE = [
  { label: 'Discovery', value: 1, emoji: '🔬' },
  { label: 'Prototype', value: 2, emoji: '🧪' },
  { label: 'Paying Customers', value: 3, emoji: '💰' },
];

// --> was STARTUP_HISTORY
const EXPERIENCE = [
  { label: 'First rodeo', value: 1, emoji: '🚀' },
  { label: 'Not first rodeo', value: 2, emoji: '🐎' },
  { label: 'Had exit', value: 3, emoji: '🏃‍♂️' },
];

// -> was COMMITMENT
const READYNESS = [
  { label: 'In the future', value: 3, emoji: '➡️' }, // new
  { label: 'Now, part-time', value: 1, emoji: '↘️' },
  { label: 'Now, full-time', value: 2, emoji: '⬇️' },
];

const WORKPLACE = [
  { label: 'Remote', value: 2, emoji: '🎒' },
  { label: 'Hybrid', value: 3, emoji: '↔️' },
  { label: 'Office', value: 1, emoji: '🏢' },
];

// new
const AMBITION = [
  { label: 'Indie', value: 1, emoji: '🌎' },
  { label: 'To the moon', value: 2, emoji: '🌙' },
  { label: 'To the stars', value: 3, emoji: '⭐️' },
];

const StartupCard = (props: StartupCardProps) => {
  const {
    pitch,
    experience,
    stage,
    startupUrl,
    readyness,
    hasStartup,
    isAdmin,
    ambition,
    className,
    onChange,
    isLoading = false,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <Section
      title="Startup"
      isLoading={isLoading}
      aside={
        <Aside
          buttons={{ github: startupUrl }}
          allowControls={isAdmin}
          showEdit={!isEditing}
          showCancel={isEditing}
          showSave={isEditing}
          onEdit={() => setIsEditing(true)}
          onCancel={() => setIsEditing(false)}
          onSave={() => setIsSaving(false)}
        />
      }
      className={clsx('flex flex-col gap-2 sm:gap-3')}
    >
      <Fieldset legend="Idea" className="mb-1 flex flex-wrap items-center">
        <Choice
          name="1"
          id="1"
          type="radio"
          size="sm"
          checked={true}
          label="Have idea"
          readOnly={!isEditing}
          readOnlyIcon="✅"
          onChange={() => console.log('change')}
        />
        <Choice
          name="2"
          id="2"
          type="radio"
          size="sm"
          checked={false}
          label="No idea"
          readOnly={!isEditing}
          readOnlyIcon="❌"
          onChange={() => console.log('change')}
        />
        {hasStartup && (
          <div className="w-full">
            <Textarea
              name="pitch"
              placeholder="Write something about your idea..."
              readOnly={!isEditing}
              value={pitch}
              onChange={onChange}
            />
          </div>
        )}
      </Fieldset>
      <div className={clsx('flex flex-col sm:gap-[3px]', isEditing && 'gap-5')}>
        <Fieldset legend="Readyness" className="flex flex-wrap items-center">
          {READYNESS.map((item) => (
            <Choice
              key={item.value}
              name="startupCommitment"
              id={item.value.toString()}
              type="radio"
              size="sm"
              checked={readyness === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>
        <Fieldset
          legend="Ambition"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          {AMBITION.map((item) => (
            <Choice
              key={item.value}
              name="startupAmbition"
              id={item.value.toString()}
              type="radio"
              size="sm"
              value={item.value}
              checked={ambition === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>
        <Fieldset
          legend="Stage"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          {STAGE.map((item) => (
            <Choice
              key={item.value}
              name="stage"
              id={item.label}
              type="radio"
              size="sm"
              value={item.value}
              checked={stage === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>
        <Fieldset
          legend="Experience"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          {EXPERIENCE.map((item) => (
            <Choice
              key={item.value}
              name="experience"
              id={item.value.toString()}
              type="radio"
              size="sm"
              checked={experience === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>
        <Fieldset
          legend="Workplace"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          {WORKPLACE.map((item) => (
            <Choice
              key={item.value}
              name="workplace"
              id={item.value.toString()}
              type="radio"
              size="sm"
              value={item.value}
              checked={stage === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>
      </div>
    </Section>
  );
};

export { StartupCard };
