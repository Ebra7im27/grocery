import React, { useContext } from 'react';
import '../Styles/CartCard.css';
import { CartContext } from '../Context/CartContext';
import { motion } from 'framer-motion';

export default function CartCard() {
    let { cart, updateProductCount, deleteProduct } = useContext(CartContext);

    const baseURL = 'https://grocery.mlmcosmo.com';
    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${baseURL}${path}`;
    };

    const handleIncrease = async (productId, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        await updateProductCount(productId, newQuantity);
    };

    const handleDecrease = async (productId, currentQuantity) => {
        const newQuantity = currentQuantity - 1;
        if (newQuantity > 0) {
            await updateProductCount(productId, newQuantity);
        }
    };

    return (
        <section className='cartCard'>
            <h2 className='title fw-bold'>السله</h2>
            {
                cart.map((item) => (
                    <div key={item.id} className='Card d-flex justify-content-between align-items-center'>
                        <div className="info d-flex gap-3">
                            <img src={getImageUrl(item.product.image_path)} alt={item.product.name} />
                            <div className="description d-flex flex-column justify-content-center">
                                <h3>{item.product.name}</h3>
                                <span>190 جرام</span>
                            </div>
                        </div>
                        <div className="upPlusMinus d-flex flex-column-reverse align-items-center gap-3">
                            <div className="plusMinus d-flex justify-content-center align-items-center">
                                <motion.button
                                    onClick={() => handleIncrease(item.product_id, item.quantity)}
                                    whileTap={{ scale: 1.1 }}
                                    className="plus d-flex justify-content-center align-items-center"
                                    type="button"
                                >
                                    +
                                </motion.button>
                                <div className="number-quantity">
                                    <span style={{ color: "#000000" }}>{item.quantity}</span>
                                </div>
                                <motion.button
                                    onClick={() => handleDecrease(item.product_id, item.quantity)}
                                    whileTap={{ scale: 1.1 }}
                                    className="minus d-flex justify-content-center align-items-center"
                                    type="button"
                                >
                                    -
                                </motion.button>
                            </div>
                            <button onClick={() => deleteProduct(item.product_id)} className='deleteProductFromCart d-flex align-items-center justify-content-center gap-1'>
                                <i className="fas fa-trash basket"></i>
                                <p style={{marginTop:"11px"}}>حذف من السله</p>
                            </button>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}