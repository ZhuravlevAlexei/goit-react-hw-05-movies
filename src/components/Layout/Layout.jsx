import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
