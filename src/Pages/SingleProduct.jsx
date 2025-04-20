import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/SingleProduct.css';
import { Toaster } from 'react-hot-toast';
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import SingleProductCard from '../Components/SingleProductCard';
import SimilarProducts from '../Components/SimilarProducts';
import Marquee from 'react-fast-marquee';

function SingleProduct() {
    const isLoading = useLoader(2000);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));

        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };

            // Fetch the current product
            axios.get(`https://grocery.mlmcosmo.com/user/products/${id}`, { headers })
                .then(response => {
                    const data = response.data.product;
                    const relatedProducts = response.data.related_products; // جلب المنتجات ذات الصلة
                    setProduct(data);
                    // تصفية المنتج الحالي من المنتجات ذات الصلة
                    const filteredRelatedProducts = relatedProducts.filter(item => item.id !== data.id);
                    setSimilarProducts(filteredRelatedProducts);
                })
                .catch(error => {
                    console.error("Error fetching product:", error);
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
    }, [id, navigate]); 


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section>
                    <NavBar />
                    <SingleProductCard props={product} />
                    <div>
                        <h2
                            className='fw-bold'
                            style={{
                                fontSize: "32px",
                                width: "78%",
                                margin: "auto",
                                color: "#253D4E",
                                marginTop: "40px"
                            }}>
                            منتجات ذات صله
                        </h2>
                        <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                            {similarProducts.map((item) => (
                                <SimilarProducts props={item} key={item.id} />
                            ))}
                        </Marquee>
                    </div>
                    <Toaster position="top-center" reverseOrder={false} />
                </section>
            )}
        </>
    );
}

export default SingleProduct;