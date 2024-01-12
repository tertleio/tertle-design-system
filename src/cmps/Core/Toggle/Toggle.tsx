import { clsx } from '@/utils/classes';
import { Switch } from '@headlessui/react';

type ToggleProps = {
  isEnabled: boolean;
  setIsEnabled: (isEnabled: boolean) => void;
};

function Toggle({ isEnabled, setIsEnabled }: ToggleProps) {
  return (
    <Switch
      checked={isEnabled}
      onChange={setIsEnabled}
      className={clsx(
        'relative inline-flex h-5 w-10 items-center rounded-full',
        isEnabled
          ? 'bg-green dark:bg-green-dark'
          : 'bg-gray-500 dark:bg-gray-600 opacity-90'
      )}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={clsx(
          ' inline-block h-4 w-4 transform rounded-full transition duration-100 bg-white dark:bg-black',
          isEnabled ? 'translate-x-[1.35rem]' : 'translate-x-[0.15rem]'
        )}
      />
    </Switch>
  );
}

export { Toggle };
