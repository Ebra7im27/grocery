import React from 'react'
import Main from '../Components/Main'
import ProductCategory from '../Components/ProductCategory'
import Products from '../Components/Products'

function Home() {
    return (
        <div>
            <Main />
            <ProductCategory />
            <Products/>
        </div>
    )
}

export default Home