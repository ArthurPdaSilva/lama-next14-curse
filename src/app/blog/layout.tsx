const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <h2>This is the Blog Layout</h2>
      {children}
    </div>
  );
};

export default Layout;
