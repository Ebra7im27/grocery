import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/ProductCategoryCard.css"

export default function ProductCategoryCard({ props }) {

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
        <div className='mx-auto'>
            <Link
                to={"category/" + props.id}
                className='item text-center text-decoration-none'
            >
                <img
                    src={getImageUrl(props.image_path)}
                    alt={props.name}
                    loading='lazy'
                />
                <p className='nameProduct'>{props.name}</p>
            </Link>
        </div>
    )
}
