import axios from "axios";
import React, { createContext, useState } from 'react';
import toast from "react-hot-toast";

export const FavContext = createContext();

export default function FavContextProvider({ children }) {
    const baseURL = "https://grocery.mlmcosmo.com";
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    const [fav, setFav] = useState([]);

    // Function to add product to favorites
    async function addProductToFav(product_id, image_path) {
        try {
            let { data } = await axios.post(`${baseURL}/user/put_favorites`, {
                product_id, image_path
            }, { headers });

            console.log("API response:", data);
            await getFav();
            if (data.message === "تم إضافة المنتج إلى المفضلة بنجاح") {
                toast(`${data.message} ❤️`, {
                    style: {
                        borderRadius: '10px',
                        background: '#e6f4ea',
                        color: '#1a3c34',
                    },
                });
            } else if (data.message === "تمت إزالة المنتج من المفضلة") {
                toast(`${data.message} 💔`, {
                    style: {
                        borderRadius: '10px',
                        background: '#fee2e2',
                        color: '#991b1b',
                    },
                });
            }
        } catch (error) {
            console.error("Error adding product to fav:", error);
        }
    }

    async function getFav() {

        try {
            let { data } = await axios.get(`${baseURL}/user/my_favorites`, { headers });
            console.log("Favorites data:", data);
            setFav(data.favorites || []);
        } catch (error) {
            console.error("Error fetching favorite:", error);
            setFav([]);
        }
    }

    return (
        <FavContext.Provider value={{ addProductToFav, getFav, fav, setFav }}>
            {children}
        </FavContext.Provider>
    );
}