import React, { useContext } from 'react';
import "../Styles/PaymentCard.css";
import LogoPayment from "../assets/paymentCard.png";
import { CartContext } from '../Context/CartContext';

export default function PaymentCard() {
    const { cart } = useContext(CartContext);
    const deliveryFee = 50; // تكلفة التوصيل

    // حساب إجمالي الطلب
    const totalOrderPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    // السعر الكلي (الطلب + التوصيل)
    const totalPrice = totalOrderPrice + deliveryFee;

    return (
        <section className='paymentCard'>
            <div className="titlePaymentCard">
                <h2>تفاصيل الشراء</h2>
                <div className='paymentCardContainer d-flex justify-content-between'>
                    <p>الدفع عن طريق</p>
                    <img src={LogoPayment} alt="paymentCard" />
                </div>
                <table className="table table-borderless text-center" style={{ "--bs-table-bg": "transparent" }}>
                    <thead>
                        <tr>
                            <th scope="col">المنتج</th>
                            <th scope="col">الكمية</th>
                            <th scope="col">السعر</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>{item.product.name}</td>
                                <td>{item.quantity}</td>
                                <td>{(item.price * item.quantity)} ج</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center align-items-center'>
                    <hr style={{ width: "75%" }} />
                </div>
                <div className='totalPrice d-flex flex-column gap-2'>
                    <div className='d-flex justify-content-between'>
                        <h5>سعر الطلب</h5>
                        <span style={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "3px" }}>
                            <span style={{ fontWeight: "400", fontSize: "10px" }}>جنيه</span>
                            {totalOrderPrice}
                        </span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>سعر التوصيل</h5>
                        <span style={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "3px" }}>
                            <span style={{ fontWeight: "400", fontSize: "10px" }}>جنيه</span>
                            {deliveryFee}
                        </span>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h5>السعر الكلي</h5>
                        <span style={{ display: "flex", flexDirection: "row-reverse", alignItems: "flex-start", gap: "3px" }}>
                            <span style={{ fontWeight: "400", fontSize: "10px" }}>جنيه</span>
                            {totalPrice}
                        </span>
                    </div>
                </div>
                <div className='btnPayment d-flex justify-content-center align-items-center'>
                    <button>إدفع</button>
                </div>
            </div>
        </section>
    );
}