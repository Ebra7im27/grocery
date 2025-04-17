import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/SingleProduct.css';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';

function SingleProduct() {
    const isLoading = useLoader(2000);

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

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section>
                    <NavBar />
                    <div className="viewProduct d-flex justify-content-center align-items-center flex-wrap">
                        <div className='imgProduct'>
                            <img src="../assets/Food_cheetos__-removebg-preview 2.png" alt="" />
                        </div>
                        <div className='detailsProduct d-flex flex-column'>
                            <span className='titleProduct'>شيبسى شيتوس بالطعم الحار جدا</span>
                            <span className="sizeProduct">250مل</span>
                            <span className='priceProduct'>10ج</span>
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
                                        <span style={{ color: "#000000" }}>2</span>
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
                                        style={{ color: '#125A7A' }}
                                        className='fs-4'
                                    >
                                        <i className="far fa-heart"></i>
                                    </span>
                                </div>
                            </div>

                            <hr />

                            <div className='descriptionProduct d-flex flex-column gap-3'>
                                <div className='deleveryProduct d-flex justify-content-between' style={style}>
                                    <span>التسليم المتوقع</span>
                                    <span>في نفس اليوم</span>
                                </div>
                                <div className='sizeProduct d-flex justify-content-between' style={style}>
                                    <span>الوزن</span>
                                    <span>150 جرام</span>
                                </div>
                                <div className='categoryProduct d-flex justify-content-between' style={style}>
                                    <span>التصنيف</span>
                                    <span>الحلويات والشيكولاته والشيبس</span>
                                </div>
                                <div className='btnProduct d-flex justify-content-center align-items-center'>
                                    <button
                                        onClick={handleAddToCart}
                                        className='btn-cart'
                                    >
                                        اضف الى السله
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Toaster />
                </section>
            )}
        </>
    );
}

export default SingleProduct;