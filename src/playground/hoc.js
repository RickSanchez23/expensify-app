import React from "react";
import ReactDOM from "react-dom";

console.log("hoc is running");

const authComponent = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>this is info</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const LoginScreen = (props) => (
  <div>
    <h1>Login</h1>
    <p>this is {props.info}</p>
  </div>
);

const Login = authComponent(LoginScreen);

ReactDOM.render(<Login info={"hello"} />, document.getElementById("app"));
