import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import '../Styles/Products.css';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
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

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios.get('https://grocery.mlmcosmo.com/user/products', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    setProducts(response.data.message); // Set the products to the state
                    console.log(response.data.message); // Log the products to the console
                    setLoading(false);
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'حدث خطأ!',
                        text: error?.response?.data?.message || 'حدث خطأ أثناء جلب المنتجات ❌',
                        icon: 'error',
                        confirmButtonText: 'حسناً'
                    });
                    setLoading(false);
                });
        } else {
            navigate("/");
            Swal.fire({
                title: 'غير مصرح!',
                text: 'يرجى تسجيل الدخول أولاً',
                icon: 'warning',
                confirmButtonText: 'حسناً'
            });
            setLoading(false);
        }
    }, []);

    return (
        <section className='container'>
            <div className="row">
                {loading ? (
                    <div className="text-center">
                        <span>جاري تحميل المنتجات...</span>
                        <Spinner animation="border" role="status" style={{ marginTop: "20px" }} />
                    </div>
                ) : (
                    <div className="container">
                        <h2 className="title fw-bold">اشهر منتجاتنا</h2>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-end">
                            {
                                products.map((product) => (
                                    <div className="parent-card" key={product.id}>
                                        <div className="img d-flex justify-content-center align-items-center">
                                            <img
                                                src={getImageUrl(product.image_path)}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="info-product d-flex flex-column">
                                            <span className="name-product">{product.name}</span>
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
                                                    <span style={{ color: "#000000" }}>{product.quantity}</span>
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
                                                <span className="fw-bold">{product.price}ج</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </section>
    )
}

export default Products;