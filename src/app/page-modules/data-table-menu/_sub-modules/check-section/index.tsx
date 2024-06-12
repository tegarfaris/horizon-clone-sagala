import { Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TableWithHeader from "../../_components/table-with-header";
import { FaPlus } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import { ICheckTable } from "@horizon-sagala/app/interface/check-table.interface";

import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";

const CheckSection: React.FC<{ datas: ICheckTable[]; loading: boolean }> = ({
  datas,
  loading,
}) => {
  const column: ITableColumns[] = [
    {
      key: "name",
      title: "Name",
      render: (data: ICheckTable) => {
        return (
          <Flex w="full" gap="10px" alignItems="center">
            <Checkbox colorScheme="purple" />
            <Text fontFamily="dm_sans" fontWeight={700}>
              {data.name}
            </Text>
          </Flex>
        );
      },
    },
    {
      key: "progress",
      title: "Progress",
      render: (data: ICheckTable) => {
        return (
          <Flex alignItems="center" w="full" gap="10px">
            <Text fontFamily="dm_sans" fontWeight={700}>
              {calculateProgress(data.progress)}
            </Text>
          </Flex>
        );
      },
    },
    {
      key: "quantity",
      title: "Quantity",
      render: (data: ICheckTable) => {
        return <Text fontWeight={700}>{data.quantity}</Text>;
      },
    },
    {
      key: "date",
      title: "Date",
      render: (data: ICheckTable) => {
        return (
          <Text fontFamily="dm_sans" fontWeight={700}>
            {data.date}
          </Text>
        );
      },
    },
  ];
  return (
    <TableWithHeader title="Check Table">
      <BasicTable
        width="100%"
        variant="unstyled"
        columns={column}
        datas={datas}
        loadingState={loading}
      />
    </TableWithHeader>
  );
};

export default CheckSection;
