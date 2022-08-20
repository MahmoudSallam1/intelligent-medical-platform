import React, { useState, useEffect } from "react";
import MainNav from "./components/MainNav/MainNav";
import HeroArea from "./components/HeroArea/HeroArea";

import OurFeatures from "./components/OurFeatures/OurFeatures";
import WhyUs from "./components/WhyUs/WhyUs";
import FAQ from "./components/FAQs/FAQ";
import OurTeam from "./components/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import cookies from "js-cookie";

import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";

import { languages } from "../../localization";

export default function HomePage() {
  const [language, setLanguage] = useState(cookies.get("i18next") || "en");

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <div className="language-container">
        {" "}
        <Select
          labelId="language"
          id="language"
          value={language}
          onChange={handleChange}
        >
          {languages.map((lang) => (
            <MenuItem key={lang.code} value={lang.code}>
              {lang.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <MainNav />
      <HeroArea />
      {/* <WhyUs /> */}
      <OurFeatures />
      {/* <OurTeam /> */}
      {/* <FAQ /> */}
      <Footer />
    </>
  );
}
