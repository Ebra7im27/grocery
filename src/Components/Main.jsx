import React from 'react'
import NavBar from './NavBar'
import '../Styles/Main.css'
import MainPhoto from "../assets/photoMain.png"

function Main() {
  return (
    <div>
      <div
        className="container-fluid"
        style={{
          paddingTop: "28px",
          backgroundColor: "#125A7A",
          height: "395px",
          position: "relative",
        }}
      >
        <NavBar />

        <div className="Welcome d-flex container justify-content-between flex-wrap">
          <div className="Welcome-Text">
            <p>
              احتفل <span className="text-white">برمضان</span> مع اجود المنتجات
              الغذائيه نوصلها لباب بيتك
            </p>
          </div>
          <div className="Welcome-Image">
            <img
              src={MainPhoto}
              alt="ImageToDescribeTheSite"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main;