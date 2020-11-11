import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";
import  "./firebase/firebase";

console.log("FIREBASE_API_KEY",process.env.FIREBASE_API_KEY)
console.log("FIREBASE_AUTH_DOMAIN",process.env.FIREBASE_AUTH_DOMAIN)
console.log("FIREBASE_DATABASE_URL",process.env.FIREBASE_DATABASE_URL)
console.log("FIREBASE_PROJECT_ID",process.env.FIREBASE_PROJECT_ID)
console.log("FIREBASE_STORAGE_BUCKET",process.env.FIREBASE_STORAGE_BUCKET)
console.log("FIREBASE_MESSAGING_SENDER_ID",process.env.FIREBASE_MESSAGING_SENDER_ID)
console.log("FIREBASE_APP_ID", process.env.FIREBASE_APP_ID)

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
