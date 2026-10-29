import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CustomerPage from './pages/CustomerPage';
import AdminPage from './pages/AdminPage';
import SignIn from './pages/SignIn';
import ReturnsOrders from './pages/ReturnsOrders';
import About from './pages/About';
import Cart from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Auto Parts Website</h1>} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/returnorder" element={<ReturnsOrders />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
