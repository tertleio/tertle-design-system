import { Button } from '../Core';
import { Textarea } from '../form/Fields';

type ChatBarProps = {
  formId: string;
  registration: any;
  isDirty: boolean;
};

const ChatBar = ({ registration, isDirty, formId }: ChatBarProps) => {
  return (
    <div className="relative mt-2">
      <Textarea
        variant="solid"
        placeholder="Message..."
        registration={registration}
      />
      <Button
        type="submit"
        form={formId}
        variant="secondary"
        size="md"
        icon="paperAirplaneSolid"
        color={isDirty ? 'green' : 'gray'}
        className="absolute right-1 bottom-1"
      />
    </div>
  );
};

export { ChatBar };
