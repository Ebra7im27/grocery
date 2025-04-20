import '../../Styles/Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Swal from 'sweetalert2';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                title: 'خطأ',
                text: 'يرجى ملئ جميع الحقول.',
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
            return;
        }

        const formData = {
            email: email,
            password: password
        };

        axios.post("https://grocery.mlmcosmo.com/user/login", formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                const token = response.data.token;
                if (!token) {
                    Swal.fire({
                        title: 'خطأ',
                        text: 'لم يتم إرجاع رمز التوثيق من السيرفر. تواصل مع الدعم ❌',
                        icon: 'error',
                        confirmButtonText: 'حسناً'
                    });
                    return;
                }

                localStorage.setItem("token", JSON.stringify(token));
                Swal.fire({
                    title: 'تم بنجاح!',
                    text: 'تم تسجيل الدخول بنجاح ✅',
                    icon: 'success',
                    confirmButtonText: 'حسناً'
                });
                setEmail("");
                setPassword("");
                Navigate("/home");
            })
            .catch((error) => {
                Swal.fire({
                    title: 'حدث خطأ!',
                    text: error?.response?.data?.message || 'فشل تسجيل الدخول ❌',
                    icon: 'error',
                    confirmButtonText: 'حسناً'
                });
            });
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="container-fluid">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-6"
                    >
                        <div className="divImg d-none d-xl-block">
                            <img
                                src="../assets/photoMarket.png"
                                alt="photoMarket in Login"
                                className="login-img"
                                loading='lazy'
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-xl-6 col-12 login-form-col"
                    >
                        <div className="login-form-wrapper">
                            <div className="login-title">
                                <h2 className='fw-bold'>تسجيل الدخول</h2>
                            </div>

                            <div className="input-group input-group-email">
                                <label className='d-block' htmlFor="email">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    className='login-input custom-placeholder'
                                    type="email"
                                    placeholder="أدخل عنوان بريدك الالكترونى"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-group input-group-password">
                                <label className='d-block' htmlFor="password">
                                    الرقم السرى
                                </label>
                                <input
                                    className='login-input custom-placeholder'
                                    type="password"
                                    placeholder="أدخل الرقم السرى الخاص بك"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="forgot-password-link">
                                <Link to="/">
                                    هل نسيت الرقم السرى؟
                                </Link>
                            </div>

                            <div className="login-btn-container">
                                <motion.button
                                    type="submit"
                                    // whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="login-btn"
                                >
                                    تسجيل دخول
                                </motion.button>
                            </div>

                            <div className='login-or-divider'>
                                <span>Or</span>
                                <img
                                    src="../assets/icons_google.png"
                                    alt="LogIn With Email"
                                    className="google-icon"
                                />
                            </div>

                            <div className='login-footer'>
                                <motion.button
                                    // whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.1 }}
                                    className="signup-btn"
                                >
                                    <Link to="/signup" className="signup-link">
                                        تسجيل جديد
                                    </Link>
                                </motion.button>

                                <Link to="/" className="no-account-link">
                                    ليس لديك صفحه شخصيه؟
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </form>
    );
}

export default Login;
