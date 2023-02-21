import React, { useState } from "react";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const initialValue = {
    Email: "",
    password: "",
  };

  const history = useHistory();

  const [formValues, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  const [user, setUser] = useState(formValues);

  useEffect(() => {
    const data = localStorage.getItem(formValues.Email);
    if (data) {
      setUser({
        ...JSON.parse(data),
        ...formValues,
      });
    }
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    let error = validate(formValues);

    setFormErrors(error);

    if (Object.keys(error).length > 0) {
      e.preventDefault();
    } else {
      localStorage.setItem(formValues.Email, JSON.stringify(user));
      history.push(`/Dashboard?email=${formValues.Email}`);
    }
  };

  const validate = (values) => {
    const errors = {};
    const validEmails = ["ali@gmail.com", "issa@gmail.com"];
    if (!values.Email) {
      errors.Email = t("Email is required !");
    } else if (!validEmails.includes(values.Email)) {
      errors.Email = t("There is no user of this email!");
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
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="body-login"
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
      <div className="login-container" id="container">
        <div className="form-container sign-in-container">
          <form
            className="login-form"
            id="form"
            action="#"
            onSubmit={handleSubmit}
          >
            <h1 className="login-h1">{t("SIGN IN ")}</h1>
            <div className="social-container">
              <a
                href="https://www.facebook.com/MontyMobile/"
                className="social login-a"
              >
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a
                href="https://twitter.com/monty_mobile_"
                className="social login-a"
              >
                <MDBIcon fab icon="twitter" />
              </a>
            </div>

            <input
              className="login-input"
              type="email"
              id="email"
              placeholder={t("login-email")}
              name="Email"
              value={formValues.Email}
              onChange={handleChange}
            />
            <p className="error">{formErrors.Email}</p>
            <div className="login-show">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder={t("login-password")}
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />

              <FontAwesomeIcon
                className="login-eye"
                onClick={() => setShowPassword(!showPassword)}
                icon={showPassword ? faEye : faEyeSlash}
              />
            </div>

            <p className="error">{formErrors.password}</p>
            <br />
            <button className="login-btn">{t("Login")}</button>
            <Link to={"/register"} className="link-register">
              {t("Register !")}
            </Link>
          </form>
        </div>
        <div className=" login-overlay-container">
          <div className="login-overlay">
            <div className="login-overlay-panel login-overlay-right">
              <h1 className="login-h1">{t("HTML CSS Login Form")}</h1>
              <p className="login-p">{t("login-p")}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Login;
