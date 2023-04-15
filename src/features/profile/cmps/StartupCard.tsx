import clsx from 'clsx';
import { useState } from 'react';

import { Section } from '@/cmps/Els';
import { Textarea, Fieldset, Choice } from '@/cmps/Form';

type StartupCardProps = {
  startupPitch: string;
  startupHistory: number;
  startupStage: number;
  startupUrl: string;
  className?: string;
  onChange: (e: any) => void;
};

const StartupCard = (props: StartupCardProps) => {
  const {
    startupPitch,
    startupHistory,
    startupStage,
    startupUrl,
    className,
    onChange,
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Section
      title="Startup"
      // aside={{
      //   github: profile.link_personal,
      // }}
      className={clsx(
        'flex flex-col',
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
        <div className="mb-5 w-full">
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
