import { useState } from 'react';
import clsx from 'clsx';

import { Textarea, Fieldset, Choice } from '@/cmps/Form';
import { Section } from '@/cmps/Els';
import { Aside } from './Aside/Aside';

type StartupCardProps = {
  startupPitch: string;
  startupHistory: number;
  startupStage: number;
  startupUrl: string;
  ambition: number;
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

const STARTUP_STAGE = [
  { label: 'Discovery', value: 1, emoji: '🔬' },
  { label: 'Prototype', value: 2, emoji: '🧪' },
  { label: 'Paying Customers', value: 3, emoji: '💰' },
];

// --> experience
const STARTUP_HISTORY = [
  { label: 'First rodeo', value: 1, emoji: '🚀' },
  { label: 'Not first rodeo', value: 2, emoji: '🐎' },
  { label: 'Had exit', value: 3, emoji: '🏃‍♂️' },
];

// -> readyness
const COMMITMENT = [
  { label: 'Now, part-time', value: 1, emoji: '⬇️' },
  { label: 'Now, full-time', value: 2, emoji: '⬇️' },
  { label: 'In the future', value: 3, emoji: '➡️' }, // new
];

const WORKPLACE = [
  { label: 'Office', value: 1, emoji: '🏢' },
  { label: 'Hybrid', value: 2, emoji: '↔️' },
  { label: 'Remote', value: 3, emoji: '🎒' },
];

// new
const AMBITION = [
  { label: 'Indie', value: 1, emoji: '🌎' },
  { label: 'To the moon', value: 2, emoji: '🌙' },
  { label: 'To the stars', value: 3, emoji: '⭐️' },
];

const StartupCard = (props: StartupCardProps) => {
  const {
    startupPitch,
    startupHistory,
    startupStage,
    startupUrl,
    readyness,
    isAdmin,
    ambition,
    className,
    onChange,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  console.log(readyness);
  return (
    <Section
      title="Startup"
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
      className={clsx(
        'flex flex-col gap-2 sm:gap-3',
        isEditing && 'hover:bg-transparent dark:hover:bg-transparent'
      )}
    >
      <Fieldset legend="Idea" className="mb-1 flex flex-wrap items-center">
        <Choice
          name="1"
          id="1"
          type="radio"
          size="sm"
          checked={true}
          label="AI"
          readOnly={!isEditing}
          readOnlyIcon="#"
          onChange={() => console.log('change')}
        />
        <Choice
          name="2"
          id="2"
          type="radio"
          size="sm"
          checked={false}
          label="SaaS"
          readOnly={!isEditing}
          readOnlyIcon="#"
          onChange={() => console.log('change')}
        />
        <Choice
          name="3"
          id="3"
          type="radio"
          size="sm"
          checked={false}
          label="B2C"
          readOnly={!isEditing}
          readOnlyIcon="#"
          onChange={() => console.log('change')}
        />
        <div className="w-full">
          <Textarea
            name="startupPitch"
            placeholder="Write something about your idea..."
            readOnly={!isEditing}
            value={startupPitch}
            onChange={onChange}
          />
        </div>
      </Fieldset>

      <div className={clsx('flex flex-col sm:gap-[3px]', isEditing && 'gap-5')}>
        <Fieldset legend="Readyness" className="flex flex-wrap items-center">
          {COMMITMENT.map((item) => (
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
          {STARTUP_STAGE.map((item) => (
            <Choice
              key={item.value}
              name="startupStage"
              id={item.value.toString()}
              type="radio"
              size="sm"
              checked={startupStage === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>

        <Fieldset legend="Experience" className="flex flex-wrap items-center">
          {STARTUP_HISTORY.map((item) => (
            <Choice
              key={item.value}
              name="startupHistory"
              id={item.value.toString()}
              type="radio"
              size="sm"
              checked={startupHistory === item.value}
              label={item.label}
              readOnly={!isEditing}
              readOnlyIcon={item.emoji}
              onChange={onChange}
            />
          ))}
        </Fieldset>

        <Fieldset legend="Workplace" className="flex flex-wrap items-center">
          {WORKPLACE.map((item) => (
            <Choice
              key={item.value}
              name="startupWorkplace"
              id={item.value.toString()}
              type="radio"
              size="sm"
              checked={startupStage === item.value}
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
