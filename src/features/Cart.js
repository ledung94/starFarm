import { createSlice } from '@reduxjs/toolkit'

const Cart = createSlice({
    name: 'product',
    initialState: JSON.parse(localStorage.getItem("cart")) || [],
    reducers: {
        addToCart(state, action) {
            const { id, quantity } = action.payload;
            const product = state.find(product => product.id === id);
            if (product) {
                product.quantity += quantity;
            } else {
                // const product = products.find(product => product.id === id); Khong the update quantity truc tiep vao products dc
                state.push({ id: id, quantity: quantity });
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },

        checkOut(state, action) {
            const { firstname, lastname, address, phone, mail} = action.payload;
            if (state.length === 0) return;
            const record = {
                firstname: firstname,
                lastname: lastname,
                address: address,
                phone: phone,
                mail: mail,
                recordDetail: state
            }
            localStorage.setItem("record", JSON.stringify(record));
            localStorage.setItem("cartTotal", 0)
            state.splice(0, state.length)
            localStorage.setItem("cart", JSON.stringify(state))
        },

        removeToCart(state, action) {
            const { id } = action.payload;
            const productIndex = state.indexOf(state.find(product => product.id === id));
            if (productIndex === -1) return;
            console.log(productIndex);
            state.splice(productIndex, 1)
            localStorage.setItem("cart", JSON.stringify(state))
        },

        changeQuantity(state,action){
            console.log("hew")
            const { id, quantity } = action.payload;
            const product = state.find(product => product.id === id);
            if(!product) return;
            product.quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }

})

export const { addToCart, checkOut, removeToCart, changeQuantity } = Cart.actions

export default Cart.reducer