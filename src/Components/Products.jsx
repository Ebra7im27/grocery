import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import '../Styles/Products.css';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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
                    // console.log(response.data.message); // Log the products to the console
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
    }, [navigate, setLoading]);

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
                                    <ProductCard props={product} key={product.id} />
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products;