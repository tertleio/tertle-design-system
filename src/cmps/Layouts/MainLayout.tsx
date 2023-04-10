type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full px-1 py-5 md:px-5">
      <main className="m-auto max-w-xl">{children}</main>
    </div>
  );
};

export { MainLayout };
