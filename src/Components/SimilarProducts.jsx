import React from 'react';
import ProductCard from './ProductCard';

export default function SimilarProducts({ props }) {
    return (
        <div
            style={{ marginRight: "37px" }}>
            <ProductCard props={props} />
        </div>
    )
}
