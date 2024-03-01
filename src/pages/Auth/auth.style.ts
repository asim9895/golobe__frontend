import { StyleSheet } from "../../stylesheet";
import { COLORS } from "../../theme/colors";
import { FONT_FAMILY } from "../../theme/font_family";

export const authStyles = StyleSheet.create({
  header: {
    fontFamily: FONT_FAMILY.montserrat,
    fontWeight: 600,
    fontSize: 30,
    marginTop: 50,
  },
  info: {
    fontSize: 15,
    fontFamily: FONT_FAMILY.nunito,
    color: COLORS.grey,
  },
  redirectPath: {
    color: COLORS.text,
    fontFamily: FONT_FAMILY.montserrat,
    fontWeight: 500,
    fontSize: 16,
    textAlign: "center",
  },
  carouse_image: {
    height: 650,
    width: "100%",
    borderRadius: 30,
  },
});
