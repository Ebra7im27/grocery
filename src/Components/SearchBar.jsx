import '../Styles/SearchBar.css';
import { useEffect, useState } from "react";

const SearchBar = ({ setFilterList }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://grocery.mlmcosmo.com/user/products")
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts()
    }, [])

    const handelChange = (input) => {
        const searchWord = input.target.value.toLowerCase()

        setFilterList(
            products.filter((item) =>
                item.title?.toLowerCase().includes(searchWord)
            )
        )
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." onChange={handelChange} />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default SearchBar