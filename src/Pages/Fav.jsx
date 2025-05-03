import React, { useContext, useEffect } from 'react';
import "../Styles/Fav.css";
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { Toaster } from 'react-hot-toast';
import FavCard from '../Components/FavCard';
import { FavContext } from '../Context/FavContext';

export default function Fav() {
    const isLoading = useLoader(2000);
    const { fav, getFav } = useContext(FavContext);

    useEffect(() => {
        getFav();
    }, []);

    const EmptyFavorites = () => {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: '70vh' }}>
                    <div className="col-md-8 col-lg-6 text-center">
                        <div className="p-4 bg-white rounded shadow-sm cart-container">
                            <h4 className="display-5 mb-4 cart-title">قائمة المفضلة فارغة</h4>
                            <p className="mb-4 cart-message">
                                لم تقم بإضافة أي عناصر إلى المفضلة بعد.
                            </p>
                            <Link
                                to="/home"
                                className="btn btn-dark btn-lg px-5 py-2 continue-shopping-btn"
                            >
                                <i style={{ marginBottom: "-4px" }} className="fa fa-arrow-right"></i>
                                <span>استكشاف المنتجات</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section>
                    <NavBar />
                    <div className="fav d-flex justify-content-center"style={{ marginTop: "100px" }}>
                        <FavCard />
                        {/* {fav.length > 0 ? <FavCard /> : <EmptyFavorites />} */}
                    </div>
                </section>
            )}
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}