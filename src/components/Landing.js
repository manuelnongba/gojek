import React, { useEffect, useRef } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import "./Landing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoLoyalty from "./GoLoyalty";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const Landing = () => {
  const slides = [
    { url: "./game.png", title: "game" },
    { url: "./arts.png", title: "" },
    { url: "./mask.png", title: "j3k" },
    { url: "./j3k.png", title: "j3k" },
  ];

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  // const ref4 = useRef();
  const slider = useRef();

  const slides2 = [ref1, ref2, ref3];

  useEffect(() => {
    slides2.forEach((s, i) => {
      s.current.style.transform = `translateX(${105 * i}%)`;
      console.log(s);
    });
  }, [slides2]);

  useEffect(() => {
    slider.current.style.transform = `scale(0.65) translateX(-1200px) translateY(-600px)`;
    slider.current.style.overflow = `visible`;
  }, []);

  let curSlide = 0;
  const maxSlide = slides2.length;

  const goNext = () => {
    if (curSlide === maxSlide - 2) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slides2.forEach((s, i) => {
      s.current.style.transform = `translateX(${105 * (i - curSlide)}%)`;
    });
  };

  const goPrev = () => {
    if (curSlide === 0) {
      curSlide = maxSlide - 2;
    } else {
      curSlide--;
    }
    slides2.forEach((s, i) => {
      s.current.style.transform = `translateX(${105 * (i - curSlide)}%)`;
    });
  };
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <div className="main">
      <section className="landing-first">
        <Header />
        <h1>
          3 countries.<br></br>20+ products.<br></br> 1 leading<br></br>
          on-demand platform.
        </h1>
        <video src="./gojekad.mp4" autoPlay loop muted />
      </section>
      <section className="landing-second">
        <h1>
          We're Gojek,<br></br> the drivers of change
        </h1>
        <a href="./employee">Explore careers</a>
      </section>
      <section className="landing-third">
        <div className="landing-third-sub">
          <div className="landing-fortune">
            <h3>Fortune's favorite</h3>
            <p>
              Southeast Asia's only company to make it to Fortune's 'Change the
              World' list twice.
            </p>
          </div>
          <div className="landing-contribution">
            <h3>$7.1 b contribution</h3>
            <p>Value added to the Indonesian economy in 2019.</p>
          </div>
          <div className="landing-greener">
            <h3>Tonne times greener</h3>
            <p>Saved 11.3 tonnes of plastic in cutlery since October 2020.</p>
          </div>
          <div className="landing-merchants">
            <h3>Digitising merchants</h3>
            <p>
              Resulted in 80% growth in number of GoFood merchants during
              pandemic.
            </p>
          </div>
        </div>
        <div>
          <h1>We scale like a dream</h1>
          <button>Scale with us</button>
        </div>
        <div className="landing-third-sec-sub">
          <div className="landing-190">
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/170_mil.png"
            />
            <div>
              <h3>
                190<br></br> million+
              </h3>
              <p>app downloads since 2015</p>
            </div>
          </div>
          <div className="landing-2">
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/2_million.png"
            />
            <div>
              <h3>2 million+</h3>
              <p>driver partners</p>
            </div>
          </div>
          <div className="landing-900">
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/50_million.png"
            />
            <div>
              <h3>900,000+</h3>
              <p>GoFood merchants</p>
            </div>
          </div>
          <div className="landing-jump">
            <img
              alt="Gojek"
              src="https://lelogama.go-jek.com/prime/upload/image/12x_growth.png"
            />

            <div>
              <h3>2.448x</h3>
              <p>jump in downloads from 2015 to 2020</p>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-fourth">
        <div>
          <div className="images">
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className="know-more">
          <a href="https://www.gojek.com/j3k/">
            <button>Know more!</button>
          </a>
        </div>
      </section>
      <div className="landing-fifth">
        <h2>Join the ride</h2>
      </div>
      <section className="landing-six">
        <div className="landing-six-img1">
          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/employees.svg"
              alt="Gojek Indonesia"
              src="https://lelogama.go-jek.com/prime/upload/image/employees.svg"
            />
          </div>
          <div>
            <h3>Employees</h3>
            <p>
              Behind Southeast Asia's only hyper-growth startup are some
              billion-dollar brains, doing what they do best.
            </p>
            <a href="./employee">
              Join as an employee <i></i>
            </a>
          </div>
        </div>
        <div className="landing-six-img2">
          <div>
            <img
              alt="Gojek Indonesia"
              src="https://lelogama.go-jek.com/prime/upload/image/driver_partner.svg"
            />
          </div>
          <div>
            <h3>Driver partners</h3>
            <p>
              We're home to 2 million+ driver partners, who enjoy a bundle of
              health and financial benefits.
            </p>
            <a href="./driver">
              Join as a driver partner <i></i>
            </a>
          </div>
        </div>
        <div className="landing-six-img3">
          <div>
            <div>
              <img
                alt="Gojek Indonesia"
                src="https://lelogama.go-jek.com/prime/upload/image/merchant_partner.svg"
              />
            </div>
          </div>
          <div>
            <h3>Merchants</h3>
            <p>
              We empower 500,000+ merchants with cutting-edge technologies that
              help them multiply reach and sales.{" "}
            </p>
            <a href="./merchant">
              Join as a merchant <i></i>
            </a>
          </div>
        </div>
      </section>
      <section className="landing-seven">
        <h2>Perks of being in good company</h2>
        <div className="free-couns">
          <h3>Free counselling</h3>
          <p>
            We talk about mental health. This one's for you <br></br> and your
            family.
          </p>

          <div>
            <a href="./employee/#the-perks-of-being-in-good-company">
              <button>View all</button>
            </a>
          </div>
        </div>
        <div ref={slider}>
          <div className="free-counselling" ref={ref1}>
            <h3>Free counselling</h3>
            <p>
              We talk about mental health. This one's for you <br></br> and your
              family.
            </p>

            <div>
              <a href="./employee/#the-perks-of-being-in-good-company">
                <button>View all</button>
              </a>
            </div>
          </div>
          <div className="parental-insurance" ref={ref2}>
            <h3>Parental insurance</h3>
            <p>Subsidised health support for your parents.</p>

            <div>
              <a href="./employee/#the-perks-of-being-in-good-company">
                <button>View all</button>
              </a>
            </div>
          </div>
          <div className="wellness" ref={ref3}>
            <h3>Wellness benefits</h3>
            <p>We share the bills - health, mobile, internet and more.</p>
            <div>
              <a href="./employee/#the-perks-of-being-in-good-company">
                <button>View all</button>
              </a>
            </div>
          </div>
          {/* <div className="fly" ref={ref4}>
            <h3>Parental insurance</h3>
            <p>Subsidised health support for your parents.</p>
            <div>
              <a href="./employee/#the-perks-of-being-in-good-company">
                <button>View all</button>
              </a>
            </div>
          </div> */}
        </div>
        <button class="slider__btn slider__btn--left" onClick={goPrev}>
          &larr;
        </button>
        <button class="slider__btn slider__btn--right" onClick={goNext}>
          &rarr;
        </button>
      </section>
      <GoLoyalty />
      <section className="landing-nine">
        <div className="nine-top">
          <h2>
            We've crossed<br></br>boundaries
          </h2>

          <a href="https://newsroom.gojek.com/">
            <button>Enter newsroom</button>
          </a>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div className="thailand">
                  <h3>Thailand</h3>
                  <p>
                    With close to 40,000 GoFood merchants, we're one of the
                    fastest growing food delivery platforms in Thailand.
                  </p>
                </div>
                {/* 
                <div>
                  <div className="indonesia">
                    <h3>Indonesia</h3>
                    <p>
                      In 2019, Gojek added $7.1 billion to the Indonesian
                      economy, transforming employment and quality of life.
                    </p>
                  </div>
                </div>

                <div className="singapore">
                  <h3>Singapore</h3>
                  <p>
                    Clocking 30 million trips in its first year of operation - a
                    threefold increase in just six months - Gojek is scaling
                    like a raging bull.
                  </p>
                </div>

                <div className="vietnam">
                  <h3>Vietnam</h3>
                  <p>
                    Over 80,000 GoFood merchants and 150,000 driver partners
                    help millions of our customers eat, move, repeat!
                  </p>
                </div> */}
              </div>
              {/* <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div> */}
            </div>

            <a href="https://newsroom.gojek.com/">
              <button className="second-newsroom">Enter newsroom</button>
            </a>
            {/* <button>
              <i></i>
            </button>
            <button>
              <i></i>
            </button> */}
          </div>
          <div>
            <div>
              <img
                alt="We've crossed boundaries"
                src="https://lelogama.go-jek.com/prime/upload/image/general-impact-cloud.svg"
              />
            </div>

            <div>
              <img
                className="globe"
                alt="We've crossed boundaries"
                src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="landing-ten">
        <div>
          <div>
            <h2>
              Good to Go? <br></br>Download <br></br>the Gojek app today!
            </h2>
            <div>
              <a
                href="https://gojek.onelink.me/2351932542?af_force_deeplink=true&amp;pid=Go-Jek_Web&amp;is_retargeting=false&amp;af_click_lookback=7d&amp;c=Website_Footer_Download_Button_Apple_App_Store&amp;af_adset=Apple_App_Store&amp;af_ad=Apple_App_Store&amp;af_channel=Button&amp;af_dp=gojek://home&amp;af_web_dp=https://apps.apple.com/id/app/gojek/id944875099&amp;utm_source=Go-Jek_Web&amp;utm_medium=Button&amp;utm_campaign=Website_Footer_Download_Button_Apple_App_Store&amp;utm_content=Apple_App_Store"
                rel="noreferrer"
                target="_blank"
                className="appstore"
              >
                <i></i> App store
              </a>
              <a
                href="https://gojek.onelink.me/2351932542?af_force_deeplink=true&amp;pid=Go-Jek_Web&amp;is_retargeting=false&amp;af_click_lookback=7d&amp;c=Website_Footer_Download_Button_Google_Play_Store&amp;af_adset=Play_Store_Android&amp;af_ad=Play_Store_Android&amp;af_channel=Button&amp;af_dp=gojek://home&amp;af_web_dp=https://play.google.com/store/apps/details?id=com.gojek.app&amp;utm_source=Go-Jek_Web&amp;utm_medium=Button&amp;utm_campaign=Website_Footer_Download_Button_Google_Play_Store&amp;utm_content=Play_Store_Android"
                rel="noreferrer"
                target="_blank"
                className="playstore"
              >
                <i></i> Play store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
