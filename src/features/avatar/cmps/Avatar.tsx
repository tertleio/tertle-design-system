import clsx from 'clsx';

type AvatarProps = {
  src: string;
  className?: string;
  title?: string;
  alt?: string;
};

// margin: 0 auto;
// object-fit: cover;
// min-height: 8em;
// width: 100%;
// height: 100%;
// background: $color-grey1;
// border: 1px solid $color-grey1;
// background-size: cover;
// border-radius: 50%;

const Avatar = (props: AvatarProps) => {
  const { className, src = '', title = '', alt = '' } = props;
  return (
    <img
      src={src}
      title={title || alt}
      alt={alt || title}
      className={clsx(
        'ml-2 h-24 w-24 rounded-full border-2 border-gray-700 object-cover dark:border-gray-700 md:h-28 md:w-28',
        className
      )}
    />
  );
};

export { Avatar };
