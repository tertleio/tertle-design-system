type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-scren w-full">
      <main className="justify-cente m-auto max-w-xl flex-row">{children}</main>
    </div>
  );
};

export { MainLayout };
