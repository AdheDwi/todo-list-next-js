import React, { useState } from "react";
import Cookies from "universal-cookie";

import { useRouter } from "next/router";
import {
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Login = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const setLogin = () => {
    if (email.length < 1) {
      setEmailErr("Email tidak boleh kosong");
    }
    if (password.length < 1) {
      setPasswordErr("Password tidak boleh kosong");
    }
    if (email.length > 0 && password.length > 0) {
      setEmailErr("");
      setPasswordErr("");
      cookies.set("userId", email, { path: "/" });
      setTimeout(() => {
        router.push("/");
      }, 400);
    }
  };

  const responseFacebook = (response) => {
    if (response) {
      cookies.set("userId", response.email, { path: "/" });
      setTimeout(() => {
        if (cookies.get("userId")) {
          router.push("/");
        }
      }, 400);
    }
  };

  const responseGoogle = (response) => {
    if (response) {
      cookies.set("userId", response.profileObj.email, { path: "/" });
      setTimeout(() => {
        if (cookies.get("userId")) {
          router.push("/");
        }
      }, 400);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="card-login">
        <h2 className="title-login">Login</h2>
        <FormGroup className="form-login">
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            invalid={emailErr.length > 0}
          />
          {emailErr.length > 0 && <FormFeedback>{emailErr}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-login">
          <Label for="password">Password</Label>
          <Input
            invalid={passwordErr.length > 0}
            type="password"
            name="password"
            id="password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErr.length > 0 && <FormFeedback>{passwordErr}</FormFeedback>}
        </FormGroup>
        <Button
          className="mt-3 button-primary"
          block
          onClick={() => setLogin()}
        >
          Submit
        </Button>

        <p className="mt-4 mb-3">atau</p>
        <div className="facebook-button-wrap">
          <FacebookLogin
            cssClass="btn btn-block button-facebook"
            appId="435810364331854"
            autoLoad={false}
            fields="name,email,picture"
            callback={(response) => responseFacebook(response)}
            disableMobileRedirect={true}
          />
        </div>

        <GoogleLogin
          className="btn btn-block"
          clientId="345717660785-veksvdaa8g7q3jt4p6oakmjeq7q9p3cr.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Card>
    </div>
  );
};

export default Login;
