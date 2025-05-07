import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../Context/CartContext';
import { FavContext } from '../Context/FavContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../Styles/SingleProductCard.css';
import toast from "react-hot-toast";

export default function SingleProductCard({ props, onFavoriteToggle }) {
    let { addProductToCart, updateProductCount, cart } = useContext(CartContext);
    let { isLoading } = useContext(FavContext);
    const [isFavorite, setIsFavorite] = useState(props.is_favorite);

    const style = {
        fontFamily: "Cairo",
        fontWeight: "400",
        fontSize: "14px",
        color: "#000000",
    };

    const getStockStatusColor = (status) => {
        return status === "out_of_stock" ? "text-danger" : "text-success";
    };
    const isProductAvailable = props.stock_status !== "out_of_stock";

    const cartItem = cart.find(item => item.product_id === props.id);
    const initialQuantity = cartItem ? cartItem.quantity : 1;
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        const updatedCartItem = cart.find(item => item.product_id === props.id);
        const updatedQuantity = updatedCartItem ? updatedCartItem.quantity : 1;
        setQuantity(updatedQuantity);
    }, [cart, props.id]);

    const baseURL = 'https://grocery.mlmcosmo.com';

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '/images/placeholder.jpg';
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${baseURL}${path}`;
    };

    const handleIncrease = async () => {
        try {
            const newQuantity = quantity + 1;
            await updateProductCount(props.id, newQuantity);
            setQuantity(newQuantity);
        } catch (error) {
            console.error("Error updating quantity:", error);
            toast.error('فشل تحديث الكمية');
        }
    };

    const handleDecrease = async () => {
        if (quantity > 1) {
            try {
                const newQuantity = quantity - 1;
                await updateProductCount(props.id, newQuantity);
                setQuantity(newQuantity);
            } catch (error) {
                console.error("Error updating quantity:", error);
                toast.error('فشل تحديث الكمية');
            }
        }
    };

    const handleFavClick = async () => {
        // Toggle local state immediately
        setIsFavorite(!isFavorite);
        
        try {
            await onFavoriteToggle(props.id, props.image_path);
        } catch (error) {
            // Revert local state if API call fails
            setIsFavorite(!isFavorite);
            console.error("Error toggling favorite:", error);
        }
    };

    return (
        <div>
            <div className="viewProduct d-flex justify-content-center align-items-center flex-wrap">
                <div className='imgProduct'>
                    <img src={getImageUrl(props.image_path)} alt={props.name} />
                </div>
                <div className='detailsProduct d-flex flex-column'>
                    <span className='titleProduct'>{props.name}</span>
                    <span className="sizeProduct">250مل</span>
                    <span className='priceProduct'>{props.price}ج</span>
                    <div className='price-quantity d-flex align-items-center gap-4'>
                        <div className="quantity d-flex justify-content-center align-items-center">
                            <motion.button
                                onClick={handleIncrease}
                                whileTap={{ scale: 1.1 }}
                                className="plus d-flex justify-content-center align-items-center"
                                type="button"
                            >
                                +
                            </motion.button>
                            <div className="number-quantity">
                                <span style={{ color: "#000000" }}>{quantity}</span>
                            </div>
                            <motion.button
                                onClick={handleDecrease}
                                whileTap={{ scale: 1.1 }}
                                className="minus d-flex justify-content-center align-items-center"
                                type="button"
                            >
                                -
                            </motion.button>
                        </div>

                        <div className="heart-container">
                            {isFavorite ? (
                                <FaHeart
                                    className="heart-icon"
                                    onClick={handleFavClick}
                                    style={{ 
                                        color: '#125A7A',
                                        
                                        cursor: 'pointer',
                                        width: '24px',
                                        height: '24px',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ) : (
                                <FaRegHeart
                                    className="heart-icon"
                                    onClick={handleFavClick}
                                    style={{ 
                                        color: '#125A7A',
                                        cursor: 'pointer',
                                        width: '24px',
                                        height: '24px',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <hr style={{ color: "black" }} />

                    <div className='descriptionProduct d-flex flex-column gap-3'>
                        <div className='deleveryProduct d-flex justify-content-between' style={style}>
                            <span>التسليم المتوقع : </span>
                            <span>في نفس اليوم</span>
                        </div>
                        <div className='sizeProduct d-flex justify-content-between' style={style}>
                            <span>الوزن : </span>
                            <span>150 جرام</span>
                        </div>
                        <div className='categoryProduct d-flex justify-content-between' style={style}>
                            <span>التصنيف : </span>
                            <span>الحلويات والشيكولاته والشيبس</span>
                        </div>
                        <div className='categoryProduct d-flex justify-content-between' style={style}>
                            <span>الحالة : </span>
                            <span className={`fw-bold ${getStockStatusColor(props.stock_status)}`}>
                                {isProductAvailable ? "متوفر" : "غير متوفر"}
                            </span>
                        </div>

                        {isProductAvailable && (
                            <div className='btnProduct d-flex justify-content-center align-items-center'>
                                <button
                                    onClick={() => addProductToCart(props.id, 1)}
                                    className='btn-cart'
                                >
                                    اضف الى السله
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}