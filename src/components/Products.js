import React from "react";
import GoLoyalty from "./GoLoyalty";
import Header from "./Header";
import "./Products.css";

const Products = () => {
  return (
    <div>
      <main>
        <section className="product-one">
          <Header />
          <h1>
            We build products <br></br>that nations run on
          </h1>
        </section>
        <section className="product-two">
          <GoLoyalty />
        </section>
        <section className="product product-three">
          <div className="three-heading">
            <h2>Transport &amp; Logistics</h2>

            <p>
              With 2 million+ driver partners, we've kinda done 13,000 trips{" "}
              <br></br> between the earth and the moon.
            </p>
          </div>

          <div className="product-card product-goride">
            <div>
              <img
                data-src="https://lelogama.go-jek.com/prime/upload/image/goride-horizontal-logo-solid.svg"
                alt="Gojek Goride"
                src="https://lelogama.go-jek.com/prime/upload/image/goride-horizontal-logo-solid.svg"
              />
            </div>

            <p>Your two-wheeler taxi, aka Ojek</p>

            <div>
              <a href="http://gojek.com/goride">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gocar">
            <div>
              <img
                alt="Gojek gocar"
                src="https://lelogama.go-jek.com/prime/upload/image/gocar-horizontal-logo-solid.svg"
              />
            </div>

            <p>Sit back. Sleep. Snore. Be comfortable.</p>

            <div>
              <a href="http://gojek.com/gocar">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gosend">
            <div>
              <img
                alt="Gojek gosend"
                src="https://lelogama.go-jek.com/prime/upload/image/gosend-horizontal-logo-solid.svg"
              />
            </div>

            <p>Get your package delivered within hours.</p>

            <div>
              <a href="http://gojek.com/gosend" class="btn btn-nude">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobluebird">
            <div>
              <img
                alt="Gojek gobluebird"
                src="https://lelogama.go-jek.com/prime/upload/image/gobluebird-horizontal-logo-solid.svg"
              />
            </div>

            <p>Ride exclusive with the Bluebird.</p>

            <div>
              <a href="http://gojek.com/gobluebird">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobox">
            <div>
              <img
                alt="Gojek gobox"
                src="https://lelogama.go-jek.com/prime/upload/image/gobox-horizontal-logo-solid.svg"
              />
            </div>

            <p>Moving out? We'll do the weights.</p>

            <div>
              <a href="http://gojek.com/gobox">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="transport-lo">
            <img
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Transport__Logistics.svg"
            />
          </div>
        </section>

        <section className="product product-four">
          <div className="three-heading">
            <h2>Payments</h2>

            <p>
              One of the largest fintech companies in Southeast Asia, we make
              transactions reliable and cashless.
            </p>
          </div>

          <div className="product-card product-goride">
            <div>
              <img
                alt="Gojek Gopay"
                src="https://lelogama.go-jek.com/prime/upload/image/gopay-horizontal-logo-solid.svg"
              />
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Drop the wallet, go cashless.
            </p>

            <div>
              <a href="http://gojek.com/gopay">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gocar">
            <div>
              <img
                alt="Gojek gotagihan"
                src="https://lelogama.go-jek.com/prime/upload/image/gotagihan-horizontal-logo-solid.svg"
              />
            </div>

            <p>Pay bills - quick &amp; simple.</p>

            <div>
              <a href="http://gojek.com/gotagihan">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gosend">
            <div>
              <img
                alt="Gojek paylater"
                src="https://lelogama.go-jek.com/prime/upload/image/gopaylater-horizontal-logo-solid.svg"
              />
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Exactly. Order now, PayLater.
            </p>

            <div>
              <a href="http://gojek.com/paylater">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobluebird">
            <div>
              <picture>
                <img
                  alt="Gojek gogive"
                  src="https://lelogama.go-jek.com/prime/upload/image/gogive-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p>Make donations, touch lives.</p>

            <div>
              <a href="http://gojek.com/gogive">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobox">
            <div>
              <img
                alt="Gojek gosure"
                src="https://lelogama.go-jek.com/prime/upload/image/gosure-horizontal-logo-solid.svg"
              />
            </div>

            <p>Insurance cover for things you value.</p>

            <div>
              <a href="http://gojek.com/gosure">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="transport-lo">
            <img
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Payment.svg"
            />
          </div>
        </section>

        <section className="product product-five">
          <div className="three-heading">
            <h2>Food &amp; Shopping</h2>

            <p>
              Fill your cart with food, groceries, medicines, electronics and
              more. Without stepping out.
            </p>
          </div>

          <div className="product-card product-goride">
            <div>
              <img
                alt="Gojek Gofood"
                src="https://lelogama.go-jek.com/prime/upload/image/gofood-horizontal-logo-solid.svg"
              />
            </div>

            <p>Hungry? Order in.</p>

            <div>
              <a
                href="http://gojek.com/gofood"
                class="btn btn-nude"
                data-gtm="2021_products_gofood_knowmore"
              >
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gocar">
            <div>
              <img
                alt="Gojek gomart"
                src="https://lelogama.go-jek.com/prime/upload/image/gomart-horizontal-logo-solid.svg"
              />
            </div>

            <p>Groceries delivered from stores nearby.</p>

            <div>
              <a href="http://gojek.com/gomart">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gosend">
            <div>
              <img
                alt="Gojek gomed"
                src="https://lelogama.go-jek.com/prime/upload/image/gomed-horizontal-logo-solid.svg"
              />
            </div>

            <p>Chat with doctors, order in medicines.</p>

            <div>
              <a href="http://gojek.com/gomed">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobluebird">
            <div>
              <img
                alt="Gojek goshop"
                src="https://lelogama.go-jek.com/prime/upload/image/goshop-horizontal-logo-solid.svg"
              />
            </div>

            <p>Buy anything from anywhere</p>

            <div>
              <a href="http://gojek.com/goshop">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="transport-lo">
            <img
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Food_and_Shopping.svg"
            />
          </div>
        </section>

        <section className="product product-six">
          <div className="three-heading">
            <h2>Business</h2>

            <p>Manage your restaurants, run ads, create promos, and do more.</p>
          </div>

          <div className="product-card product-goride">
            <div>
              <img
                alt="Gojek Gobiz"
                src="https://lelogama.go-jek.com/prime/upload/image/gobizmerchant_logo.svg"
              />
            </div>

            <p>A Gojek app to run and grow your business.</p>

            <div>
              <a href="http://gojek.com/gobiz">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gocar">
            <div>
              <img
                alt="Gojek Midtrans"
                src="https://lelogama.go-jek.com/prime/upload/image/midtrans_color.svg"
              />
            </div>

            <p>Accept payments and make payouts easily</p>

            <div>
              <a href="https://www.gojek.com/midtrans/">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gosend">
            <div>
              <img
                alt="Gojek Moka"
                src="https://lelogama.go-jek.com/prime/upload/image/moka_color.svg"
              />
            </div>

            <p>Cloud based POS that made selling easy</p>

            <div class="mt-auto">
              <a href="https://www.gojek.com/moka/">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="product-card product-gobluebird">
            <div>
              <img
                alt="Gojek Selly"
                src="https://lelogama.go-jek.com/prime/upload/image/selly_color.svg"
              />
            </div>

            <p>Keyboard for online sellers</p>

            <div>
              <a href="https://www.gojek.com/selly/" class="btn btn-nude">
                Know more <i></i>
              </a>
            </div>
          </div>

          <div className="transport-lo">
            <img
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Business.svg"
            />
          </div>
        </section>
        {/* <section>
          <div>
            <div>
              <div>
                <div>
                  <h3>Transport &amp; Logistics</h3>
                  <p>
                    We've kinda done 13,000 trips between the earth and the
                    moon.
                  </p>
                </div>

                <div>
                  <h3>Payments</h3>
                  <p>
                    From deals to donations, we make transactions easy,
                    reliable, and cashless.
                  </p>
                </div>

                <div>
                  <h3>Food &amp; Shopping</h3>
                  <p>
                    Fill your cart with food, electronics, medicines, and more.
                    Without stepping out!
                  </p>
                </div>

                <div>
                  <h3>Entertainment</h3>
                  <p>
                    Binge-watch your favorite series, book tickets, play games,
                    have a good time!
                  </p>
                </div>

                <div>
                  <h3>Business</h3>
                  <p>
                    Manage your restaurants, run ads, create promos, and do
                    more.
                  </p>
                </div>

                <div>
                  <h3>Transport &amp; Logistics</h3>
                  <p>
                    We've kinda done 13,000 trips between the earth and the
                    moon.
                  </p>
                </div>

                <div>
                  <h3>Payments</h3>
                  <p>
                    From deals to donations, we make transactions easy,
                    reliable, and cashless.
                  </p>
                </div>

                <div>
                  <h3>Food &amp; Shopping</h3>
                  <p>
                    Fill your cart with food, electronics, medicines, and more.
                    Without stepping out!
                  </p>
                </div>

                <div>
                  <h3>Entertainment</h3>
                  <p>
                    Binge-watch your favorite series, book tickets, play games,
                    have a good time!
                  </p>
                </div>

                <div>
                  <h3>Business</h3>
                  <p>
                    Manage your restaurants, run ads, create promos, and do
                    more.
                  </p>
                </div>

                <div>
                  <h3>Transport &amp; Logistics</h3>
                  <p>
                    We've kinda done 13,000 trips between the earth and the
                    moon.
                  </p>
                </div>

                <div>
                  <h3>Payments</h3>
                  <p>
                    From deals to donations, we make transactions easy,
                    reliable, and cashless.
                  </p>
                </div>

                <div>
                  <h3>Business</h3>
                  <p>
                    Manage your restaurants, run ads, create promos, and do
                    more.
                  </p>
                </div>

                <div>
                  <h3>Entertainment</h3>
                  <p>
                    Binge-watch your favorite series, book tickets, play games,
                    have a good time!
                  </p>
                </div>

                <div>
                  <div>
                    <ul>
                      <li>Transport &amp; Logistics</li>

                      <li>Payments</li>

                      <li>Food &amp; Shopping</li>

                      <li>Business</li>

                      <li>Entertainment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <div>
                  <h2>Gojek Loyalty Program</h2>
                  <p>Make more transactions, get more rewards!</p>

                  <div>
                    <a href="https://www.gojek.com/goclub/">
                      <button>View more!</button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <picture>
                      <img
                        data-src="https://lelogama.go-jek.com/prime/upload/image/home-spot-image-goclub.svg"
                        alt="Gojek Indonesia"
                        src="https://lelogama.go-jek.com/prime/upload/image/home-spot-image-goclub.svg"
                      />
                    </picture>
                    <div class="u-lazy__placeholder"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h2>Transport &amp; Logistics</h2>

            <p>
              With 2 million+ driver partners, we've kinda done 13,000 trips{" "}
              <br></br> between the earth and the moon.
            </p>
          </div>

          <div>
            <button>
              <i></i>
            </button>
            <button>
              <i></i>
            </button>
          </div>

          <div>
            slide <span class="current">1 to 4</span> of 5
          </div>

          <div>
            <div>
              <picture>
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/goride-horizontal-logo-solid.svg"
                  alt="Gojek Goride"
                  src="https://lelogama.go-jek.com/prime/upload/image/goride-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p>Your two-wheeler taxi, aka Ojek</p>

            <div class="mt-auto">
              <a href="http://gojek.com/goride">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gocar-horizontal-logo-solid.svg"
                  alt="Gojek gocar"
                  src="https://lelogama.go-jek.com/prime/upload/image/gocar-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Sit back. Sleep. Snore. Be comfortable.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gocar">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gosend-horizontal-logo-solid.svg"
                  alt="Gojek gosend"
                  src="https://lelogama.go-jek.com/prime/upload/image/gosend-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Get your package delivered within hours.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gosend" class="btn btn-nude">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gobluebird-horizontal-logo-solid.svg"
                  alt="Gojek gobluebird"
                  src="https://lelogama.go-jek.com/prime/upload/image/gobluebird-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Ride exclusive with the Bluebird.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gobluebird">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>
          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gobox-horizontal-logo-solid.svg"
                  alt="Gojek gobox"
                  src="https://lelogama.go-jek.com/prime/upload/image/gobox-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Moving out? We'll do the weights.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gobox">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/Transport__Logistics.svg"
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Transport__Logistics.svg"
            />
          </div>
        </section>

        <section>
          <div class="mb-13 md:mb-20 lg:mb-16 xl:mb-20">
            <h2>Payments</h2>

            <p class="c-link-sheet-card__subhead">
              One of the largest fintech companies in Southeast Asia, we make
              transactions reliable and cashless.
            </p>
          </div>

          <div
            class="tns-controls"
            aria-label="Carousel Navigation"
            tabindex="0"
          >
            <button>
              <i class="pi pi-back_ios align-middle"></i>
            </button>
            <button>
              <i class="pi pi-next_ios align-middle"></i>
            </button>
          </div>

          <div>
            slide <span class="current">1 to 4</span> of 7
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gopay-horizontal-logo-solid.svg"
                  alt="Gojek Gopay"
                  src="https://lelogama.go-jek.com/prime/upload/image/gopay-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Drop the wallet, go cashless.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gopay">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gotagihan-horizontal-logo-solid.svg"
                  alt="Gojek gotagihan"
                  src="https://lelogama.go-jek.com/prime/upload/image/gotagihan-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Pay bills - quick &amp; simple.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gotagihan">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gopaylater-horizontal-logo-solid.svg"
                  alt="Gojek paylater"
                  src="https://lelogama.go-jek.com/prime/upload/image/gopaylater-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Exactly. Order now, PayLater.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/paylater">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gogive-horizontal-logo-solid.svg"
                  alt="Gojek gogive"
                  src="https://lelogama.go-jek.com/prime/upload/image/gogive-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Make donations, touch lives.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gogive">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gosure-horizontal-logo-solid.svg"
                  alt="Gojek gosure"
                  src="https://lelogama.go-jek.com/prime/upload/image/gosure-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Insurance cover for things you value.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gosure">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture>
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/goinvestasi-test.svg"
                  alt="Gojek goinvestasi"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Invest smart, save better.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/goinvestasi">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>
          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture>
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gocorp-horizontal-logo-solid.svg"
                  alt="Gojek gocorp"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Easier to manage your employee's transportation cost
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gocorp">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>
          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/Payment.svg"
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Payment.svg"
            />
          </div>
        </section>

        <section>
          <div class="mb-13 md:mb-20 lg:mb-16 xl:mb-20">
            <h2>Food &amp; Shopping</h2>

            <p class="c-link-sheet-card__subhead">
              Fill your cart with food, groceries, medicines, electronics and
              more. Without stepping out.
            </p>
          </div>

          <div>
            <button>
              <i class="pi pi-back_ios align-middle"></i>
            </button>
            <button>
              <i class="pi pi-next_ios align-middle"></i>
            </button>
          </div>
          <div>
            slide <span class="current">1 to 4</span> of 4
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gofood-horizontal-logo-solid.svg"
                  alt="Gojek Gofood"
                  src="https://lelogama.go-jek.com/prime/upload/image/gofood-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Hungry? Order in.
            </p>

            <div class="mt-auto">
              <a
                href="http://gojek.com/gofood"
                class="btn btn-nude"
                data-gtm="2021_products_gofood_knowmore"
              >
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gomart-horizontal-logo-solid.svg"
                  alt="Gojek gomart"
                  src="https://lelogama.go-jek.com/prime/upload/image/gomart-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Groceries delivered from stores nearby.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gomart">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gomed-horizontal-logo-solid.svg"
                  alt="Gojek gomed"
                  src="https://lelogama.go-jek.com/prime/upload/image/gomed-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Chat with doctors, order in medicines.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gomed">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/goshop-horizontal-logo-solid.svg"
                  alt="Gojek goshop"
                  src="https://lelogama.go-jek.com/prime/upload/image/goshop-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Buy anything from anywhere
            </p>

            <div class="mt-auto">
              <a
                href="http://gojek.com/goshop"
                class="btn btn-nude"
                data-gtm="2021_products_goshop_knowmore"
              >
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/Food_and_Shopping.svg"
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Food_and_Shopping.svg"
            />
          </div>
        </section>

        <section>
          <div class="mb-13 md:mb-20 lg:mb-16 xl:mb-20">
            <h2>Entertainment</h2>

            <p class="c-link-sheet-card__subhead">
              Binge-watch your favorite series, book tickets for movies and
              events, play games, have a good time!
            </p>
          </div>

          <div
            class="tns-controls"
            aria-label="Carousel Navigation"
            tabindex="0"
          >
            <button>
              <i class="pi pi-back_ios align-middle"></i>
            </button>
            <button>
              <i class="pi pi-next_ios align-middle"></i>
            </button>
          </div>

          <div>
            slide <span class="current">1 to 2</span> of 2
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/goplay-horizontal-logo-solid.svg"
                  alt="Gojek Goplay"
                  src="https://lelogama.go-jek.com/prime/upload/image/goplay-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Movies, series, and live events.
            </p>

            <div class="mt-auto">
              <a
                href="http://gojek.com/goplay"
                class="btn btn-nude"
                data-gtm="2021_products_goplay_knowmore"
              >
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gotix-horizontal-logo-solid.svg"
                  alt="Gojek gotix"
                  src="https://lelogama.go-jek.com/prime/upload/image/gotix-horizontal-logo-solid.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Book your show. Skip the queue.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gotix">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/Entertainment.svg"
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Entertainment.svg"
            />
          </div>
        </section>

        <section>
          <div class="mb-13 md:mb-20 lg:mb-16 xl:mb-20">
            <h2>Business</h2>

            <p class="c-link-sheet-card__subhead">
              Manage your restaurants, run ads, create promos, and do more.
            </p>
          </div>

          <div>
            <button>
              <i class="pi pi-back_ios align-middle"></i>
            </button>
            <button>
              <i class="pi pi-next_ios align-middle"></i>
            </button>
          </div>
          <div>
            slide <span class="current">1 to 4</span> of 4
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/gobizmerchant_logo.svg"
                  alt="Gojek Gobiz"
                  src="https://lelogama.go-jek.com/prime/upload/image/gobizmerchant_logo.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              A Gojek app to run and grow your business.
            </p>

            <div class="mt-auto">
              <a href="http://gojek.com/gobiz">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/midtrans_color.svg"
                  alt="Gojek Midtrans"
                  src="https://lelogama.go-jek.com/prime/upload/image/midtrans_color.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Accept payments and make payouts easily
            </p>

            <div class="mt-auto">
              <a href="https://www.gojek.com/midtrans/">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/moka_color.svg"
                  alt="Gojek Moka"
                  src="https://lelogama.go-jek.com/prime/upload/image/moka_color.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Cloud based POS that made selling easy
            </p>

            <div class="mt-auto">
              <a href="https://www.gojek.com/moka/">
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>
          <div class="h-full flex flex-col rounded-r32 shadow-high mx-auto p-7 xl:p-10 bg-white">
            <div class="c-link-sheet-card__logo">
              <picture class="lazy loaded">
                <img
                  data-src="https://lelogama.go-jek.com/prime/upload/image/selly_color.svg"
                  alt="Gojek Selly"
                  src="https://lelogama.go-jek.com/prime/upload/image/selly_color.svg"
                />
              </picture>
            </div>

            <p class="mb-6 text-size_8x leading-height_24x">
              Keyboard for online sellers
            </p>

            <div class="mt-auto">
              <a
                href="https://www.gojek.com/selly/"
                class="btn btn-nude"
                data-gtm="2021_products_selly_knowmore"
              >
                Know more <i class="pi pi-next align-middle"></i>
              </a>
            </div>
          </div>

          <div>
            <img
              data-src="https://lelogama.go-jek.com/prime/upload/image/Business.svg"
              alt=""
              src="https://lelogama.go-jek.com/prime/upload/image/Business.svg"
            />
          </div>
        </section>

        <div>
          <a href="/#">
            <i class="pi pi-cancel font-bold text-size_8x text-dark"></i>
          </a>
          <div class="container mx-auto flex justify-between items-center">
            <div class="flex">
              <div class="c-flybanner__logo mr-2 sm:mr-6">
                <img
                  src="https://lelogama.go-jek.com/prime/upload/image/logo-gojek.svg"
                  alt="Gojek Indonesia"
                />
              </div>
              <div>
                <div id="c-flybanner__title">Gojek App</div>
                <p>One app for every need.</p>
              </div>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gojek.onelink.me/2351932542?af_banner=true&amp;amp;pid=Go-Jek_Web&amp;amp;c=WebToAppBanner&amp;amp;af_adset=bottom-banner&amp;amp;af_ad=%2Fsg%2F&amp;amp;af_dp=gojek%3A%2F%2Fhome"
              >
                Open
              </a>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};
export default Products;
