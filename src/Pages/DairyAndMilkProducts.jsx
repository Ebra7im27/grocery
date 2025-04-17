import React from 'react';
import NavBar from '../Components/NavBar';
import Loader from '../Components/Loading/Loader'; // افترضت إن الـ Loader في مجلد Components
import useLoader from '../Components/Loading/useLoader'; // افترضت إن الـ hook في مجلد hooks
import '../Styles/DairyAndMilkProducts.css';

function DairyAndMilkProducts() {
    const isLoading = useLoader(2000); // الـ Loader هيظهر لمدة 2 ثواني

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section style={{ paddingTop: '28px' }}>
                    <NavBar />
                    <div className="upTitle container">
                        <p>منتجات الألبان والحليب</p>
                    </div>
                </section>
            )}
        </>
    );
}

export default DairyAndMilkProducts;