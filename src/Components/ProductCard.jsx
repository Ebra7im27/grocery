import '../Styles/ProductCard.css'
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ props }) {

    // للصور baseURL تعريف ال
    const baseURL = 'https://grocery.mlmcosmo.com';

    // دالة للحصول على الرابط الكامل للصورة
    const getImageUrl = (imagePath) => {
        // التحقق من أن المسار موجود
        if (!imagePath) return '';

        // كامل بالفعل URL فهذا يعني انه http & https إذا كان المسار يبدأ بـ
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }

        // / التأكد من أن المسار يبدأ بـ 
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

        // إعادة المسار الكامل
        return `${baseURL}${path}`;
    };

    return (
        <div>
            <div className="parent-card" key={props.id}>
                <div className="img d-flex justify-content-center align-items-center">
                    <Link to={"/product/" + props.id}>
                        <img
                            src={getImageUrl(props.image_path)}
                            alt={props.name}
                        />
                    </Link>
                </div>
                <div className="info-product d-flex flex-column">
                    <span className="name-product">{props.name}</span>
                    <span className="size-product">250مل</span>
                </div>
                <div className="price-quantity d-flex justify-content-between align-items-center">
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
                    <div className="price">
                        <span className="fw-bold">{props.price}ج</span>
                    </div>
                </div>
            </div>
        </div>
    )
}