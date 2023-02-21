import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
function Register() {
  const initialValue = {
    fullName: "",
    Email: "",
    password: "",
  };

  const [formValues, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    let error = validate(formValues);
    setFormErrors(error);
    if (Object.keys(error).length > 0) {
      e.preventDefault();
    }
  };
  useEffect(() => {}, [formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.fullName) {
      errors.fullName = t("FullName is required !");
    }
    if (!values.Email) {
      errors.Email = t("Email is required !");
    } else if (!regex.test(values.Email)) {
      errors.Email = t("This is not a valid email format !");
    }
    if (!values.password) {
      errors.password = t("Password is required !");
    } else if (values.password.length < 4) {
      errors.password = t("Password must been more than  4 characters");
    }
    return errors;
  };
  const [showPassword, setShowPassword] = useState(false);
  
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
      className="body-register"
    >
      <select
        className="select-lang"
        onClick={handleLang}
        name="cars"
        id="cars"
      >
       <option value="" className="switcher">Switche</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="sp">Spanish</option>
        <option value="ar" className="arabic">
          Arabic
        </option>
      </select>
      <div className="register-container" id="container">
        <div className="register-form-container sign-up-container">
          <form
            action="/"
            className="register-form"
            id="form"
            onSubmit={handleSubmit}
          >
            <h1 className="register-h1">{t("SIGN UP")}</h1>

            <input
              className="register-input"
              id="fullName"
              type="name"
              name="fullName"
              placeholder={t("register-fullname")}
              value={formValues.fullName}
              onChange={handleChange}
            />
            <p className="error">{formErrors.fullName}</p>
            <input
              className="register-input"
              id="Email"
              type="email"
              name="Email"
              placeholder={t("register-email")}
              value={formValues.Email}
              onChange={handleChange}
            />
            <p className="error">{formErrors.Email}</p>
            <div className="register-show">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder={t("register-password")}
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />

              <FontAwesomeIcon
                className="register-eye"
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? faEye : faEyeSlash}
              />
            </div>
            <p className="error">{formErrors.password}</p>

            <button className="register-btn" id="submit" type="submit">
              {t("Register")}
            </button>
            <p>
              {t("question")}
              <br /> <Link to="/">{t("Login Now !")} </Link>
            </p>
          </form>
        </div>
        <div className="register-overlay-container">
          <div className="register-overlay">
            <div className="register-overlay-panel register-overlay-right">
              <h1 className="register-h1">{t("HTML CSS Register Form")}</h1>
              <p className="register-p">{t("register-p")}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
