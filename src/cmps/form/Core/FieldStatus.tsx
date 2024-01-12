import { clsx } from '@/utils/classes';
import { useState, useEffect } from 'react';

import { Tooltip } from '../../Core';
import { Icon } from '../../Core';

type FieldStatusProps = {
  info?: string;
  error?: Partial<{ message: string }> | undefined;
  className?: string;
};

const FieldStatus = ({ info, error, className }: FieldStatusProps) => {
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
    <div className={clsx('flex px-1', className)}>
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
          <Icon name="infoCircle" color="gray" size="md" />
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
          <Icon name="dangerCircle" color="red" size="md" />
        </div>
      )}
    </div>
  );
};

export { FieldStatus, type FieldStatusProps };
