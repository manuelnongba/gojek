import React from "react";
import Header from "./Header";
import "./Careers.css";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <section className="career-one">
          <Header />
          <h1>
            Hard to get through.<br></br> Harder to leave.
          </h1>
          <form>
            <input type="text" />
            <select>
              <option>Indonesia</option>
              <option>Thailand</option>
              <option>India</option>
              <option>Vietnam</option>
              <option>Phiipines</option>
              <option>Singapore</option>
            </select>
            <select>
              <option>All Cities</option>
            </select>
            <button>Find jobs</button>
            <a href="https://career.gojek.com/job/" className="open-roles">
              View all open roles<i></i>
            </a>
          </form>
        </section>
        <section className="career-two">
          <h1>We stand tall on our 10 values</h1>
          <div className="collaborate">
            <img
              src="https://lelogama.go-jek.com/prime/upload/image/colaborate.png"
              alt="collaborate"
            />
            <h2>Collaborate with compassion</h2>
            <ul>
              <li>Be a pleasure to work with</li>
              <li>Support others in areas beyond your scope</li>
              <li>Consider how your actions affect others</li>
            </ul>
          </div>

          <div className="critic">
            <img
              src="https://lelogama.go-jek.com/prime/upload/image/citicism_is_a_gift.png"
              alt="collaborate"
            />
            <h2>Criticism is a gift</h2>
            <ul>
              <li>Actively seek feedback</li>
              <li>Proactively give helpful feedback</li>
              <li>Genuinely act upon feedback given</li>
            </ul>
          </div>
        </section>
        <section className="career-three">
          <iframe
            src="https://www.youtube.com/embed/Ayb4neiGq8Q?enablejsapi=1&version=3&controls=1&rel=0&autoplay=0&loop=1&mute=0&playsinline=1"
            title="Career-Vid"
          ></iframe>
        </section>
        <section className="career-four">
          <h1>Perks of being in good company</h1>
          <div className="career-cards">
            <div className="service-card-one product-goride">
              <div>
                <h3>Parental insurance</h3>
                <p>Subsidised health support for your parents.</p>
              </div>
              <div>
                <img
                  alt="Gojek"
                  src="https://lelogama.go-jek.com/prime/upload/image/Employee_-_Parental_insurance_1.svg"
                />
              </div>
            </div>
            <div className="service-card-two product-gocar">
              <div>
                <h3>We share the bill</h3>
                <p>Health, fitness,mobile, internet, and more.</p>
              </div>
              <div>
                <img
                  alt="Gojek"
                  src="https://lelogama.go-jek.com/prime/upload/image/Employee_-_We_share_the_bill_2.svg"
                />
              </div>
            </div>
            <div className="service-card-three product-gosend">
              <div>
                <h3>Refer & earn</h3>
                <p>Picking someone's brain is always a bonus.</p>
              </div>
              <div>
                <img
                  alt="Gojek"
                  src="https://lelogama.go-jek.com/prime/upload/image/Employee_-_We_talk_about__mental_health_3.svg"
                />
              </div>
            </div>
            <div className="service-card-four product-gobluebird">
              <div>
                <h3>We talk about mental health</h3>
                <p>Free counselling for employees & families.</p>
              </div>
              <div>
                <img
                  alt="Gojek"
                  src="https://lelogama.go-jek.com/prime/upload/image/Employee_-_Refer__earn_4.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="career-five">
          <h1>There's never a dull moment</h1>
        </section>
        <section className="career-six">
          <span>#winningmoments</span>
          <h2>When 12 engineers managed 1 million drivers.</h2>
          <p>
            Back in 2015, Gojek's first-ever engineering team realised their
            potential, and impact.
          </p>
          <a href="https://blog.gojekengineering.com/how-go-jek-manages-1-million-drivers-with-12-engineers-part-1-978af9ccfd32">
            Know more
          </a>
        </section>
      </div>
    </motion.div>
  );
};

export default Careers;
