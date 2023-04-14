import clsx from 'clsx';

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const MainLayout = (props: MainLayoutProps) => {
  const { children, className } = props;

  return (
    <div className="w-full py-5">
      <main className={clsx('m-auto max-w-xl', className)}>{children}</main>
    </div>
  );
};

export { MainLayout };
