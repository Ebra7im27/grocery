import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const baseURL = "https://grocery.mlmcosmo.com";
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };

    const [cart, setCart] = useState([]);

    // Function to add product to cart
    async function addProductToCart(product_id, quantity) {

        try {
            let { data } = await axios.post(`${baseURL}/user/cart`, {
                product_id,
                quantity
            }, { headers });

            console.log("Product added to cart:", data);
            await getCart();
            toast('تم إضافة المنتج إلى السلة ✅', {
                icon: '🛒',
                style: {
                    borderRadius: '10px',
                    background: '#e0f7e9',
                    color: '#1b5e20',
                },
            });
        } catch (error) {
            console.error("Error adding product to cart:", error);
            toast.error('فشل إضافة المنتج إلى السلة');
        }
    }

    // Function to get product from cart
    async function getCart() {

        try {
            let { data } = await axios.get(`${baseURL}/user/cart`, { headers });
            console.log("Cart data:", data);
            setCart(data.cart || []);
        } catch (error) {
            console.error("Error fetching cart:", error);
            setCart([]);
        }
    }

// Function to update product quantity in cart
async function updateProductCount(product_id, quantity) {
    if (quantity > 0) {
        try {
            let { data } = await axios.post(
                `${baseURL}/user/cart/${product_id}`,
                {
                    quantity
                },
                { headers }
            );

            console.log("Quantity update response:", data);
            await getCart(); // جلب بيانات السلة المحدثة
            console.log("Cart after update:", cart);
            toast('تم تحديث الكمية بنجاح ✅', {
                icon: '🛒',
                style: {
                    borderRadius: '10px',
                    background: '#e0f7e9',
                    color: '#1b5e20',
                },
            });
        } catch (error) {
            console.error("Error updating product quantity:", error);
            toast.error('فشل تحديث الكمية');
        }
    }
}

    // Function to delete product from cart
    async function deleteProduct(product_id) {

        try {
            let { data } = await axios.delete(`${baseURL}/user/cart/${product_id}`, { headers });

            console.log("Delete Product:", data);
            await getCart()
            toast('تم حذف المنتج من السلة ✅', {
                icon: '🛒',
                style: {
                    borderRadius: '10px',
                    background: '#e0f7e9',
                    color: '#1b5e20',
                },
            });
        } catch (error) {
            console.error("Error deleting product from cart:", error);
            toast.error('فشل حذف المنتج من السلة');
        }
    }

    return (
        <CartContext.Provider value={{ deleteProduct, updateProductCount, addProductToCart, getCart, cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}
