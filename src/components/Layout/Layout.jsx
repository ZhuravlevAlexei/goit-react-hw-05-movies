import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
