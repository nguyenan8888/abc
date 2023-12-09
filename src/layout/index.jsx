import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div style={{ marginTop: "56px", padding: '2rem' }}>{children}</div>
    </div>
  );
};

export default Layout;
