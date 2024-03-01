import { Col, Row, Carousel, Flex } from "antd";
import {
  ButtonContainer,
  Container,
  InputErrorMessage,
  RedirectLink,
  TextInputContainer,
  TextInputPasswordContainer,
} from "../../styles/global.styled";
import { logo } from "../../data/assets";
import { authStyles } from "./auth.style";
import * as Yup from "yup";
import { Formik, FormikValues } from "formik";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { login_carousel_banners } from "../../data/auth";

// login form validationn schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Username/Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  // on login submit button click
  const onLogin = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Flex justify="center" align="center">
            <Carousel
              autoplay
              style={{
                backgroundColor: "white",
                width: 600,
                borderRadius: 30,
                marginLeft: -50,
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
        <Col md={12} style={{ marginTop: 20 }}>
          <img style={{ width: 120, height: 40 }} src={logo} alt="App Logo" />

          {/* Header and info */}
          <h2 style={{ ...authStyles.header }}>Sign Up</h2>
          <span style={authStyles.info}>
            Let's get you all setup, so you can use your personal account.
          </span>

          {/* Login Form */}
          <section style={{ padding: 20, marginLeft: -20, marginTop: -20 }}>
            <Formik
              initialValues={{
                email: "",

                password: "",
                confirm_password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={onLogin}
            >
              {(formik) => {
                const {
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                  isValid,
                  dirty,
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
                      style={{ marginTop: 30 }}
                    />
                    {errors.email && touched.email && (
                      <InputErrorMessage style={{ marginTop: 5 }}>
                        {errors.email}
                      </InputErrorMessage>
                    )}

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
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        marginTop: 30,
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
                      name="password"
                      data-testid="password"
                      iconRender={(visible: any) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        marginTop: 30,
                      }}
                    />
                    {errors.password && touched.password && (
                      <InputErrorMessage style={{ marginTop: 5 }}>
                        {errors.password}
                      </InputErrorMessage>
                    )}

                    <ButtonContainer
                      style={{ marginTop: 20 }}
                      type="submit"
                      disabled={!(dirty && isValid)}
                    >
                      Sign Up
                    </ButtonContainer>
                  </form>
                );
              }}
            </Formik>
          </section>

          <p style={authStyles.redirectPath}>
            Already Have An Account?{" "}
            <RedirectLink to="/login" style={{ textAlign: "center" }}>
              Login
            </RedirectLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
