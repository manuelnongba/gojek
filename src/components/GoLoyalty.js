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
      <div>
        <div>
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
        </div>

        <div className="eight-food">
          <h3>Food &amp; Shopping</h3>
          <p>
            Fill your cart with food, electronics, medicines, and more. Without
            stepping out!
          </p>
        </div>
      </div>
      <ul class="cards-details">
        <li className="li-1">Transport &amp; Logistics</li>

        <li className="li-2">Payments</li>

        <li className="li-3">Food &amp; Shopping</li>

        <li className="li-4">Business</li>

        <li className="li-5">Entertainment</li>
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
