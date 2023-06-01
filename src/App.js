import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "./com/Layout";

export function MyComponent() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("");
  const [direction, setDirection] = useState("");
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };
  const DashboardEng = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="d-flex flex-column">
            <button
              className="btn btn-primary w-25"
              onClick={() => {
                handleLanguageChange("en");
                setDirection("ltr");
                document.documentElement.setAttribute("dir", "ltr");
              }}
            >
              English
            </button>

            <button
              className="btn btn-success w-25"
              onClick={() => {
                handleLanguageChange("ur");
                setDirection("rtl");
                document.documentElement.setAttribute("dir", "rtl");
              }}
            >
              Urdu
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="p-5">
                <h1>{t("Hello.heading")}</h1>
                <h1 className="title">{t("Hello.title")}</h1>
                <div className="description">
                  {t("Hello.description.part1")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <DashboardEng />
    </>
  );
}

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      {/* <MyComponent /> */}

      <Layout />
    </Suspense>
  );
}
