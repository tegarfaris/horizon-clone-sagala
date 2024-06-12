import { FaApple, FaWindows } from "react-icons/fa6";
import { ETech } from "../interface/development.interface";
import { COLORS } from "../../../themes/theme";
import { IoLogoAndroid } from "react-icons/io";

export const renderIcon = (techName: ETech) => {
  switch (techName) {
    case ETech.MAC:
      return <FaApple size={20} color={COLORS.GREY} />;
    case ETech.ANDROID:
      return <IoLogoAndroid size={20} color={COLORS.GREY} />;
    case ETech.WINDOWS:
      return <FaWindows size={20} color={COLORS.GREY} />;
    default:
      return null;
  }
};
