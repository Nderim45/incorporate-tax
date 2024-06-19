import { React } from "react";
import "./footer.scss";
import { FooterData } from "./footerData";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { languages } from "../../../translate/languages.js";
import LanguageElement from "./languagesElement";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dataLocalStorage } from "../../../localStorage";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import Flags from "country-flag-icons/react/3x2";

let langs = [];
for (let key in languages) langs.push(languages[key]);

const Footer = (props) => {
  let selectedLanguage = languages[props.locale];

  return (
    <div className="footer">
      <div className="title">
        <div className="company-name">
          <div className="logo" />
          <h4>IncorporateTax</h4>
        </div>
        <p>
          <FormattedMessage id="Footer.Description" />
        </p>
      </div>
      <div className="mid-section">
        {FooterData.map((item) => (
          <MegaMenu key={item.category} {...item} />
        ))}
      </div>
      <div className="contact-info">
        <div className="subscribe">
          <p>
            <FormattedMessage id="Footer.Subscribe.p" />
          </p>
          <div className="input-div">
            <FiMail />
            <input className="input" placeholder="Enter your email"></input>
            <button className="button">Subscribe</button>
          </div>
        </div>
        <div className="contact-us">
          <div className="telephone">
            <p>
              <FormattedMessage id="Footer.ContactUs.p" />
            </p>
            <p>
              <BsFillTelephoneFill /> +1 763 6462 153
            </p>
          </div>
          <div className="button">
            <Link to="/">
              <FormattedMessage id="Footer.ContactUs.Link" />
            </Link>
          </div>
        </div>
      </div>
      <div className="last-section">
        <div className="left-div">
          <Link to="/">
            <FormattedMessage id="Footer.Privatcy" />
          </Link>
          <FaCircle />
          <Link to="/">
            <FormattedMessage id="Footer.CookiePolicy" />
          </Link>
          <FaCircle />
          <Link to="/">
            <FormattedMessage id="Footer.TermsConditions" />
          </Link>
        </div>
        <p>
          <FormattedMessage id="Footer.Copyright" />
        </p>
        <div className="language-change">
          <div className="lang-dropdown">
            {langs
              .sort((a, b) => (a.language > b.language ? 1 : -1))
              .map((language) => {
                return (
                  <LanguageElement
                    key={language.locale}
                    {...language}
                    handleLanguageSwitch={() => {
                      props.setLocale(language.locale);
                      dataLocalStorage.setLocale(language.locale);
                    }}
                  />
                );
              })}
          </div>
          <div className="selected-language">
            <div
              className="image"
              style={{ content: `url(${selectedLanguage.img})` }}
            />
            {selectedLanguage.language}
            <MdKeyboardArrowDown />
          </div>
          {/* <Select
            options={options}
            menuPlacement="top"
            defaultValue={{ value: "english", label: [english, " English"] }}
          /> */}
        </div>
      </div>
    </div>
  );
};

const MegaMenu = (props) => {
  return (
    <div className="footer-link">
      <h6>{props.category}</h6>
      {props.links.map((item) => (
        <Link to={item.to}>{item.link}</Link>
      ))}
    </div>
  );
};

export default Footer;
