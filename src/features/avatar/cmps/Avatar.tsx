import clsx from 'clsx';

type AvatarProps = {
  src: string;
  className?: string;
  firstName?: string;
  title?: string;
  alt?: string;
  lastName?: string;
};

const Avatar = (props: AvatarProps) => {
  const { className, firstName = '', lastName = '', src, title } = props;
  return (
    <img
      className={clsx(
        'ml-2 h-24 w-24 rounded-full border-2 border-gray-700 dark:border-gray-700 md:h-28 md:w-28',
        className
      )}
      src={src}
      title={title || `${firstName} ${lastName}`}
      alt={`${firstName} ${lastName}`}
    />
  );
};

export { Avatar };
