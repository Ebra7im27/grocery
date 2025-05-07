import '../Styles/NavBar.css';
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import logoGrocery from "../assets/logoGrocery.png";
import searchIcon from "../assets/li_search.png";
import bagIcon from "../assets/bag.png";
import heartIcon from "../assets/heart-add.png";
import { FavContext } from '../Context/FavContext';
import { CgLogOut } from "react-icons/cg";
import axios from 'axios';
import Swal from 'sweetalert2';

function NavBar() {
    let { cart, getCart } = useContext(CartContext);
    let { fav, getFav } = useContext(FavContext);
    const navigate = useNavigate();

    useEffect(() => {
        getCart();
    }, []);
    useEffect(() => {
        getFav();
    }, []);

    const token = JSON.parse(localStorage.getItem('token'));
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
    const handleLogOut = () => {
        if (token) {
            Swal.fire({
                title: 'هل أنت متأكد؟',
                text: 'هل تريد تسجيل الخروج؟',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'نعم، تسجيل الخروج',
                cancelButtonText: 'إلغاء',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .post('https://grocery.mlmcosmo.com/user/logout', {}, { headers })
                        .then((response) => {
                            localStorage.removeItem('token');
                            localStorage.removeItem('user');
                            Swal.fire(
                                'تم تسجيل الخروج!',
                                'لقد تم تسجيل خروجك بنجاح.',
                                'success'
                            ).then(() => {
                                navigate('/');
                            });
                        })
                        .catch((error) => {
                            console.error('Error logging out:', error);
                            Swal.fire(
                                'خطأ!',
                                'حدث خطأ أثناء تسجيل الخروج.',
                                'error'
                            );
                        });
                }
            });
        } else {
            Swal.fire('خطأ!', 'لا يوجد توكن لتسجيل الخروج.', 'error');
        }
    };

    return (
        <nav
            className="navbar navbar-expand-lg container"
            style={{
                marginTop: "28px",
                minHeight: "76px",
                backgroundColor: "#FFFFFF",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "1000",
            }}
        >
            <div
                className="container"
                style={{
                    padding: "0 53px"
                }}
            >
                <div className="logo-Name">
                    <Link
                        to="/home"
                        className="navbar-brand"
                        style={{ fontSize: "20px", fontWeight: "600", color: "#2A9ED1" }}
                    >
                        بقالة
                        <img src={logoGrocery} alt="Logo Gerocery" />
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <div className="nav-content flex-lg-row flex-column gap-1 gap-lg-5 mb-4 mb-lg-0">
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="ابحث عن منتجك...."
                                aria-label="Search"
                                className="search-input"
                            />
                            <img
                                className='search-icon'
                                src={searchIcon}
                                alt="icon in searchBar"
                            />
                        </div>
                        <div className="nav-links ms-lg-4">
                            <Link to="/home">الرئيسية</Link>
                            <Link to="/about">عنا</Link>
                            <Link to="/contact">تواصل معنا</Link>
                        </div>
                    </div>

                    <div
                        style={{
                            marginRight: "46px",
                            gap: "17px"
                        }}
                        className="card-fav d-flex mt-3"
                    >
                        <div>
                            <Link to='/cart'>
                                <img src={bagIcon} alt="items in bag" width={26} />
                                <div className='bag'>
                                    <span className='numOfItems'>{cart.length}</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='/favorite'>
                                <img src={heartIcon} alt="Favorite items" width={26} />
                                <div className='heart'>
                                    <span className='numOfItems'>{fav.length}</span>
                                </div>
                            </Link>
                        </div>
                        <div
                            className="logout"
                            style={{ cursor: 'pointer'}}
                            onClick={handleLogOut}
                        >
                            <CgLogOut
                                color="red"
                                size={30}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;