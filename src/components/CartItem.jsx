import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function CartItem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    // Calculate total cost
    const totalCost = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    // Calculate total items
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Handle quantity increase
    const handleIncreaseQuantity = (item) => {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
    };

    // Handle quantity decrease
    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.id));
        }
    };

    // Handle remove item
    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    // Handle continue shopping
    const handleContinueShopping = () => {
        navigate('/products');
    };

    // Handle checkout
    const handleCheckout = () => {
        alert('Proceeding to checkout... Total: $' + totalCost.toFixed(2));
        // In a real app, this would navigate to checkout page
    };

    // If cart is empty
    if (cartItems.length === 0) {
        return (
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Add some beautiful plants to your cart!</p>
                    <button
                        className="continue-shopping-button"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    // If cart has items
    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Shopping Cart</h1>
                <p>You have {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
            </div>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image"
                        />

                        <div className="cart-item-details">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <p className="cart-item-price">
                                ${item.price.toFixed(2)} each
                            </p>
                            <p className="cart-item-subtotal">
                                Subtotal: ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>

                        <div className="cart-item-actions">
                            <div className="quantity-controls">
                                <button
                                    className="quantity-button"
                                    onClick={() => handleDecreaseQuantity(item)}
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <span className="quantity-display">{item.quantity}</span>
                                <button
                                    className="quantity-button"
                                    onClick={() => handleIncreaseQuantity(item)}
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="remove-button"
                                onClick={() => handleRemoveItem(item.id)}
                                aria-label={`Remove ${item.name}`}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="cart-total">
                    Total Cost: ${totalCost.toFixed(2)}
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                    <button
                        className="continue-shopping-button"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                    <button
                        className="checkout-button"
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
