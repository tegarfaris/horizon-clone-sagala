import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../../../../../themes/theme";
import { HiDotsHorizontal } from "react-icons/hi";

interface menuItems {
  title: string;
  icon: React.ReactElement;
}
export interface TableTitleProps {
  title: string;
  menuTitle: menuItems[];
}
const TableTitle: React.FC<TableTitleProps> = ({ title, menuTitle }) => {
  return (
    <Flex w="full" justifyContent="space-between" alignItems="center" px="10px">
      <Text fontFamily="dm_sans" fontSize="22px" fontWeight={700}>
        {title}
      </Text>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HiDotsHorizontal color={COLORS.PURPLE} />}
          variant="outline"
          bg={COLORS.PURPLE_SLATE}
          border="none"
          borderRadius="10px"
          zIndex={0}
        />
        <MenuList zIndex={0}>
          {menuTitle.map((menu, idx) => (
            <MenuItem
              key={idx}
              icon={menu.icon}
              color={COLORS.GREY}
              _hover={{ color: "black" }}
            >
              {menu.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TableTitle;
