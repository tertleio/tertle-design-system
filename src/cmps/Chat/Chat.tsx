import { useStore } from '@/stores/useStore';

import { Button, SectionContainer } from '../Core';
import { Form } from '../form/Core';
import { Textarea } from '../form/Fields';

const Chat = () => {
  const { user } = useStore();

  return (
    <Form
      id="chat"
      onSubmit={(values) => {
        console.log(values);
      }}
      options={{
        values: {
          msg2: `Hey, Lenny! How are you doing? Welcome to the new guild area! 🎉 \n\nI'm just an AI programme thats here connect you with other humans for weekly meeting check-ins. Should you choose to join a guild bla bla bla...`,
          msg1: '🐢 TertleAI joined the chat',
          newMsg: '',
        },
      }}
    >
      {({ methods: m, formDrawer: fD }) => (
        <>
          <SectionContainer className="!py-3">
            <Textarea
              // label="Message"
              registration={m.register('msg2')}
              readOnly={!fD.isEditing}
              placeholder="Message..."
            />
          </SectionContainer>
          <SectionContainer className="!py-3">
            <Textarea
              // label="Message"
              registration={m.register('msg1')}
              readOnly={!fD.isEditing}
              placeholder="Message..."
            />
          </SectionContainer>
        </>
      )}
    </Form>
  );
};

export { Chat };
