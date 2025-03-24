import './Login.css'
import React from 'react'

function Login() {
    return (
        <form>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <div className="divImg d-none d-xl-block" style={{ height: "775px" }}>
                            <img
                                src="../assets/photoMarket.png"
                                alt="photoMarket in Login"
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>

                    <div className="col-xl-6 col-12 d-flex justify-content-center" style={{ marginTop: "102px" }}>
                        <div className="loginForm">
                            <div className="loginTitle">
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
                                <button
                                    style={{
                                        width: "107px",
                                        height: "36px",
                                        border: "none",
                                        borderRadius: "5px",
                                        backgroundColor: "#125A7A",
                                        color: "#FFFFFF",
                                        fontWeight: "500",
                                        fontSize: "12px"
                                    }}>تسجيل جديد</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Login