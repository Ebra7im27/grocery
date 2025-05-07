import axios from "axios";
import React, { createContext, useState, useEffect } from 'react';
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
    const [isLoading, setIsLoading] = useState(false);

    // Fetch favorites on mount
    useEffect(() => {
        getFav();
    }, []);

    // Function to add product to favorites
    async function addProductToFav(product_id, image_path) {
        setIsLoading(true);
        try {
            let { data } = await axios.post(`${baseURL}/user/put_favorites`, {
                product_id, image_path
            }, { headers });

            // Update local state immediately based on the response
            if (data.message === "تم إضافة المنتج إلى المفضلة بنجاح") {
                setFav(prevFav => [...prevFav, { id: product_id, image_path }]);
                toast(`${data.message} ❤️`, {
                    style: {
                        borderRadius: '10px',
                        background: '#e6f4ea',
                        color: '#1a3c34',
                    },
                });
            } else if (data.message === "تمت إزالة المنتج من المفضلة") {
                setFav(prevFav => prevFav.filter(item => item.id !== product_id));
                toast(`${data.message} 💔`, {
                    style: {
                        borderRadius: '10px',
                        background: '#fee2e2',
                        color: '#991b1b',
                    },
                });
            }

            return data.message;
        } catch (error) {
            console.error("Error adding product to fav:", error);
            toast.error('حدث خطأ أثناء تحديث المفضلة');
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function getFav() {
        try {
            let { data } = await axios.get(`${baseURL}/user/my_favorites`, { headers });
            setFav(data.favorites || []);
        } catch (error) {
            console.error("Error fetching favorite:", error);
            setFav([]);
        }
    }

    return (
        <FavContext.Provider value={{ addProductToFav, getFav, fav, setFav, isLoading }}>
            {children}
        </FavContext.Provider>
    );
}