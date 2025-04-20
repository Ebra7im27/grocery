import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function SingleProductCard({ props }) {

    const handleFavorite = () => {
        toast('تم إضافة المنتج إلى المفضلة ❤️', {
            style: {
                borderRadius: '10px',
                background: '#e0f7e9',
                color: '#1b5e20',
            },
        });
    };

    const handleAddToCart = () => {
        toast('تم إضافة المنتج إلى السلة ✅', {
            icon: '🛒',
            style: {
                borderRadius: '10px',
                background: '#e0f7e9',
                color: '#1b5e20',
            },
        });
    }

    const style = {
        fontFamily: "Cairo",
        fontWeight: "400",
        fontSize: "14px",
        color: "#000000",
    }

    // تحديد لون حالة المخزون بناءً على القيمة
    const getStockStatusColor = (status) => {
        return status === "out_of_stock" ? "text-danger" : "text-success";
    };
    // التحقق من توفر المنتج
    const isProductAvailable = props.stock_status !== "out_of_stock";

    // تعريف الـ baseURL للصور
    const baseURL = 'https://grocery.mlmcosmo.com';

    // دالة للحصول على الرابط الكامل للصورة
    const getImageUrl = (imagePath) => {
        // التحقق من أن المسار موجود
        if (!imagePath) return '';

        // إذا كان المسار يبدأ بـ http أو https، فهذا يعني أنه URL كامل بالفعل
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }

        // التأكد من أن المسار يبدأ بـ /
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

        // إعادة المسار الكامل
        return `${baseURL}${path}`;
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
                                whileTap={{ scale: 1.1 }}
                                className="plus d-flex justify-content-center align-items-center"
                                type="button"
                            >
                                +
                            </motion.button>
                            <div className="number-quantity">
                                <span style={{ color: "#000000" }}>{props.quantity}</span>
                            </div>
                            <motion.button
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
                            onClick={handleFavorite}
                        >
                            <span
                                className='fs-5'
                            >
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

                        {/* عرض زر الإضافة للسلة فقط إذا كان المنتج متوفر */}
                        {isProductAvailable && (
                            <div className='btnProduct d-flex justify-content-center align-items-center'>
                                <button
                                    onClick={handleAddToCart}
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
    )
}