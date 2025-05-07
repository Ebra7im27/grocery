import React, { useContext } from 'react';
import '../Styles/FavCard.css';
import { FavContext } from '../Context/FavContext';
import { Link } from 'react-router-dom';

export default function FavCard() {
    let { fav } = useContext(FavContext);

    const baseURL = 'https://grocery.mlmcosmo.com';
    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${baseURL}${path}`;
    };

    return (
        <section className='favCard'>
            <h2 className='title fw-bold'>المفضلة</h2>
            {
                fav.map((item) => (
                    <div key={item.id} className='Card d-flex justify-content-between align-items-center flex-wrap'>
                        <div className="info d-flex gap-3">
                            <Link to={"/product/" + item.id}>
                                <img src={getImageUrl(item.image_path)} alt={item.name} />
                            </Link>
                            <div className="description d-flex flex-column justify-content-center">
                                <h3>{item.name}</h3>
                                <span>190 جرام</span>
                            </div>
                        </div>
                        <span style={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "3px" }}>
                            <span style={{ fontWeight: "400", fontSize: "10px" }}>جنيه</span>
                            {item.price}
                        </span>
                    </div>
                ))
            }
        </section>
    );
}