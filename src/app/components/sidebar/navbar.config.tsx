import { FaUserLarge } from "react-icons/fa6";
import { IoMdHome, IoMdLock } from "react-icons/io";
import { MdOutlineBarChart, MdOutlineShoppingCart } from "react-icons/md";
import { COLORS } from "../../../../themes/theme";

export interface IChildItems {
  id: number;
  label: string;
  path: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
}

export interface INavbarItem {
  id: number;
  label: string;
  path: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
}

export const navbarItem: INavbarItem[] = [
  {
    id: 0,
    label: "Main Dashboard",
    path: "/dashboard/main-dashboard",
    icon: <IoMdHome size={20} />,
    iconActive: <IoMdHome size={20} color={COLORS.PURPLE} />,
  },
  {
    id: 1,
    label: "NFT Marketplace",
    path: "/dashboard/nft-marketplace",
    icon: <MdOutlineShoppingCart size={20} />,
    iconActive: <MdOutlineShoppingCart size={20} color={COLORS.PURPLE} />,
  },
  {
    id: 2,
    label: "Data Tables",
    path: "/dashboard/data-table",
    icon: <MdOutlineBarChart size={20} />,
    iconActive: <MdOutlineBarChart size={20} color={COLORS.PURPLE} />,
  },
  {
    id: 3,
    label: "Profile",
    path: "/dashboard/profile",
    icon: <FaUserLarge size={15} />,
    iconActive: <FaUserLarge size={15} color={COLORS.PURPLE} />,
  },
  {
    id: 4,
    label: "Sign In",
    path: "/dashboard/sign-in",
    icon: <IoMdLock size={20} />,
    iconActive: <IoMdLock size={20} color={COLORS.PURPLE} />,
  },
  {
    id: 5,
    label: "RTL Admin",
    path: "/dashboard/rtl-admin",
    icon: <IoMdHome size={20} />,
    iconActive: <IoMdHome size={20} color={COLORS.PURPLE} />,
  },
];
