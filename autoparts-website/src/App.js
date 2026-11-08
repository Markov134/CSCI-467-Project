import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { homeLinks, customerLinks, adminLinks, warehouseLinks } from './components/navLinks';
import CustomerPage from './pages/customer/CustomerPage';
import AdminPage from './pages/admin/AdminPage';
import OrderPage from './pages/admin/OrderPage';
import SignIn from './pages/customer/SignIn';
import ReturnsOrders from './pages/customer/ReturnsOrders';
import About from './pages/home/About';
import Cart from './pages/customer/Cart';
import WarehousePage from './pages/warehouse/WarehousePage';
import ReceivingDeskPage from './pages/warehouse/ReceivingDeskPage';
import WorkstationPage from './pages/warehouse/WorkstationPage';
import HomePage from './pages/home/HomePage.js';
import LoginPage from './pages/login/LoginPage.js';
import styles from './Styles/Styles.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          { }
          <Route path="/" element={<LoginPage />} />

          <Route element={<Layout links={homeLinks} />}>
            <Route path="/home" element={<HomePage />} />
          </Route>

          <Route element={<Layout links={customerLinks} />}>
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/returnorder" element={<ReturnsOrders />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route element={<Layout links={adminLinks} />}>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/orderpage" element={<OrderPage />} />
          </Route>

          <Route element={<Layout links={warehouseLinks} />}>
            <Route path="/warehouse" element={<WarehousePage />} />
            <Route path="/warehouse/receivingdesk" element={<ReceivingDeskPage />} />
            <Route path="/warehouse/workstation" element={<WorkstationPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
