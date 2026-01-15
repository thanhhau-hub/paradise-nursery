import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

// Landing Page Component
function LandingPage() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/products');
    };

    return (
        <div className="landing-page">
            <div className="landing-content">
                <div className="company-logo">🌿</div>
                <h1 className="company-name">Paradise Nursery</h1>
                <p className="company-tagline">Where Green Meets Serenity</p>
                <p className="landing-description">
                    Welcome to Paradise Nursery, your one-stop destination for beautiful,
                    healthy plants that will transform your space into a green paradise.
                    Discover our wide selection of premium houseplants and garden favorites.
                </p>
                <button className="get-started-button" onClick={handleGetStarted}>
                    Get Started
                </button>
            </div>
        </div>
    );
}

// Navigation Bar Component
function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                🌿 Paradise Nursery
            </Link>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>
                    <Link to="/cart" className="cart-icon">
                        🛒
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

// Main App Component
function AppContent() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/products" element={
                        <>
                            <Navbar />
                            <ProductList />
                        </>
                    } />
                    <Route path="/cart" element={
                        <>
                            <Navbar />
                            <CartItem />
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Navbar />
                            <AboutUs />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

// App Wrapper with Redux Provider
function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
