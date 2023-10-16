import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { Tooltip } from '../../Core';

const IconAlert = ({ className }: { className?: string }) => {
  return (
    // TRIANGLE:
    // <svg
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   strokeWidth={1.5}
    //   stroke="currentColor"
    //   className={clsx('w-5 h-5 text-red dark:text-red-dark ', className)}
    // >
    // <path
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    //   />
    // </svg>

    // CIRCLE:
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx('w-5 h-5 text-red dark:text-red-dark ', className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
};

const IconInfo = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx('w-5 h-5 text-gray-500 dark:text-gray-600 ', className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};

type FieldStatusProps = {
  info?: string;
  error?: Partial<{ message: string }> | undefined;
};

const FieldStatus = ({ info, error }: FieldStatusProps) => {
  const [showInfoTooltip, setShowInfoTooltip] = useState(false);
  const [showErrTooltip, setShowErrTooltip] = useState(false);

  useEffect(() => {
    if (!error?.message) return;
    if (error) setShowErrTooltip(true);
    const timeout = setTimeout(() => setShowErrTooltip(false), 2000);

    return () => {
      setShowErrTooltip(false);
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div className="flex px-1">
      {info && (
        <div
          role="button"
          onMouseEnter={() => setShowInfoTooltip(true)}
          onMouseLeave={() => setShowInfoTooltip(false)}
          className="relative"
        >
          <Tooltip showTooltip={showInfoTooltip}>
            <div
              aria-roledescription="information"
              aria-label={info}
              className="text-sm font-secondary text-gray-500 dark:text-gray-400"
            >
              {info}
            </div>
          </Tooltip>
          <IconInfo />
        </div>
      )}
      {error?.message && (
        <div
          role="button"
          onMouseEnter={() => setShowErrTooltip(true)}
          onMouseLeave={() => setShowErrTooltip(false)}
          className="relative"
        >
          <Tooltip showTooltip={showErrTooltip}>
            <div
              role="alert"
              className="text-sm font-secondary text-red dark-text-red-dark"
            >
              {error.message}
            </div>
          </Tooltip>
          <IconAlert />
        </div>
      )}
    </div>
  );
};

export { FieldStatus, type FieldStatusProps };
