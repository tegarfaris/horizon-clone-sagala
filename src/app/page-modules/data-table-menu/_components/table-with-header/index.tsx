import { Flex } from "@chakra-ui/react";
import React from "react";
import TableTitle from "../table-title";
export interface TableWithHeaderProps {
  title: string;
  children: React.ReactNode;
  addData?: () => void;
  deleteData?: () => void;
}

const TableWithHeader: React.FC<TableWithHeaderProps> = ({
  title,
  children,
  addData,
  deleteData,
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
      <TableTitle
        title={title}
        addData={addData as () => void}
        deleteData={deleteData as () => void}
      />
      <Flex w="full" pt="10px">
        {children}
      </Flex>
    </Flex>
  );
};

export default TableWithHeader;
