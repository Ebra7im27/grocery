import React, { useContext, useEffect } from 'react';
import "../Styles/Cart.css"
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';
import CartCard from '../Components/CartCard';
import PaymentCard from '../Components/PaymentCard';
import { CartContext } from '../Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Footer from '../Components/Footer';

export default function Cart() {
    const isLoading = useLoader(2000);
    let { cart, getCart } = useContext(CartContext);

    useEffect(() => {
        getCart();
    }, []);

    const EmptyCart = () => {
        return (
            <div className="container ">
                <div className="row justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm cart-container">
                            <h4 className="display-5 mb-4 cart-title">سلة المشتريات فارغة</h4>
                            <p className="mb-4 cart-message">
                                يبدو أنك لم تضف أي منتجات إلى السلة بعد.
                            </p>
                            <Link
                                to="/home"
                                className="btn btn-dark btn-lg px-5 py-2 continue-shopping-btn"
                            >
                                <i style={{ marginBottom: "-4px" }} className="fa fa-arrow-right"></i>&nbsp;
                                <span>متابعة التسوق</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const ShowProducts = () => {
        return (
            <div className='d-flex justify-content-between flex-wrap'>
                <CartCard />
                <PaymentCard />
            </div>
        )
    }

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <section>
                        <NavBar />
                        <div className="cart ">
                            {cart.length > 0 ? <ShowProducts /> : <EmptyCart />}
                        </div>
                        <Footer />
                    </section>
                )
            }
            <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}