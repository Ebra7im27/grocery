import React from 'react';
import '../Styles/ProductCategory.css';
import { Link } from 'react-router-dom';

function ProductCategory() {
    return (
        <section>
            <div className="container selectcat">
                <div className='d-flex align-items-center info'>
                    <div className='line'></div>
                    <div className='title'>فئه منتجاتنا</div>
                </div>

                <div className='categories d-flex flex-wrap justify-content-evenly align-items-center'>
                    <Link to="/dairyandmilkproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Dairy-and-milk.png" alt="Dairy & Milk Products" />
                        <p>منتجات الالبان والحليب</p>
                    </Link>

                    <Link to="/teaandcoffeeproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Coffee-and-tea.png" alt="Tea & Coffee Products" />
                        <p>شاى وقهوه</p>
                    </Link>

                    <Link to="/saucesproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Sauces.png" alt="Sauce Products" />
                        <p>جميع الصلصات</p>
                    </Link>

                    <Link to="/cleanlinessproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Cleanliness.png" alt="Hygiene Products" />
                        <p>منتجات التنظيف</p>
                    </Link>

                    <Link to="/oilsandmargaineproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Oils-and-margaine.png" alt="Oil & Ghee Products" />
                        <p>الزيوت والسمن والزبده</p>
                    </Link>

                    <Link to="/softdrinksproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Soft drinks.png" alt="Soda Water Products" />
                        <p>الماء والمشروبات والعصائر</p>
                    </Link>

                    <Link to="/eggsproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/eggs.png" alt="Egg and dairy products" />
                        <p>البيض ومشتقات الالبان</p>
                    </Link>

                    <Link to="/assaliproducts" className='item text-center text-decoration-none'>
                        <img src="../assets/Assali.png" alt="Gaming Products" />
                        <p>التسالي والمقرمشات</p>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ProductCategory