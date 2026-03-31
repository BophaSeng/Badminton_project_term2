import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import { CartProvider } from './context/CartContext'
// Notice the double "pages/pages"
import Signup from "./pages/pages/user/Signup.jsx";
import Signin from "./pages/pages/user/signin.jsx"; // Note: your file is lowercase 'signin'
import ProfileSettings from "./pages/pages/user/ProfileSettings.jsx";
import History from "./pages/pages/user/history.jsx"; // Note: your file is lowercase 'history'


function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  )
}

export default App
