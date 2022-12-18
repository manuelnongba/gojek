import React from "react";
import "./Driver.css";
import Header from "./Header";
import "./Products.css";
import "./Merchant.css";

const Merchant = () => {
  return (
    <div>
      <section className="driver-one merchant-one">
        <Header />
        <h1>
          Maximize your reach,<br></br> minimize your cost
        </h1>
        <p>Enjoy various benefits by becoming a Gojek merchant partner</p>
      </section>
      <section className="driver-two merchant-two">
        <h2>What's your forte?</h2>
        <div className="merchant-card merchant-food">
          <div>
            <p className="topic">Food delivery</p>
            <p>
              Reach more potential customers and get easy delivery services with
              GoFood.
            </p>
          </div>

          <a href="../driver/cara-daftar-goride/">
            <button>Know more</button>
          </a>
        </div>
        <div className="merchant-card merchant-cash">
          <div>
            <p className="topic">Cashless payment</p>
            <p>
              An easier and faster payment system, without the hassle of
              preparing for change.
            </p>
          </div>

          <a href="../driver/cara-daftar-gocar/">
            <button>Know more</button>
          </a>
        </div>
        <div className="merchant-card merchant-sale">
          <div>
            <p className="topic">Point of sale</p>
            <p>Manage sales reports easily with an integrated online system.</p>
          </div>

          <a href="../driver/cara-daftar-gosend/">
            <button>Know more</button>
          </a>
        </div>
      </section>
      <section className="driver-three">
        <h2>Why Gojek?</h2>
        <p className="header-p">
          Manage business or launch products for the bigger market with ease.
        </p>
        <div className="service-card-one product-goride">
          <div>
            <h3>900k+ merchant partners</h3>
            <p>Partner with us and expand across Indonesia .</p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Mitra_usaha.svg"
            />
          </div>
        </div>
        <div className="service-card-two product-gocar">
          <div>
            <h3>170+ million customers</h3>
            <p>Make your business known to the Gojek customer base.</p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/170_juta_pengguna_gojek.svg"
            />
          </div>
        </div>
        <div className="service-card-three product-gosend">
          <div>
            <h3>Create your promo </h3>
            <p>
              Make or select GoFood and GoPay promos to multiply your sales!
            </p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Buat_Promo_Sendiri.svg"
            />
          </div>
        </div>
        <div className="service-card-four product-gobluebird">
          <div>
            <h3>Integrated system</h3>
            <p>
              Control customer orders and payments from one integrated system.
            </p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Sistem_Terintegrasi.svg"
            />
          </div>
        </div>
        <div className="story-from-partners">
          <h2>Hear our Partners’ story</h2>
        </div>
        <div className="product-goride">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/hIJrzSlVsyA?enablejsapi=1&version=3&playerapiid=ytplayer&controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0&playsinline=1"
          ></iframe>
          <div>
            <h3 className="quote">
              "In the past, I had to send goods myself. Now GoBiz can help me in
              many ways."
            </h3>
            <p>- Yusak Wiradi - Merchant partner</p>
          </div>
        </div>
        <div className="video-two">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/cOMPKU-wA-0?enablejsapi=1&version=3&playerapiid=ytplayer&controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0&playsinline=1"
            className="iframe"
          ></iframe>
          <div>
            <h3 className="quote">
              "In the past, our income for each outlet was tens of millions.
              Now, it has reached millions."
            </h3>
            <p>- Iskandar - Merchant partner</p>
          </div>
        </div>
        <div className="video-three">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/q6h-KJDHh0w?enablejsapi=1&version=3&playerapiid=ytplayer&controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0&playsinline=1"
            className="iframe"
          ></iframe>
          <div>
            <h3 className="quote">
              "My favorite (feature) is the open and close restaurant setting as
              our customers are able to k"
            </h3>
            <p>- Nita - Merchant partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Merchant;
