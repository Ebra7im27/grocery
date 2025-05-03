import '../Styles/NavBar.css';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import logoGrocery from "../assets/logoGrocery.png";
import searchIcon from "../assets/li_search.png";
import userIcon from "../assets/user.png";
import bagIcon from "../assets/bag.png";
import heartIcon from "../assets/heart-add.png";
import { FavContext } from '../Context/FavContext';

function NavBar() {
    let { cart, getCart } = useContext(CartContext);
    let { fav, getFav } = useContext(FavContext);

    useEffect(() => {
        getCart();
    }, []);
    useEffect(() => {
        getFav();
    }, []);

    return (
        <nav
            className="navbar navbar-expand-lg container"
            style={{
                marginTop:"28px",
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
                    <div className="subnav-select">
                        <select
                            name="language"
                            id="language-select"
                            className="subnav-language"
                            style={{
                                marginRight: "29px",
                                border: "none",
                                outline: "none",
                                fontSize: "12px",
                                fontWeight: "400",
                                background: "transparent",
                                textAlign: "left",
                                direction: "rtl"
                            }}
                        >
                            <option value="ar">العربية</option>
                            <option value="en">الإنجليزية</option>
                            <option value="fr">الفرنسية</option>
                        </select>
                    </div>

                    <div className="d-flex flex-grow-1 justify-content-center position-relative">
                        <input
                            type="text"
                            placeholder="ابحث عن منتجك...."
                            aria-label="Search"
                            style={{
                                border: "none",
                                backgroundColor: "#F3F3F3",
                                width: "100%",
                                maxWidth: "455px",
                                height: "42px",
                                borderRadius: "10px",
                                padding: "0 40px 0 20px",
                            }}
                        />
                        <div>
                            <img
                                className='search-icon position-absolute'
                                src={searchIcon}
                                alt="icon in searchBar"
                            />
                        </div>
                    </div>

                    <div className="infoUser" style={{ display: "flex", alignItems: "center" }}>
                        <div className='photoUser'>
                            <img src={userIcon} alt="user" />
                        </div>
                        <select
                            name="language"
                            id="language-select"
                            className="subnav-language d-flex align-items-center"
                            style={{
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                textAlign: "left",
                                direction: "rtl",
                                height: "fit-content",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#253D4E"
                            }}
                        >
                            <option value="ar">محمد علي</option>
                            <option value="en">19 Years</option>
                            <option value="fr">KFS</option>
                        </select>
                    </div>

                    <div
                        style={{
                            marginRight: "46px",
                            gap: "17px"
                        }}
                        className="card-fav d-flex"
                    >
                        <div>
                            <Link to='/cart'>
                                <img src={bagIcon} alt="items in bag" width={24} />
                            </Link>
                            <div className='bag'>
                                <span className='numOfItems'>{cart.length}</span>
                            </div>
                        </div>
                        <div>
                            <Link to='/favorite'>
                                <img src={heartIcon} alt="Favorite items" />
                            </Link>
                            <div className='heart'>
                                <span className='numOfItems'>{fav.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;