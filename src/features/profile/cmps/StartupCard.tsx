import clsx from 'clsx';

type StartupCardProps = {
  className?: string;
};

const StartupCard = (props: StartupCardProps) => {
  const { className = '' } = props;

  return <div className={clsx(className)}></div>;
};

export { StartupCard };
