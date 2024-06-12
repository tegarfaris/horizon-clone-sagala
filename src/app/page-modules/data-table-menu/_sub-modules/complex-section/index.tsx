import React from "react";
import TableWithHeader from "../../_components/table-with-header";
import { FaPlus } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";
import { Flex, Progress, Text } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import { IComplex } from "@horizon-sagala/app/interface/complex.interface";

import { renderStatus } from "@horizon-sagala/app/helper/render-status.helper";
import TableTitle from "../../_components/table-title";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";

const ComplexSection: React.FC<{ datas: IComplex[]; loading: boolean }> = ({
  datas,
  loading,
}) => {
  const column: ITableColumns[] = [
    {
      key: "name",
      title: "Name",
      render: (data: IComplex) => {
        return (
          <Text fontFamily="dm_sans" fontWeight={700}>
            {data.name}
          </Text>
        );
      },
    },
    {
      key: "status",
      title: "Status",
      render: (data: IComplex) => {
        return <Flex gap="10px">{renderStatus(data.status)}</Flex>;
      },
    },
    {
      key: "date",
      title: "Date",
      render: (data: IComplex) => {
        return (
          <Text fontFamily="dm_sans" fontWeight={700}>
            {data.date}
          </Text>
        );
      },
    },
    {
      key: "progress",
      title: "Progress",
      render: (data: IComplex) => {
        return (
          <Flex alignItems="center" w="full" gap="10px">
            <Text fontFamily="dm_sans" fontWeight={700}>
              {calculateProgress(data.progress)}
            </Text>
            <Progress
              value={data.progress}
              borderRadius="20px"
              colorScheme="purple"
              w="55px"
              h="9px"
            />
          </Flex>
        );
      },
    },
  ];
  return (
    <TableWithHeader title="Complex Table">
      <BasicTable
        width="full"
        variant="unstyled"
        columns={column}
        datas={datas}
        loadingState={loading}
      />
    </TableWithHeader>
  );
};

export default ComplexSection;
