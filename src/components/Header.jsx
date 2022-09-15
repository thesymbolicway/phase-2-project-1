import React from "react";
import Navbar from './Navbar'


function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
        
        {/* <img src={"https://danielarisa.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-14-at-5.38.00-PM.png"} alt={"Project 2"}/> */}
        <a href="/" className="header-logo">DOMify</a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          {/* 281-330-8004 */}
        </section>
        <section className="header-bottom__email">
          
        </section>
      </section>
    </section>
  )
}

export default Header;
