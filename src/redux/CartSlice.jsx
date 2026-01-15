import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array of cart items
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add item to cart
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                // If item already exists, increase quantity
                existingItem.quantity += 1;
            } else {
                // If item doesn't exist, add it with quantity 1
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            }
        },

        // Remove item from cart
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },

        // Update quantity of an item
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                if (quantity > 0) {
                    // Update quantity if it's greater than 0
                    item.quantity = quantity;
                } else {
                    // Remove item if quantity is 0 or less
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },

        // Clear all items from cart
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Export actions
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Export selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartItemCount = (state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0);

// Export reducer
export default cartSlice.reducer;
