import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";
import { logo } from "images";
import { Button } from "components/_common";
import { Field } from "components/_common";
import validator from "validator";
import Autentication from "utils/auth/autentication";

const Register = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confPassword: "",
    uname: "",
  });
  const [error, setError] = useState({ email: false, password: false });
  const [registered, setRegistered] = useState(false);

  const handleClick = async () => {
    //calculate if the input are valid
    let emptyEmail = validator.isEmpty(form.email);
    let emptyPass = validator.isEmpty(form.password);
    let notEmail = !validator.isEmail(form.email);
    let emptyUser = validator.isEmpty(form.uname);
    let passwordsEquals = form.password === form.confPassword;

    if (emptyEmail || emptyPass || notEmail || emptyUser || !passwordsEquals) {
      setError({
        uname: emptyUser ? "the field cannot be empty" : false,
        email: emptyEmail
          ? "the field cannot be empty"
          : notEmail
          ? "Not is an email"
          : false,
        password: emptyPass ? "the field cannot be empty" : false,
        confPassword: passwordsEquals ? false : "The password arent equal",
      });
    } else {
      let auth = Autentication.getInstance();
      let e = await auth.createAcountEmailPass(
        form.email,
        form.password,
        form.uname
      );
      setRegistered(true);
      console.log(e);
      // if (e.emailE || e.passE) {
      //   setError({ email: e.emailE, password: e.passE });
      // } else {
      //   props.history.push("/dashboard");
      // }
    }
  };

  const handleForm = (input, target) => {
    setError({
      ...error,
      [target]: false,
    });
    setForm({
      ...form,
      [target]: input,
    });
  };

  if (registered) {
    return <p>was sended a confirmatiojn to your email</p>;
  }

  return (
    <div className="login">
      <div className="login__head">
        <img src={logo} alt="" />
      </div>
      <h1>Sign in</h1>

      <div className="form-container shadow">
        <form action="">
          <Field
            id="email"
            placeholder="Email"
            error={error.email}
            defaultValue={form.email}
            handle={handleForm}
          >
            <i className="material-icons">email</i>
          </Field>
          <Field
            id="uname"
            placeholder="Username"
            error={error.uname}
            defaultValue={form.uname}
            handle={handleForm}
          >
            <i className="material-icons">person</i>
          </Field>
          <Field
            id="password"
            type="Password"
            placeholder="password"
            error={error.password}
            defaultValue={form.password}
            handle={handleForm}
          >
            <i className="material-icons">lock</i>
          </Field>
          <Field
            id="confPassword"
            type="Password"
            placeholder="Confirm password"
            error={error.confPassword}
            defaultValue={form.confPassword}
            handle={handleForm}
          >
            <i className="material-icons">lock</i>
          </Field>
        </form>
        <Button color="primary" click={handleClick}>
          Register
        </Button>
      </div>

      <div className="form-bottom">
        <p className="c-white">Do you have an account? </p>
        <Link to="/login">
          <p className="c-second">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
