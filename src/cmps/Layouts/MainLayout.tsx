type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-full">
      <main className="m-auto max-w-xl">{children}</main>
    </div>
  );
};

export { MainLayout };
