import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';
// CSS & Styling
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./scss/index.scss";
import './i18n'

// App was imported at the end because it must be imported after the styles, if you put it above the styles import then some components in the MDBReact will fail
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App  />, document.getElementById("root"));
// serviceWorker.unregister();
registerServiceWorker()
