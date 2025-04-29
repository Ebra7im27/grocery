import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../Context/CartContext';
import '../Styles/SingleProductCard.css'

export default function SingleProductCard({ props }) {
    let { addProductToCart, updateProductCount, cart } = useContext(CartContext);

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

    // ابحث عن المنتج في السلة لجلب الكمية المحدثة
    const cartItem = cart.find(item => item.product_id === props.id);
    const initialQuantity = cartItem ? cartItem.quantity : (props.quantity || 1);

    // استخدم state محلي لتتبع الكمية
    const [quantity, setQuantity] = useState(initialQuantity);

    // تحديث الكمية المحلية لما بيانات السلة تتغير
    useEffect(() => {
        const updatedCartItem = cart.find(item => item.product_id === props.id);
        const updatedQuantity = updatedCartItem ? updatedCartItem.quantity : (props.quantity || 1);
        setQuantity(updatedQuantity);
    }, [cart, props.id, props.quantity]);

    const baseURL = 'https://grocery.mlmcosmo.com';

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${baseURL}${path}`;
    };

    const handleIncrease = async () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        await updateProductCount(props.id, newQuantity);
    };

    const handleDecrease = async () => {
        const newQuantity = quantity - 1;
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            await updateProductCount(props.id, newQuantity);
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

                        <div
                            className='heartProduct'
                            style={{ cursor: 'pointer' }}
                        >
                            <span className='fs-5'>
                                <i className="fas fa-heart"></i>
                            </span>
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