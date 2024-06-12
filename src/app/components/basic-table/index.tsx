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
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { COLORS } from "../../../../themes/theme";

export interface ITableColumns {
  key: string;
  title: string;
  width?: LayoutProps["width"];
  capitalize?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any, index?: number) => void;
  renderHeaderProperty?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const RowWithLink: React.FC<{
  children: React.ReactNode;
  dataId: number;
  linkTo: string;
}> = ({ linkTo, children, dataId }) => {
  return <Link href={`${linkTo}/${dataId}`}>{children}</Link>;
};

const BasicTable: React.FC<BasicTableProps> = ({
  datas,
  columns,
  variant,
  size = "sm",
  width = "full",
  loadingState,
  onHover,
  linkTo,
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
            datas.map((data, i: number) => (
              <Tr key={i} _hover={onHover}>
                {columns.map((column) => (
                  <React.Fragment key={column.key}>
                    {linkTo ? (
                      <RowWithLink dataId={data.id} linkTo={linkTo}>
                        <Td
                          textTransform={
                            column.capitalize ? "capitalize" : "none"
                          }
                          fontSize="14px"
                          w={column.width || "fit-content"}
                          gap="45px"
                        >
                          {column.render
                            ? column.render(data, i)
                            : data[column.key]}
                        </Td>
                      </RowWithLink>
                    ) : (
                      <Td
                        textTransform={
                          column.capitalize ? "capitalize" : "none"
                        }
                        fontSize="14px"
                        w={column.width || "fit-content"}
                        py="22px"
                      >
                        {column.render
                          ? column.render(data, i)
                          : data[column.key]}{" "}
                      </Td>
                    )}
                  </React.Fragment>
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
