import React, { useEffect, useState } from 'react';
import '../Styles/ProductCategory.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductCategoryCard from './ProductCategoryCard';

function ProductCategory() {
    const [productCategory, setProductCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        const user = JSON.parse(localStorage.getItem('user'));
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
        if (token) {
            axios.get(`https://grocery.mlmcosmo.com/user/categories/${user.id}`, { headers })
                .then((response) => {
                    setProductCategory(response.data.message); // Set the products to the state
                    console.log(response.data.message); // Log the products to the console
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'حدث خطأ!',
                        text: error?.response?.data?.message || 'حدث خطأ أثناء جلب المنتجات ❌',
                        icon: 'error',
                        confirmButtonText: 'حسناً'
                    });
                });
        } else {
            navigate("/");
            Swal.fire({
                title: 'غير مصرح!',
                text: 'يرجى تسجيل الدخول أولاً',
                icon: 'warning',
                confirmButtonText: 'حسناً'
            });
        }
    }, [navigate]);



    return (
        <section>
            <div className="container selectcat">
                <div className='d-flex align-items-center info'>
                    <div className='line'></div>
                    <div className='title'>فئه منتجاتنا</div>
                </div>

                <div className='categories d-flex flex-wrap justify-content-evenly align-items-center'>
                    {
                        productCategory.map((item) => (
                            <ProductCategoryCard key={item.id} props={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductCategory