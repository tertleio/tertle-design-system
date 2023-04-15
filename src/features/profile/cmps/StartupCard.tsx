import clsx from 'clsx';
import { useState } from 'react';

import { Section } from '@/cmps/Els';
import { Textarea, Fieldset, Choice } from '@/cmps/Form';
import { IconMember } from '@/cmps/Els/Icon';
import { Controls } from './Controls';
import { Button } from '@/cmps/Els/Button';

type StartupCardProps = {
  startupPitch: string;
  startupHistory: number;
  startupStage: number;
  startupUrl: string;
  isAdmin?: boolean;
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
    isAdmin,
    onChange,
  } = props;
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
      title="Startup"
      aside={<Aside data={{ github: startupUrl }} />}
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
