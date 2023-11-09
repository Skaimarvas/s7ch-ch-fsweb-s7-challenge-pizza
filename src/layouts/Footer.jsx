import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import footlogo from "../Assets/logo-footer.svg";
import icon1 from "../Assets/adv-aseets/icons/icon-1.png";
import icon2 from "../Assets/adv-aseets/icons/icon-2.png";
import icon3 from "../Assets/adv-aseets/icons/icon-3.png";
import ins1 from "../Assets/adv-aseets/insta/li-0.png";
import ins2 from "../Assets/adv-aseets/insta/li-1.png";
import ins3 from "../Assets/adv-aseets/insta/li-2.png";
import ins4 from "../Assets/adv-aseets/insta/li-3.png";
import ins5 from "../Assets/adv-aseets/insta/li-4.png";
import ins6 from "../Assets/adv-aseets/insta/li-5.png";

const Footer = () => {
  return (
    <div className="flex flex-col footer-main">
      <div className="flex flex-wrap justify-between ">
        <div className="flex flex-wrap justify-between ">
          <div className="flex flex-col items-baseline justify-between px-14 mx-auto">
            <div>
              <img src={footlogo} />
            </div>
            <div className="flex">
              <img src={icon1} /> <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div className="flex">
              {" "}
              <img src={icon2} /> <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="flex">
              {" "}
              <img src={icon3} /> <p>+90 216 123 45 67</p>
            </div>
          </div>
          <div className="flex flex-col items-baseline justify-between px-14 mx-auto">
            <div>
              <h4 className="insh4 mb-4">Sıccacık Yemekler</h4>
            </div>
            <div>
              <p>Terminal Pizza</p>
            </div>
            <div>
              <p>5 Kişilik Hackathlon Pizza</p>
            </div>
            <div>
              <p>useEffect Tavuklu Pizza</p>
            </div>
            <div>
              <p>Beyaz Console Frosty</p>
            </div>
            <div>
              <p>Testler Geçti Mutlu Burger</p>
            </div>

            <div>
              <p>Position Absolute Acı Burger</p>
            </div>
          </div>
        </div>
        <div className="instagram px-14 ">
          <div className="footer-contents">
            <h4 className="insh4 mb-4">Instagram</h4>
            <div className="flex flex-wrap justify-center mx-auto">
              <div>
                <img src={ins1} />
              </div>
              <div>
                <img src={ins2} />
              </div>
              <div>
                <img src={ins3} />
              </div>
              <div>
                <img src={ins4} />
              </div>
              <div>
                <img src={ins5} />
              </div>
              <div>
                <img src={ins6} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between copy-social my-9">
        <div className="copyright px-14"> @2023 Teknolojik Yemekler </div>
        <div className="scl px-14">
          {" "}
          <FontAwesomeIcon icon={fab.faTwitter} size="2x" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
