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
  isAdmin?: boolean;
  className?: string;
  onChange: (e: any) => void;
};

const STARTUP_HISTORY = {
  firstTimer: 1,
  experienced: 2,
  veteran: 3,
};

const COMMITMENT = {
  partTime: 1,
  fullTime: 2,
};

const StartupCard = (props: StartupCardProps) => {
  const {
    startupPitch,
    startupHistory,
    startupStage,
    startupUrl,
    isAdmin,
    className,
    onChange,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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
      <Fieldset legend="Idea" className="flex flex-wrap items-center">
        <div className="flex gap-[1px]">
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
        </div>
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
        <Fieldset
          legend="Ambition"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          <Choice
            name="1"
            id="1"
            type="radio"
            size="sm"
            checked={false}
            label="Indie"
            readOnly={!isEditing}
            readOnlyIcon="🌎"
            onChange={() => console.log('change')}
          />
          <Choice
            name="2"
            id="2"
            type="radio"
            size="sm"
            checked={true}
            label="To the moon"
            readOnly={!isEditing}
            readOnlyIcon="🌙"
            onChange={() => console.log('change')}
          />
          <Choice
            name="3"
            id="3"
            type="radio"
            size="sm"
            checked={false}
            label="To the stars"
            readOnly={!isEditing}
            readOnlyIcon="✨"
            onChange={() => console.log('change')}
          />
        </Fieldset>

        <Fieldset
          legend="Stage"
          className={clsx(
            'block items-center gap-[2px] sm:flex',
            !isEditing && 'flex'
          )}
        >
          <Choice
            name="1"
            id="1"
            type="radio"
            checked={false}
            size="sm"
            label="Discovery"
            readOnly={!isEditing}
            readOnlyIcon="🔬"
            onChange={() => console.log('change')}
          />
          <Choice
            name="2"
            id="2"
            type="radio"
            size="sm"
            checked={false}
            label="Prototype"
            readOnly={!isEditing}
            readOnlyIcon="🧪"
            onChange={() => console.log('change')}
          />
          <Choice
            name="3"
            id="3"
            type="radio"
            size="sm"
            checked={true}
            label="Paying customers"
            readOnly={!isEditing}
            readOnlyIcon="💰"
            onChange={() => console.log('change')}
          />
        </Fieldset>
      </div>
    </Section>
  );
};

export { StartupCard };
