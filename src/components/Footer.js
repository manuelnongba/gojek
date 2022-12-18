import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img
            alt="gojek logo white"
            src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
          />
        </div>
        <div className="landing-footer-summary">
          <div>
            <p>Company</p>
            <ul>
              <li>
                <a href="https://www.gojek.com/about/">About</a>
              </li>

              <li>
                <a href="products">Products</a>
              </li>

              <li class="gtm-footer-blog">
                <a href="https://www.gojek.com/blog/">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Join with us</p>
            <ul>
              <li>
                <a href="driver">Driver Partners</a>
              </li>

              <li>
                <a href="merchant">Merchant Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Careers</p>
            <ul>
              <li>
                <a href="https://career.gojek.com/students-graduates/">
                  Student
                </a>
              </li>

              <li>
                <a href="employee">Professional</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Get in touch</p>
            <ul>
              <li>
                <a href="https://www.gojek.com/help/">Help Center</a>
              </li>

              <li>
                <a href="https://www.gojek.com/our-location/">Our Location</a>
              </li>
            </ul>
          </div>

          {/* <hr /> */}
          <div>
            <div className="footer-connect">
              <p>Connect with us</p>
              <ul>
                <li>
                  <a href="https://web.facebook.com/gojekindonesia">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329059/fb_dgdvmi.png"
                        alt="fb"
                      />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/gojekindonesia">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329093/twitter_haiyas.png"
                        alt="twitter"
                      />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/gojekindonesia/">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329114/instagram_v8h7cg.png"
                        alt="ig"
                      />
                    </i>
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/channel/UCmlKSK0OKn_B3oPwElW4n5w">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329133/yt_fhvvsa.png"
                        alt="yt"
                      />
                    </i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="download-the-app">
              <p>Download the app</p>
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.gojek.app&amp;af_force_deeplink=true&amp;pid=Go-Jek_Web&amp;is_retargeting=false&amp;af_click_lookback=7d&amp;utm_content=Play_Store_Android&amp;utm_source=Go-Jek_Web&amp;utm_medium=Button&amp;af_adset=Play_Store_Android&amp;af_ad=Play_Store_Android&amp;utm_campaign=Website_Footer_Download_Button_Google_Play_Store&amp;af_channel=Button&amp;c=Website_Footer_Download_Button_Google_Play_Store">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329204/google_hnx07b.png"
                        alt="google"
                      />
                    </i>
                    {/* <span>Play store</span> */}
                  </a>
                </li>

                <li>
                  <a href="https://apps.apple.com/id/app/gojek/id944875099?af_force_deeplink=true&amp;pid=Go-Jek_Web&amp;is_retargeting=false&amp;af_click_lookback=7d&amp;utm_content=Apple_App_Store&amp;utm_source=Go-Jek_Web&amp;utm_medium=Button&amp;af_adset=Apple_App_Store&amp;af_ad=Apple_App_Store&amp;utm_campaign=Website_Footer_Download_Button_Apple_App_Store&amp;af_channel=Button&amp;c=Website_Footer_Download_Button_Apple_App_Store">
                    <i>
                      <img
                        src="https://res.cloudinary.com/drxwuqu3v/image/upload/v1671329206/apple_bvjjjh.png"
                        alt="apple"
                      />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <div>
            <div className="footer-privacy">
              <div>
                <ul>
                  <li>
                    <a href="https://www.gojek.com/privacy-policies/">
                      Privacy Notice
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gojek.com/data-provider-attribution/">
                      Data Attribution
                    </a>
                  </li>
                </ul>
              </div>

              <ul>
                <li>
                  <a href="https://www.gojek.com/terms-and-condition/gojek/">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <div className="footer-location">
              <select>
                <option>
                  <span>Indonesia</span>
                </option>
                <option>
                  <span>Singapore</span>
                </option>
                <option>
                  <span>Vietnam</span>
                </option>
                <option>
                  <span>Thailand</span>
                </option>
              </select>
            </div>
          </div>
          <div className="footer-lang">
            <select>
              <option>
                <span>English</span>
              </option>
              <option>
                <span>Bahasa Indonesia</span>
              </option>
            </select>
          </div>
        </div>

        <div className="copyright">
          <p>
            © 2022 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk.
            Registered in the Directorate General of Intellectual Property of
            the Republic of Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
