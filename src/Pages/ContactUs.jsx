import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Loader from '../Components/Loading/Loader';
import useLoader from '../Components/Loading/useLoader';

const ContactUs = () => {
    const isLoading = useLoader(2000); // الـ Loader هيظهر لمدة 2 ثواني

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="contact-page">
                    <NavBar />
                    <div className="contact-container">
                        <div className="contact-header">
                            <h1>تواصل معنا</h1>
                            <p>نحن هنا للإجابة على جميع استفساراتكم</p>
                        </div>

                        <div className="contact-content">
                            <div className="contact-info">
                                <div className="info-card">
                                    <FaPhone className="info-icon" />
                                    <h3>اتصل بنا</h3>
                                    <p dir='ltr'>+20 123 456 7890</p>
                                </div>
                                <div className="info-card">
                                    <FaEnvelope className="info-icon" />
                                    <h3>راسلنا عبر البريد</h3>
                                    <p>info@4thpyramids.com</p>
                                </div>
                                <div className="info-card">
                                    <FaMapMarkerAlt className="info-icon" />
                                    <h3>موقعنا</h3>
                                    <p>القاهرة، مصر</p>
                                </div>
                            </div>

                            <div className="contact-form">
                                <h2>أرسل لنا رسالة</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="الاسم" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="البريد الإلكتروني" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="الموضوع" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="الرسالة" required></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">إرسال</button>
                                </form>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="/" className="social-icon"><FaFacebook /></a>
                            <a href="/" className="social-icon"><FaTwitter /></a>
                            <a href="/" className="social-icon"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactUs; 