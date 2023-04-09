type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export { MainLayout };
