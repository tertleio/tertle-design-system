import clsx from 'clsx';

import { Section } from '@/cmps/Els';
import { Textarea, Fieldset, Choice } from '@/cmps/Form';

type StartupCardProps = {
  className?: string;
};

const StartupCard = (props: StartupCardProps) => {
  const { className = '' } = props;

  return <div className={clsx(className)}>
       <Section
          title="Startup"
          aside={
            <AsideStartup
              data={{
                github: profile.link_personal,
              }}
            />
          }
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
                name="startup_pitch"
                placeholder="Write something about your idea..."
                readOnly={!isEditing}
                value={profile.startup_pitch}
                onChange={handleProfileChange}
              />
            </div>
          </Fieldset>
  </div>;
};

export { StartupCard };
