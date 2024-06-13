import {
  Text,
  LayoutProps,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  SystemStyleObject,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../../../themes/theme";

export interface ITableColumns {
  key: string;
  title: string;
  width?: LayoutProps["width"];
  capitalize?: boolean;
  display?: string;
  render?: (data: any, index?: number) => void;
  renderHeaderProperty?: React.ReactNode;
}

type DataTable = Record<string, any>;

interface BasicTableProps {
  datas: DataTable[];
  columns: ITableColumns[];
  variant?: "simple" | "striped" | "unstyled";
  size?: "sm" | "md" | "lg";
  colorScheme?: string;
  width?: LayoutProps["width"];
  loadingState?: boolean;
  onHover?: SystemStyleObject;
  linkTo?: string;
  bgHeader?: string;
  border?: string;
  borderRadius?: string;
}

const noRecordData = (columns: ITableColumns[]) => {
  return (
    <Tbody>
      <Tr>
        <Td h="200px" colSpan={columns.length} textAlign="center">
          Oops... There is empty
        </Td>
      </Tr>
    </Tbody>
  );
};

const BasicTable: React.FC<BasicTableProps> = ({
  datas,
  columns,
  variant,
  size = "sm",
  width = "full",
  loadingState,
  onHover,

  bgHeader,
  border,
  borderRadius,
}) => {
  return (
    <TableContainer
      w={width}
      border={border}
      borderRadius={borderRadius}
      overflowX="auto"
    >
      <Table variant={variant} size={size}>
        {datas?.length === 0 && !loadingState && noRecordData(columns)}
        <Thead
          borderBottom="1px solid"
          h="50px"
          borderColor={COLORS.GREY}
          mx="-50px"
        >
          <Tr>
            {columns?.map((column) => {
              return (
                <Th
                  fontSize="12px"
                  color={COLORS.GREY}
                  key={column.key}
                  w={column.width || "fit-content"}
                  bg={bgHeader}
                  display={column.display}
                >
                  <Flex gap="10px" alignItems="center">
                    <Text>{column.title}</Text>
                    {column.renderHeaderProperty}
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {typeof loadingState !== "undefined" && loadingState ? (
            <Tr>
              <Td pt="25%" colSpan={columns.length} textAlign="center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  size="lg"
                  color={COLORS.PURPLE}
                />
                <Text fontFamily="dm_sans" pt="10px" color={COLORS.PURPLE}>
                  Please wait ...
                </Text>
              </Td>
            </Tr>
          ) : (
            datas?.map((data, i: number) => (
              <Tr key={i} _hover={onHover}>
                {columns.map((column) => (
                  <Td
                    key={column.key}
                    textTransform={column.capitalize ? "capitalize" : "none"}
                    fontSize="14px"
                    w={column.width || "fit-content"}
                    py="22px"
                    display={column.display}
                  >
                    {column.render ? column.render(data, i) : data[column.key]}{" "}
                  </Td>
                ))}
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
