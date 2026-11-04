import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CustomerPage from './pages/customer/CustomerPage';
import AdminPage from './pages/admin/AdminPage';
import SignIn from './pages/customer/SignIn';
import ReturnsOrders from './pages/customer/ReturnsOrders';
import About from './pages/home/About';
import Cart from './pages/customer/Cart';
import WarehousePage from './pages/warehouse/WarehousePage';
import ReceivingDeskPage from './pages/warehouse/ReceivingDeskPage';
import WorkstationPage from './pages/warehouse/WorkstationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Auto Parts Website</h1>} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/returnorder" element={<ReturnsOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/warehouse/receivingdesk" element={<ReceivingDeskPage />} />
          <Route path="/warehouse/workstation" element={<WorkstationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
