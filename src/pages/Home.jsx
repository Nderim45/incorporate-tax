import { React, useState } from "react";
import Navbar from "../components/shared/Navbar/Navbar";
import FeaturesCard from "../components/pages/Home/FeaturesCard";
import Footer from "../components/shared/Footer/Footer";
import ImageSection from "../components/pages/Home/ImageSection";
import Info from "../components/pages/Home/Info";
import VideoInfo from "../components/pages/Home/VideoInfo";
import Icons from "../components/pages/Home/Icons";
import DiscoverMore from "../components/pages/Home/DiscoverMore";
import Banner from "../components/pages/Home/Banner";
import Slider from "../components/pages/Home/Slider";
import Header from "../components/pages/Home/Header";
import { dataLocalStorage } from "../localStorage";
import * as locales from "../translate/locale";
import { IntlProvider } from "react-intl";
import translate from "../translate/translate";

const Home = () => {
  const [locale, setLocale] = useState(
    dataLocalStorage.getLocale() || locales.enUS
  );

  return (
    <IntlProvider
      locale={locale}
      formats={{ number: "en" }}
      messages={translate[locale]}
    >
      <div className="home">
        <Navbar />
        <Header />
        <FeaturesCard />
        <VideoInfo />
        <ImageSection />
        <Info />
        <Icons />
        <DiscoverMore />
        <Banner />
        <Slider />
        <Footer locale={locale} setLocale={setLocale} />
      </div>
    </IntlProvider>
  );
};

export default Home;
