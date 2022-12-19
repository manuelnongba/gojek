import React from "react";
import GoLoyalty from "./GoLoyalty";
import Header from "./Header";
import "./Products.css";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
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

            {/* <div className="product-card product-gobox">
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
          </div> */}

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
                <img
                  alt="Gojek gogive"
                  src="https://lelogama.go-jek.com/prime/upload/image/gogive-horizontal-logo-solid.svg"
                />
              </div>

              <p>Make donations, touch lives.</p>

              <div>
                <a href="http://gojek.com/gogive">
                  Know more <i class="pi pi-next align-middle"></i>
                </a>
              </div>
            </div>

            {/* <div className="product-card product-gobox">
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
          </div> */}

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
              <h2>Entertainment</h2>

              <p>
                Binge-watch your favorite series, book tickets for movies and
                events, play games, have a good time!
              </p>
            </div>

            <div className="product-card product-goride">
              <div>
                <img
                  alt="Gojek Gobiz"
                  src="https://lelogama.go-jek.com/prime/upload/image/goplay-horizontal-logo-solid.svg"
                />
              </div>

              <p>Movies, series, and live events.</p>

              <div>
                <a href="https://www.gojek.com/goplay/">
                  Know more <i></i>
                </a>
              </div>
            </div>

            <div className="product-card product-gocar">
              <div>
                <img
                  alt="Gojek Midtrans"
                  src="https://lelogama.go-jek.com/prime/upload/image/gotix-horizontal-logo-solid.svg"
                />
              </div>

              <p>Book your show. Skip the queue.</p>

              <div>
                <a href="http://gojek.com/gotix">
                  Know more <i></i>
                </a>
              </div>
            </div>

            <div className="transport-lo">
              <img
                alt=""
                src="https://lelogama.go-jek.com/prime/upload/image/Entertainment.svg"
              />
            </div>
          </section>
          <section className="product product-seven">
            <div className="three-heading">
              <h2>Business</h2>

              <p>
                Manage your restaurants, run ads, create promos, and do more.
              </p>
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
        </main>
      </div>
    </motion.div>
  );
};
export default Products;
