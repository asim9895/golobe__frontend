import { Col, Row, Carousel, Flex } from "antd";
import {
  ButtonContainer,
  Container,
  InputErrorMessage,
  RedirectLink,
  TextInputContainer,
  TextInputPasswordContainer,
} from "../../styles/global.styled";

import { authStyles } from "./auth.style";
import * as Yup from "yup";
import { Formik, FormikValues } from "formik";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { login_carousel_banners } from "../../data/auth";
import { useState } from "react";

// login form validationn schema
const CodeGenerateSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
});

const CodeVerifiedSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  verification_code: Yup.string().required("Verification Code is required"),
});

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  verification_code: Yup.string().required("Verification Code is required"),
  password: Yup.string().required("Password is required"),
  confirm_password: Yup.string().required("Confirm Password is required"),
});

const ForgotPassword = () => {
  const [code_generated, setcode_generated] = useState(false);
  const [code_verified, setcode_verified] = useState(false);
  // on login submit button click
  const onResetPassword = (values: FormikValues) => {
    console.log(values);
  };

  const generate_verification_code = () => {
    console.log("ca");
    setcode_generated(true);
  };

  const verify_verification_code = () => {
    console.log("dfd");
    setcode_verified(true);
  };

  return (
    <Container>
      <Row>
        <Col md={24} sm={24} lg={12} xl={12} style={{ marginTop: 20 }}>
          {/* Header and info */}
          <h2 style={authStyles.header}>Forgot Password?</h2>
          <span style={authStyles.info}>
            Don't worry, happens to all of us, Enter your email below to reset
            your password.
          </span>

          {/* Forgot Password Form */}
          <section style={{ padding: 20, marginLeft: -20 }}>
            <Formik
              initialValues={{
                email: "",
                verification_code: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={
                !code_generated
                  ? CodeGenerateSchema
                  : !code_verified
                  ? CodeVerifiedSchema
                  : ResetPasswordSchema
              }
              onSubmit={
                !code_generated
                  ? generate_verification_code
                  : !code_verified
                  ? verify_verification_code
                  : onResetPassword
              }
            >
              {(formik) => {
                const {
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                } = formik;
                return (
                  <form onSubmit={handleSubmit}>
                    <TextInputContainer
                      placeholder="Enter Email Address"
                      prefix={
                        <MailOutlined
                          style={{
                            marginRight: 10,
                            borderRightWidth: 1,
                            marginTop: 1,
                          }}
                        />
                      }
                      type="text"
                      width={100}
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-testid="email"
                      autoComplete="off"
                      style={{ marginTop: 20 }}
                    />
                    {errors.email && touched.email && (
                      <InputErrorMessage style={{ marginTop: 5 }}>
                        {errors.email}
                      </InputErrorMessage>
                    )}
                    {code_generated && (
                      <>
                        <TextInputContainer
                          placeholder="Enter Verification Code"
                          prefix={
                            <NumberOutlined
                              style={{
                                marginRight: 10,
                                borderRightWidth: 1,
                                marginTop: 1,
                              }}
                            />
                          }
                          type="text"
                          width={100}
                          name="verification_code"
                          value={values.verification_code}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          data-testid="verification_code"
                          autoComplete="off"
                          style={{ marginTop: 20 }}
                        />
                        {errors.verification_code &&
                          touched.verification_code && (
                            <InputErrorMessage style={{ marginTop: 5 }}>
                              {errors.verification_code}
                            </InputErrorMessage>
                          )}

                        {code_verified && (
                          <>
                            <TextInputPasswordContainer
                              placeholder="Enter Password"
                              type="password"
                              prefix={
                                <LockOutlined
                                  style={{
                                    marginRight: 10,
                                    borderRightWidth: 1,
                                    marginTop: 1,
                                  }}
                                />
                              }
                              width={100}
                              autoComplete="false"
                              name="password"
                              data-testid="password"
                              iconRender={(visible: any) =>
                                visible ? (
                                  <EyeTwoTone />
                                ) : (
                                  <EyeInvisibleOutlined />
                                )
                              }
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={{
                                marginTop: 20,
                              }}
                            />
                            {errors.password && touched.password && (
                              <InputErrorMessage style={{ marginTop: 5 }}>
                                {errors.password}
                              </InputErrorMessage>
                            )}

                            <TextInputPasswordContainer
                              placeholder="Repeat Password"
                              type="password"
                              prefix={
                                <LockOutlined
                                  style={{
                                    marginRight: 10,
                                    borderRightWidth: 1,
                                    marginTop: 1,
                                  }}
                                />
                              }
                              width={100}
                              autoComplete="false"
                              name="confirm_password"
                              iconRender={(visible: any) =>
                                visible ? (
                                  <EyeTwoTone />
                                ) : (
                                  <EyeInvisibleOutlined />
                                )
                              }
                              value={values.confirm_password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              style={{
                                marginTop: 20,
                              }}
                            />
                            {errors.confirm_password &&
                              touched.confirm_password && (
                                <InputErrorMessage style={{ marginTop: 5 }}>
                                  {errors.confirm_password}
                                </InputErrorMessage>
                              )}
                          </>
                        )}
                      </>
                    )}

                    <ButtonContainer style={{ marginTop: 20 }} type="submit">
                      {!code_generated
                        ? "Submit"
                        : !code_verified
                        ? "Verify Code"
                        : "Reset Password"}
                    </ButtonContainer>
                  </form>
                );
              }}
            </Formik>
          </section>

          <p style={authStyles.redirectPath}>
            Remember Password?{" "}
            <RedirectLink to="/login" style={{ textAlign: "center" }}>
              Login
            </RedirectLink>
          </p>
        </Col>
        <Col md={0} sm={0} lg={12} xl={12}>
          <Flex justify="center" align="center">
            <Carousel
              autoplay
              style={{
                backgroundColor: "white",
                width: 600,
                borderRadius: 30,
              }}
            >
              {login_carousel_banners?.map((image: string) => {
                return (
                  <div>
                    <img
                      style={authStyles.carouse_image}
                      src={image}
                      alt="cc"
                    />
                  </div>
                );
              })}
            </Carousel>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
