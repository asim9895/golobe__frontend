import { Button, Input } from "antd";
import styled from "styled-components";
import { COLORS } from "../theme/colors";
import { FONT_FAMILY } from "../theme/font_family";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const TextInputContainer = styled(Input).attrs((props: any) => props)`
  background-color: ${COLORS.background};
  color: ${COLORS.text};
  font-family: ${FONT_FAMILY.montserrat} !important;
  border-radius: 10;
  font-weight: 500;
  padding: 15px;
  border-color: black;
  width: ${(props) => (props?.width ? `${props?.width}%` : "100%")};
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TextInputPasswordContainer = styled(Input.Password).attrs(
  (props: any) => props
)`
  background-color: ${COLORS.background};
  color: ${COLORS.text};
  font-family: ${FONT_FAMILY.montserrat} !important;
  border-radius: 10;
  font-weight: 500;
  padding: 15px;
  border-color: black;
  border-width: 0.5px;
  width: ${(props) => (props?.width ? `${props?.width}%` : "100%")};
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputErrorMessage = styled.p`
  color: ${COLORS.error};
  font-size: 15px;
  font-family: ${FONT_FAMILY.montserrat};
  font-weight: 500;
  align-self: flex-start;
`;

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${COLORS.button_color};
  color: ${COLORS.text};
  font-family: ${FONT_FAMILY.montserrat};
  font-weight: 600;
  font-size: 17px;
  border-width: 0px;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
`;

export const RedirectLink = styled(NavLink)`
  color: ${COLORS.redirect_color};
  font-family: ${FONT_FAMILY.montserrat};
  font-size: 16px;
  font-weight: 500;
`;
