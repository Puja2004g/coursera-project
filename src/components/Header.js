import React from "react";
import banner from '../images/restauranfood.jpg';

function Header(){
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve table</button>
                </div>

                <div className="banner-img">
                    <img src={banner} alt="Banner"/>
                </div>
            </section>
        </header>
    );
}

export default Header;