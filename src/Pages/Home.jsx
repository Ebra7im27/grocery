import React from 'react'
import Main from '../Components/Main'
import ProductCategory from '../Components/ProductCategory'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

function Home() {
    return (
        <div>
            <Main />
            <ProductCategory />
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home