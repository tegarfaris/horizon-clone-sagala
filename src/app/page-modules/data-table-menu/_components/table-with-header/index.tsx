import { Flex } from "@chakra-ui/react";
import React from "react";
import TableTitle from "../table-title";

interface menuItems {
  title: string;
  icon: React.ReactElement;
}
export interface TableWithHeaderProps {
  title: string;
  menuTitle: menuItems[];
  children: React.ReactNode;
}

const TableWithHeader: React.FC<TableWithHeaderProps> = ({
  title,
  menuTitle,
  children,
}) => {
  return (
    <Flex
      flexDir="column"
      bg="white"
      h="full"
      w="full"
      alignItems="center"
      borderRadius="20px"
      p="20px"
    >
      <TableTitle title={title} menuTitle={menuTitle} />
      <Flex w="full" pt="10px">
        {children}
      </Flex>
    </Flex>
  );
};

export default TableWithHeader;
