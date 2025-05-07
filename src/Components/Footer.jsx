import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {    
    const quickLinks = [
        { path: "/home", label: "الرئيسية" },
        { path: "/cart", label: "سلة المشتريات" },
        { path: "/favorite", label: "المفضلة" }
    ];

    const contactInfo = [
        { icon: "fas fa-envelope", text: "support@grocery.com" },
        { icon: "fas fa-phone", text: "+20 123 456 7890" },
        { icon: "fas fa-map-marker-alt", text: "القاهرة، مصر" }
    ];

    const socialLinks = [
        { icon: "fab fa-facebook", label: "فيسبوك", url: "#" },
        { icon: "fab fa-instagram", label: "انستجرام", url: "#" },
        { icon: "fab fa-whatsapp", label: "واتساب", url: "#" }
    ];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>روابط سريعة</h3>
                    <ul>
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>
                                    <i className="fas fa-chevron-left"></i>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>تواصل معنا</h3>
                    <ul>
                        {contactInfo.map((info, index) => (
                            <li key={index}>
                                <i className={info.icon}></i>
                                <span dir='ltr'>{info.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>تابعنا</h3>
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index}
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className={social.icon}></i>
                                <span>{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>جميع الحقوق محفوظة &copy; 2025 متجر البقالة</p>
            </div>
        </footer>
    );
};

export default Footer; 