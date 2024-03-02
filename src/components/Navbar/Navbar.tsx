import { Flex, Row } from "antd";

import { icons, logo } from "../../data/assets";
import { NavLink, useLocation } from "react-router-dom";
import { COLORS } from "../../theme/colors";
import { navbarStyles } from "./navbar.style";

const Navbar = () => {
  const location = useLocation();

  return (
    <div style={{ height: 60, backgroundColor: "#ffffff", width: "100%" }}>
      <Flex
        justify="space-between"
        align="center"
        style={{ paddingTop: 18, paddingLeft: 50, paddingRight: 100 }}
      >
        <section style={{ marginTop: -5 }}>
          <Row justify="center" align="middle">
            <NavLink to="/flights" style={{ color: COLORS.text }}>
              <Row
                align="middle"
                style={{
                  ...navbarStyles.route,
                  backgroundColor:
                    location?.pathname === "/flights"
                      ? COLORS.button_color
                      : "#ffffff",
                }}
              >
                <img
                  src={icons.flight}
                  alt="flight"
                  style={navbarStyles.route_image}
                />
                <p style={navbarStyles.route_name}>Find Flights</p>
              </Row>
            </NavLink>

            <NavLink to="/stays" style={{ color: COLORS.text }}>
              <Row
                align="middle"
                style={{
                  ...navbarStyles.route,
                  backgroundColor:
                    location?.pathname === "/stays"
                      ? COLORS.button_color
                      : "#ffffff",
                }}
              >
                <img
                  src={icons.bed}
                  alt="stays"
                  style={navbarStyles.route_image}
                />
                <p style={navbarStyles.route_name}>Find Stays</p>
              </Row>
            </NavLink>
          </Row>
        </section>

        <section>
          <NavLink to="/">
            <img
              style={{ height: 25, marginRight: 70 }}
              src={logo}
              alt="App Logo"
            />
          </NavLink>
        </section>

        <section style={{ marginTop: -5 }}>
          <Row justify="center" align="middle">
            <NavLink to="/login" style={{ color: COLORS.text }}>
              <Row
                align="middle"
                style={{
                  ...navbarStyles.route,
                  backgroundColor:
                    location?.pathname === "/login"
                      ? COLORS.button_color
                      : "#ffffff",
                }}
              >
                <p style={navbarStyles.route_name}>Login</p>
              </Row>
            </NavLink>

            <NavLink to="/register" style={{ color: COLORS.text }}>
              <Row
                align="middle"
                style={{
                  ...navbarStyles.route,
                  backgroundColor:
                    location?.pathname === "/register"
                      ? COLORS.button_color
                      : "#ffffff",
                }}
              >
                <p style={navbarStyles.route_name}>Sign Up</p>
              </Row>
            </NavLink>
          </Row>
        </section>
      </Flex>
    </div>
  );
};

export default Navbar;
