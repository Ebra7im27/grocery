import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/AboutUs.css';
import { FaShoppingBag, FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';

const AboutUs = () => {
    const isLoading = useLoader(2000); // الـ Loader هيظهر لمدة 2 ثواني

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="about-page">
                    <NavBar />
                    <div className="about-container">
                        <div className="hero-section">
                            <h1>من نحن</h1>
                            <p>نحن نقدم أفضل تجربة تسوق إلكتروني لعملائنا</p>
                        </div>

                        <div className="mission-section">
                            <div className="mission-content">
                                <h2>رؤيتنا</h2>
                                <p>نسعى لأن نكون الوجهة الأولى للتسوق الإلكتروني في مصر، من خلال تقديم تجربة تسوق فريدة ومميزة لعملائنا.</p>
                            </div>
                            <div className="mission-image">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Our Mission" width={10} />
                            </div>
                        </div>

                        <div className="features-section">
                            <div className="feature-card">
                                <FaShoppingBag className="feature-icon" />
                                <h3>منتجات متنوعة</h3>
                                <p>نوفر مجموعة واسعة من المنتجات عالية الجودة</p>
                            </div>
                            <div className="feature-card">
                                <FaTruck className="feature-icon" />
                                <h3>توصيل سريع</h3>
                                <p>خدمة توصيل سريعة وموثوقة لجميع أنحاء مصر</p>
                            </div>
                            <div className="feature-card">
                                <FaHeadset className="feature-icon" />
                                <h3>دعم 24/7</h3>
                                <p>فريق خدمة العملاء متاح على مدار الساعة</p>
                            </div>
                            <div className="feature-card">
                                <FaShieldAlt className="feature-icon" />
                                <h3>دفع آمن</h3>
                                <p>معاملات آمنة ومشفرة لحماية بياناتك</p>
                            </div>
                        </div>

                        <div className="stats-section">
                            <div className="stat-item">
                                <h3>10K+</h3>
                                <p>عملاء سعداء</p>
                            </div>
                            <div className="stat-item">
                                <h3>5K+</h3>
                                <p>منتجات متنوعة</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>دعم العملاء</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>رضا العملاء</p>
                            </div>
                        </div>

                        <div className="team-section">
                            <h2>فريقنا</h2>
                            <div className="team-grid">
                                <div className="team-member">
                                    <img src="/images/team-1.jpg" alt="Team Member" />
                                    <h3>أحمد محمد</h3>
                                    <p>المدير التنفيذي</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/team-2.jpg" alt="Team Member" />
                                    <h3>سارة أحمد</h3>
                                    <p>مدير العمليات</p>
                                </div>
                                <div className="team-member">
                                    <img src="/images/team-3.jpg" alt="Team Member" />
                                    <h3>محمد علي</h3>
                                    <p>مدير التسويق</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutUs; 