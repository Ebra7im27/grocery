import './Signup.css'
import React from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Signup() {
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
                                alt="photoMarket in Signup"
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
                    >                        <div className="signUpForm">
                            <div className="signUpTitle">
                                <h2 className='fw-bold' style={{ fontSize: "40px" }}>تسجيل الدخول</h2>
                            </div>

                            <div>
                                <label className='d-block'
                                    htmlFor="text"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        marginBottom: "14px",
                                        marginTop: "46px"
                                    }}
                                >
                                    الإسم
                                </label>

                                <input
                                    style={{
                                        width: "349px",
                                        height: "36px",
                                        borderRadius: "5px",
                                        border: "1px solid #D9D9D9",
                                        padding: "10px"
                                    }} className='custom-placeholder'
                                    type="text"
                                    placeholder="أدخل إسمك ثلاثي"
                                />
                            </div>
                            <div>
                                <label
                                    className='d-block'
                                    htmlFor="telNum"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        marginBottom: "14px",
                                        marginTop: "29px"
                                    }}
                                >
                                    رقم الجوال
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
                                    type="telNum"
                                    placeholder="أدخل رقم الهاتف "
                                />
                            </div>
                            <div>
                                <label
                                    className='d-block'
                                    htmlFor="email"
                                    style={{
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        marginBottom: "14px",
                                        marginTop: "29px"
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
                                style={{
                                    marginTop: "79px"
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
                                        fontWeight: "500",
                                        fontSize: "12px",
                                        cursor: "pointer",
                                        padding: "0"
                                    }}
                                >
                                    <Link
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            color: "#FFFFFF",
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            lineHeight: "36px",
                                            textAlign: "center"
                                        }}
                                    >
                                        تسجيل جديد
                                    </Link>
                                </motion.button>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </form >
    )
}

export default Signup