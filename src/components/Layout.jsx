import MatrixRain from './MatrixRain';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;