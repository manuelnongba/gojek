import React from "react";

const GoLoyalty = () => {
  return (
    <section className="landing-eight">
      <div>
        <h2 className="first-h2">
          We build products <br></br>that nations run on
        </h2>
        <a href="./products">
          <button className="first-a">View all products</button>
        </a>
      </div>
      <div className="all-cards">
        <div className="eight-first-img">
          <img
            alt="Gojek"
            src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-food.svg"
          />
        </div>

        <ul className="eight-cards">
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gofood-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gomed-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gomart-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/goshop-horizontal-logo-white.svg"
            />
          </li>
        </ul>

        <div className="eight-food">
          <h3>Food &amp; Shopping</h3>
          <p>
            Fill your cart with food, electronics, medicines, and more. Without
            stepping out!
          </p>
        </div>

        <div className="eight-second eight-first-img">
          <img
            alt="Gojek"
            src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-payments.svg"
          />
        </div>

        <ul className="second-card">
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gopay-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gotagihan-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gopaylater-horizontal-logo-white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gosure-horizontal-logo-white.svg"
            />
          </li>
        </ul>

        <div className="eight-third eight-first-img">
          <img
            alt="Gojek"
            src="https://lelogama.go-jek.com/prime/upload/image/product-intro-card-bg-business.svg"
          />
        </div>

        <ul className="third-card">
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/product-gobiz.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Midtrans_Horizontal_white.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Moka_Horizontal_inverse.svg"
            />
          </li>
          <li>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/GoStore_Horizontal_white.svg"
            />
          </li>
        </ul>
      </div>
      <ul class="cards-details">
        <li className="li-2">Payments</li>

        <li className="li-3">Food &amp; Shopping</li>

        <li className="li-4">Business</li>
      </ul>
      <div>
        <div className="gojek-loyalty">
          <h2>
            Gojek Loyalty<br></br> Program
          </h2>
          <p>Make more transactions, get more rewards!</p>
          <div>
            <a href="https://www.gojek.com/goclub/">
              <button>View more!</button>
            </a>
          </div>
        </div>
        <div className="gojek-loyalty-img">
          <img
            alt="Gojek Indonesia"
            src="https://lelogama.go-jek.com/prime/upload/image/home-spot-image-goclub.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default GoLoyalty;
