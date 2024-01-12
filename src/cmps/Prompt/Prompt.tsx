import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PromptContext from '@/stores/PromptContext';

// import GIFTertleRocketFast from '../../assets/t_rocket-fast-xs.gif';

const colors = {
  green: 'bg-green text-white dark:bg-green-dark dark:text-black',
  orange: 'bg-orange dark:bg-orange-dark text-white',
  red: 'bg-red dark:bg-red-dark text-white',
};

const def = {
  msg: '',
  color: 'orange',
  timeout: 3500,
};

const Prompt = ({ children }: React.PropsWithChildren) => {
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [prompt, setPrompt] = useState(def);
  const { msg = '', color = 'orange', timeout = 4000 } = prompt;

  useEffect(() => {
    if (!prompt.msg) return;
    setShowPrompt(true);
    const timer = setTimeout(() => {
      setShowPrompt(false);
      setPrompt(def);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [msg, timeout, prompt]);

  return (
    <>
      <div
        className={clsx(
          'fixed top-0 z-[99] bg-red w-full h-10',
          !showPrompt && 'hidden'
        )}
      >
        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-full flex justify-center items-center rounded-md text-centertext-smfont-bold',
            colors[color as keyof typeof colors]
          )}
        >
          <div>{msg}</div>
        </div>
      </div>

      <PromptContext.Provider value={setPrompt}>
        {children}
      </PromptContext.Provider>
    </>
  );
};

export default React.memo(Prompt);
