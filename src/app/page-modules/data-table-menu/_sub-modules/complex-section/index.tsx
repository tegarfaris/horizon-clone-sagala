import React from "react";
import TableWithHeader from "../../_components/table-with-header";
import { FaPlus } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";
import { Flex, Progress, Text } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import { IComplex } from "@horizon-sagala/app/interface/complex.interface";
import DATA_COMPLEX from "@horizon-sagala/app/data/data-dummy-complex.json";
import { renderStatus } from "@horizon-sagala/app/helper/render-status.helper";
import TableTitle from "../../_components/table-title";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";

const ComplexSection: React.FC = () => {
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
    <Flex
      flexDir="column"
      bg="white"
      h="full"
      w="full"
      alignItems="center"
      borderRadius="20px"
      p="20px"
      flexGrow={1}
    >
      <TableTitle
        title="Complex Table"
        menuTitle={[
          { title: "Add Data", icon: <FaPlus /> },
          { title: "Delete Data", icon: <BsTrash2Fill /> },
        ]}
      />
      <BasicTable
        width="full"
        variant="unstyled"
        columns={column}
        datas={DATA_COMPLEX}
      />
    </Flex>
  );
};

export default ComplexSection;
