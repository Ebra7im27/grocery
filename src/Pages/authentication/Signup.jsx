import '../../Styles/Signup.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function Signup() {
    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !phone || !email || !address || !password || !confirmPassword) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى ملئ جميع الحقول.',
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                title: 'خطأ',
                text: 'كلمة المرور غير متطابقة.',
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
            return;
        }

        /// Create a FormData object to send the data as multipart/form-data
        const formData = {
            name: firstName,
            last_name: lastName,
            phone: phone,
            email: email,
            address: address,
            password: password,
            password_confirmation: confirmPassword
        };
        axios.post("https://grocery.mlmcosmo.com/user/register", formData, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
            .then((response) => {
                console.log(response.data); // Log the response data to the console
                Swal.fire({
                    title: 'تم بنجاح!',
                    text: 'تم إنشاء حسابك بنجاح ✅',
                    icon: 'success',
                    confirmButtonText: 'حسناً'
                });
                setFname("");
                setLname("");
                setPhone("");
                setEmail("");
                setAddress("");
                setPassword("");
                setConfirmPassword("");
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    title: 'حدث خطأ!',
                    text: error?.response?.data?.message || 'حدث خطأ أثناء التسجيل ❌',
                    icon: 'error',
                    confirmButtonText: 'حسناً'
                });
            });
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <div className="container-fluid">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-6"
                    >
                        <div className="signup-image-container d-none d-xl-block">
                            <img
                                src="../assets/photoMarket.png"
                                alt="photoMarket in Signup"
                                className="signup-image"
                                loading='lazy'
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-xl-6 col-12 signup-form-col"
                    >
                        <div className="signup-form-wrapper">
                            <div className="signup-title">
                                <h2 className='fw-bold'>إنشاء حساب جديد</h2>
                            </div>

                            <div className='signup-name-fields'>
                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="firstName">
                                        الإسم الأول
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder'
                                        type="text"
                                        id="firstName"
                                        placeholder="أدخل اسمك"
                                        value={firstName}
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>

                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="lastName">
                                        إسم العائلة
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder'
                                        type="text"
                                        id="lastName"
                                        placeholder="اسم العائلة"
                                        value={lastName}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='signup-contact-fields'>
                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="phone">
                                        رقم الجوال
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder phone-input'
                                        type="tel"
                                        id="phone"
                                        placeholder="أدخل رقم الهاتف"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="email">
                                        البريد الإلكتروني
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder'
                                        type="email"
                                        id="email"
                                        placeholder="أدخل عنوان بريدك الإلكتروني"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="signup-input-group">
                                <label className='d-block' htmlFor="address">
                                    العنوان
                                </label>
                                <input
                                    className='signup-input custom-placeholder address-input'
                                    type="text"
                                    id="address"
                                    placeholder="أدخل العنوان الخاص بك"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className='signup-password-fields'>
                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="password">
                                        الرقم السري
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder'
                                        type="password"
                                        id="password"
                                        placeholder="أدخل الرقم السري الخاص بك"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="signup-input-group">
                                    <label className='d-block' htmlFor="confirmPassword">
                                        تأكيد الرقم السري
                                    </label>
                                    <input
                                        className='signup-input custom-placeholder'
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="تأكيد الرقم السري الخاص بك"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="signup-button-container">
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="signup-button"
                                >
                                    تسجيل جديد
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </form>
    );
};

export default Signup;