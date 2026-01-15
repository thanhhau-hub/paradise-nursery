import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import '../App.css';

// Product data
const productsData = [
    {
        id: 1,
        name: 'Monstera Deliciosa',
        price: 29.99,
        description: 'Popular tropical plant with large, glossy leaves. Perfect for bright, indirect light.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 2,
        name: 'Snake Plant',
        price: 19.99,
        description: 'Low-maintenance air-purifying plant. Thrives in low light conditions.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 3,
        name: 'Fiddle Leaf Fig',
        price: 39.99,
        description: 'Stunning statement plant with large violin-shaped leaves. Needs bright light.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 4,
        name: 'Pothos',
        price: 15.99,
        description: 'Easy-to-grow trailing plant. Perfect for beginners and low light spaces.',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2bfc0d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 5,
        name: 'Peace Lily',
        price: 24.99,
        description: 'Beautiful flowering plant that purifies air. Prefers moderate light.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 6,
        name: 'Rubber Plant',
        price: 27.99,
        description: 'Bold plant with thick, glossy leaves. Easy to care for and fast-growing.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 7,
        name: 'ZZ Plant',
        price: 22.99,
        description: 'Drought-tolerant plant with shiny leaves. Perfect for busy plant parents.',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2bfc0d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 8,
        name: 'Spider Plant',
        price: 14.99,
        description: 'Classic houseplant with arching leaves. Great for hanging baskets.',
        image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 9,
        name: 'Aloe Vera',
        price: 18.99,
        description: 'Medicinal succulent with healing properties. Loves bright, indirect light.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Succulent'
    },
    {
        id: 10,
        name: 'Chinese Money Plant',
        price: 21.99,
        description: 'Trendy plant with round, coin-like leaves. Easy to propagate.',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Indoor'
    },
    {
        id: 11,
        name: 'Boston Fern',
        price: 23.99,
        description: 'Lush, feathery plant perfect for humid environments. Great for bathrooms.',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2bfc0d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Fern'
    },
    {
        id: 12,
        name: 'Jade Plant',
        price: 17.99,
        description: 'Lucky succulent with thick, round leaves. Symbol of prosperity.',
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Succulent'
    }
];

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [addedItems, setAddedItems] = useState({});

    const handleAddToCart = (product) => {
        dispatch(addItem(product));

        // Show feedback animation
        setAddedItems({ ...addedItems, [product.id]: true });
        setTimeout(() => {
            setAddedItems({ ...addedItems, [product.id]: false });
        }, 2000);
    };

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Our Plant Collection</h1>
                <p>Discover our wide variety of beautiful, healthy plants</p>
            </div>

            <div className="product-grid">
                {productsData.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => handleAddToCart(product)}
                            >
                                {addedItems[product.id] ? '✓ Added to Cart!' :
                                    isInCart(product.id) ? 'Add More' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
