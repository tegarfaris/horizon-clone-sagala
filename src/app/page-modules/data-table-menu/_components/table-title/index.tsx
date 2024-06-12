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
import InputField from "@horizon-sagala/app/components/input-field";

export interface TableTitleProps {
  title: string;
  addData: () => void;
  deleteData: () => void;
}
const TableTitle: React.FC<TableTitleProps> = ({
  title,
  addData,
  deleteData,
}) => {
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
          <MenuItem
            color={COLORS.GREY}
            _hover={{ color: "black" }}
            onClick={addData}
          >
            Add Data
          </MenuItem>
          <MenuItem
            color={COLORS.GREY}
            _hover={{ color: "black" }}
            onClick={deleteData}
          >
            Delete Data
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TableTitle;
