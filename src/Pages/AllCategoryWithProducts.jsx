import React, { useEffect, useState } from 'react';
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';
import '../Styles/AllCategoryWithProducts.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Swal from 'sweetalert2';
import NavBar from '../Components/NavBar';

function AllCategoryWithProducts() {
    const [allCate, setAllCat] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const { id } = useParams(); // جلب الـ id من الـ URL
    const navigate = useNavigate();
    const isLoading = useLoader(2000); // الـ Loader هيظهر لمدة 2 ثواني

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        const user = JSON.parse(localStorage.getItem('user'));

        if (!token || !user) {
            navigate("/");
            Swal.fire({
                title: 'غير مصرح!',
                text: 'يرجى تسجيل الدخول أولاً',
                icon: 'warning',
                confirmButtonText: 'حسناً'
            });
            return;
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        axios.get(`https://grocery.mlmcosmo.com/user/categories/${id}/${user.id}`, { headers })
            .then((response) => {
                // تحديث اسم الفئة
                setCategoryName(response.data.message.name);
                setAllCat(response.data.message.products);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
                Swal.fire({
                    title: 'حدث خطأ!',
                    text: error?.response?.data?.message || 'حدث خطأ أثناء جلب المنتجات ❌',
                    icon: 'error',
                    confirmButtonText: 'حسناً'
                });
            });
    }, [id, navigate]); // إضافة id و navigate كتبعيات

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section>
                    {/* <NavBar/> */}
                    <NavBar />
                    <div className="container" style={{ marginTop: "100px" }}>
                        <h2 className="title fw-bold my-4">منتجات {categoryName}</h2>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-end">
                            {
                                allCate.map((item) => (
                                    <ProductCard props={item} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default AllCategoryWithProducts;