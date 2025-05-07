import '../Styles/ProductCard.css';
import React, { useContext, useState } from 'react'; // أضف useState
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function ProductCard({ props }) {
    let { updateProductCount } = useContext(CartContext);

    // استخدم state محلي لتتبع الكمية
    const [quantity, setQuantity] = useState(props.quantity);

    const baseURL = 'https://grocery.mlmcosmo.com';

    const getImageUrl = (imagePath) => {
        if (!imagePath) return '';
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return imagePath;
        }
        const path = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
        return `${baseURL}${path}`;
    };

    const handleIncrease = async () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity); // تحديث الكمية في الواجهة على طول
        await updateProductCount(props.id, newQuantity);
    };

    return (
        <div>
            <div className="parent-card" key={props.id}>
                <div className="img d-flex justify-content-center align-items-center">
                    <Link to={"/product/" + props.id}>
                        <img
                            src={getImageUrl(props.image_path)}
                            alt={props.name}
                        />
                    </Link>
                </div>
                <div className="info-product d-flex flex-column">
                    <span className="name-product">{props.name}</span>
                    <span className="size-product">250مل</span>
                </div>
                <div className="price-quantity d-flex justify-content-between align-items-center">
                    <div className="price">
                        <span className="fw-bold">{props.price}ج</span>
                    </div>
                </div>
            </div>
        </div>
    );
}