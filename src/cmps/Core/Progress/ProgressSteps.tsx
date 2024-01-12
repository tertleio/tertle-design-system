import clsx from 'clsx';

// TODO: currPhase/urrStep types should need to keys/indx's of phases/steps
type ProgressStepsProps = {
  phases: string[];
  currPhase: string;
  steps: string[];
  currStep: string;
  className?: string;
};

const ProgressSteps = ({
  phases,
  steps,
  currPhase,
  currStep,
  className,
}: ProgressStepsProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-1',
        className
      )}
    >
      <ul className="flex gap-5 sm:gap-7 text-sm mb-[-0.2em]">
        {phases.map((phase, idx) => (
          <li
            key={idx}
            className={clsx(
              phase === currPhase && 'text-orange dark:text-orange-dark',
              idx <= phases.indexOf(currPhase)
                ? 'text-green dark:text-green-dark'
                : 'text-gray-400 dark:text-gray-600'
            )}
          >
            {phase}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-1 mt-2.5">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={clsx(
              'w-8 h-[1.5px]',
              step === currStep && 'bg-orange dark:bg-orange-dark',
              idx <= steps.indexOf(currStep)
                ? 'bg-green dark:bg-green-dark'
                : 'bg-gray-400 dark:bg-gray-600'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { ProgressSteps };
