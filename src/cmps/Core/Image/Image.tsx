import clsx from 'clsx';

type ImageProps = {
  src: string;
  className?: string;
  title?: string;
  alt?: string;
};

const Image = ({ src, title, alt, className, ...rest }: ImageProps) => {
  return (
    <img
      src={src}
      title={title || alt}
      alt={alt || title}
      className={clsx(
        'rounded-full border-2 object-cover',
        'border-gray-400 dark:border-gray-700',
        className || 'h-20 w-20 sm:h-[7em] sm:w-[7em]'
      )}
      {...rest}
    />
  );
};

export { Image };
