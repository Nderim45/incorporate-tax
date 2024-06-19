import { useEffect, useState } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { IntlProvider } from "react-intl";
import translate from "./translate/translate";
import * as locales from "./translate/locale";
import { dataLocalStorage } from "./localStorage";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1350 });
  }, []);

  const [locale, setLocale] = useState(
    dataLocalStorage.getLocale() || locales.sqAL
  );

  return (
    <BrowserRouter>
      <IntlProvider
        locale={locale}
        formats={{ number: "en" }}
        messages={translate[locale]}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Routes>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
