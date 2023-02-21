import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";
const FormPage = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };

  function handleLang(e) {
    changeLanguage(e.target.value);
  }
  return (
    <motion.div
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-body"
    >
      <div className="container-contact">
        <div className="contact-box">
          <div className="left">
            <h3 className="contact-h3"> {t("Monty Mobile")}</h3>
            <p className="contact-p"> {t("Let's Get in Touch")}</p>
          </div>
          <div className="right">
            <h2 className="contact-h2">{t("Contact Us")}</h2>
            <input type="text" className="field" placeholder={t("Your Name")} />
            <input
              type="text"
              className="field"
              placeholder={t("Your Email")}
            />
            <input
              type="text"
              className="field"
              placeholder={t("Your Number")}
            />
            <textarea placeholder={t("Message")} className="field"></textarea>
            <button className="btn">{t("Send")}</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FormPage;
