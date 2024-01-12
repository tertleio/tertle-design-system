import { useState, useEffect } from 'react';
import { clsx } from '@/utils/classes';
import { Transition } from '@headlessui/react';

import { Container, Icon, IconMember } from '@/cmps/Core';

type SwipeControlProps = {
  leftIcon?: IconMember;
  rightIcon?: IconMember;
  leftCmp?: React.ReactNode;
  middleCmp?: React.ReactNode;
  rightCmp?: React.ReactNode;
  className?: string;
  leftAction: () => void;
  rightAction: () => void;
};

const SwipeControl = ({
  className,
  leftIcon = 'thumbsDown',
  rightIcon = 'thumbsUp',
  leftCmp,
  middleCmp,
  rightCmp,
  leftAction,
  rightAction,
}: SwipeControlProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    return () => {
      setShow(false);
    };
  }, []);

  return (
    <Container
      className={clsx(
        'flex justify-between border items-center juisify-center h-12',
        className
      )}
    >
      <button
        onClick={leftAction}
        className="flex items-center justify-center w-20 h-full border-r border-gray-300 dark:border-gray-700 rounded-l-2xl hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <Icon
          name={leftIcon}
          size="lg"
          // className="text-red dark:text-red-dark"
          color={leftIcon === 'thumbsDown' ? 'red' : 'base'}
        />
      </button>

      <div className="flex w-full justify-around items-center gap-5 mx-5 relative">
        <Transition
          show={show}
          appear={true}
          enter="transform transition ease-in-out duration-200"
          enterFrom="translate-x-1/2 opacity-0"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 delay-100"
        >
          {leftCmp}
        </Transition>

        {middleCmp}

        <Transition
          show={show}
          enter="transform transition ease-in-out duration-200"
          enterFrom="-translate-x-1/2 opacity-0"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 delay-100"
        >
          {rightCmp}
        </Transition>
      </div>

      <button
        onClick={rightAction}
        className="flex items-center justify-center w-20 h-full border-l border-gray-300 dark:border-gray-700 rounded-r-2xl hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        <Icon
          name={rightIcon}
          size="lg"
          color={rightIcon === 'thumbsUp' ? 'green' : 'base'}
        />
      </button>
    </Container>
  );
};

export { SwipeControl };
