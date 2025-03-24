import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Login() {
    return (
        <form>
            <div className="container-fluid">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-6"
                    >
                        <div
                            className="divImg d-none d-xl-block"
                            style={{
                                height: "775px"
                            }}
                        >
                            <img
                                src="../assets/photoMarket.png"
                                alt="photoMarket in Login"
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="col-xl-6 col-12 d-flex justify-content-center"
                        style={{
                            marginTop: "102px"
                        }}
                    >
                        <div className="loginForm">
                            <div className="loginTitle">
                                <h2 className='fw-bold' style={{ fontSize: "40px" }}>تسجيل الدخول</h2>
                            </div>

                            <div>
                                <label
                                    className='d-block'
                                    htmlFor="email"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        marginBottom: "14px",
                                        marginTop: "46px"
                                    }}
                                >
                                    البريد الإلكتروني
                                </label>

                                <input
                                    style={{
                                        width: "349px",
                                        height: "36px",
                                        borderRadius: "5px",
                                        border: "1px solid #D9D9D9",
                                        padding: "10px"
                                    }}
                                    className='custom-placeholder'
                                    type="email"
                                    placeholder="أدخل عنوان بريدك الالكترونى"
                                />
                            </div>
                            <div>
                                <label
                                    className='d-block'
                                    htmlFor="password"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        marginBottom: "14px",
                                        marginTop: "29px"
                                    }}
                                >
                                    الرقم السرى
                                </label>

                                <input
                                    style={{
                                        width: "349px",
                                        height: "36px",
                                        borderRadius: "5px",
                                        border: "1px solid #D9D9D9",
                                        padding: "10px"
                                    }}
                                    className='custom-placeholder'
                                    type="password"
                                    placeholder="أدخل الرقم السرى الخاص بك"
                                />
                            </div>

                            <div
                                style={{ marginTop: "30px" }}
                            >
                                <Link to="/"
                                    style={{
                                        color: "#000000",
                                        fontSize: "12px",
                                        fontWeight: "500",
                                    }}
                                >
                                    هل نسيت الرقم السرى؟
                                </Link>
                            </div>

                            <div
                                style={{
                                    marginTop: "28px"
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: "107px",
                                        height: "36px",
                                        border: "none",
                                        borderRadius: "5px",
                                        backgroundColor: "#125A7A",
                                        color: "#FFFFFF",
                                        fontWeight: "500",
                                        fontSize: "12px"
                                    }}
                                >تسجيل دخول
                                </motion.button>
                            </div>

                            <div
                                className='d-flex flex-column justify-content-center align-items-center'
                                style={{
                                    marginTop: "36px",
                                    gap: "6px"
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Istok Web",
                                        fontSize: "14px",
                                        fontWeight: "400"
                                    }}
                                >
                                    Or
                                </span>
                                <img
                                    src="../assets/icons_google.png"
                                    alt="LogIn With Email"
                                    width={25}
                                />
                            </div>

                            <div
                                style={{
                                    marginTop: "36px",
                                }}
                                className='d-flex justify-content-between'>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: "150px",
                                        height: "36px",
                                        border: "none",
                                        borderRadius: "5px",
                                        backgroundColor: "#125A7A",
                                        color: "#FFFFFF",
                                        fontWeight: "500",
                                        fontSize: "13px"
                                    }}
                                >
                                    <Link
                                        to="/signup"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        تسجيل جديد
                                    </Link>
                                </motion.button>

                                <Link to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "#000000",
                                        fontSize: "12px",
                                        fontWeight: "500",
                                    }}
                                >
                                    ليس لديك صفحه شخصيه؟
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </form>
    )
}

export default Login