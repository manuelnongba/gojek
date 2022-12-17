import React from "react";
import "./Driver.css";
import Header from "./Header";
import "./Products.css";

const Driver = () => {
  return (
    <div>
      <section className="driver-one">
        <Header />
        <h1>
          Help millions of Gojek<br></br> customers solve<br></br> their daily
          frictions
        </h1>
        <p>
          Millions of driver partners have increased their income with Gojek.
          Now is your turn!
        </p>
      </section>
      <section className="driver-two">
        <h2>What drives you?</h2>
        <div className="driver-card product-goride">
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/goride-horizontal-logo-white.svg"
            />
            <p>Ride your customers on safe and steady two-wheelers.</p>
          </div>

          <a href="../driver/cara-daftar-goride/">
            <button>Know more</button>
          </a>
        </div>
        <div className="driver-card product-gocar">
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gocar-horizontal-logo-white.svg"
            />
            <p>Drive the four-wheeler for comfortable trips.</p>
          </div>

          <a href="../driver/cara-daftar-gocar/">
            <button>Know more</button>
          </a>
        </div>
        <div className="driver-card product-gosend">
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gosend-horizontal-logo-white.svg"
            />
            <p> Deliver packages safely and quickly.</p>
          </div>

          <a href="../driver/cara-daftar-gosend/">
            <button>Know more</button>
          </a>
        </div>
        <div className="driver-card product-gobluebird">
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/gobox-horizontal-logo-white.svg"
            />
            <p>Drive the four-wheeler for comfortable trips.</p>
          </div>

          <a href="../driver/cara-daftar-gobox/">
            <button>Know more</button>
          </a>
        </div>
      </section>
      <section className="driver-three">
        <h2>Why Gojek?</h2>
        <p className="header-p">We've got you a bundle of benefits!</p>
        <div className="service-card-one product-goride">
          <div>
            <h3>A million partners</h3>
            <p>
              We're the largest transportation service provider in Indonesia,
              with millions of driver partners.
            </p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Kenapa_Gabung_1-_punya_jutaan_mitra.svg"
            />
          </div>
        </div>
        <div className="service-card-two product-gocar">
          <div>
            <h3>Health insurance</h3>
            <p>
              You and your family have the opportunity to get health insurance
              coverage at an affordable premium.
            </p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Kenapa_Gabung_2-_asuransi.svg"
            />
          </div>
        </div>
        <div className="service-card-three product-gosend">
          <div>
            <h3>Special promo </h3>
            <p>Enjoy special discounts on fuel, grocery, and more.</p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Kenapa_Gabung_3-_Promo_spesial.svg"
            />
          </div>
        </div>
        <div className="service-card-four product-gobluebird">
          <div>
            <h3>Advance earnings policy</h3>
            <p>Meet your unexpected expenses without a hassle.</p>
          </div>
          <div>
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/Kenapa_Gabung_4-_cairin_penghasilan.svg"
            />
          </div>
        </div>
        <div className="story-from-partners">
          <h2>Stories from our partners</h2>
        </div>
        <div className="product-goride">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/aXTUdy0Svy0?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;autoplay=0&amp;loop=0&amp;mute=0&amp;playsinline=1"
            className="iframe"
          ></iframe>
          <div>
            <h3 className="quote">
              "After joining Gojek, I was able to support and provide for my
              family. I think Gojek is a company that can help a lot of people."
            </h3>
            <p>- Pipit - Driver partner</p>
          </div>
        </div>
        <div className="video-two">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/jk5fmzDQ4Uw?enablejsapi=1&version=3&playerapiid=ytplayer&controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0&playsinline=1"
            className="iframe"
          ></iframe>
          <div>
            <h3 className="quote">
              "After 1-2 months of joining as a GoCar partner, thank God I can
              collect 5 million in cash."
            </h3>
            <p>- Rakha - Driver partner</p>
          </div>
        </div>
        <div className="video-three">
          <iframe
            title="Video Detail"
            src="https://www.youtube.com/embed/flQAFAn7tQg?enablejsapi=1&version=3&playerapiid=ytplayer&controls=1&showinfo=0&rel=0&autoplay=0&loop=0&mute=0&playsinline=1"
            className="iframe"
          ></iframe>
          <div>
            <h3 className="quote">
              "Since joining Gojek, our life as a family has gradually
              improved."
            </h3>
            <p>- Venty - Driver partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Driver;
