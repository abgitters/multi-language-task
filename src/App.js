import "./App.css";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AppBarComp from "./components/AppBarComp";

function App() {
  i18n.use(initReactI18next).init({
    resources: {
      // English Language
      en: {
        translation: require("./language/en.json"),
      },
      // Hindi Language
      hi: {
        translation: require("./language/hi.json"),
      },
      // Marathi Language
      mr: {
        translation: require("./language/mr.json"),
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <AppBarComp />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </I18nextProvider>
  );
}

export default App;
