import React from "react";
import TableWithHeader from "../../_components/table-with-header";
import { FaPlus } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";
import { Flex, Progress, Text } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import DATA_DEVELOPMENT from "@horizon-sagala/app/data/data-dummy-development.json";
import { IDevelopmentTable } from "@horizon-sagala/app/interface/development.interface";
import { renderIcon } from "@horizon-sagala/app/helper/render-icon.helper";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";

const DevelopmentSection: React.FC = () => {
  const column: ITableColumns[] = [
    {
      key: "name",
      title: "Name",
      render: (data: IDevelopmentTable) => {
        return (
          <Text fontFamily="dm_sans" fontWeight={700}>
            {data.name}
          </Text>
        );
      },
    },
    {
      key: "tech",
      title: "Tech",
      render: (data: IDevelopmentTable) => {
        return (
          <Flex gap="10px">{data.tech.map((item) => renderIcon(item))}</Flex>
        );
      },
    },
    {
      key: "date",
      title: "Date",
      render: (data: IDevelopmentTable) => {
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
      render: (data: IDevelopmentTable) => {
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
    <TableWithHeader
      title="Development Table"
      menuTitle={[
        { title: "Add Data", icon: <FaPlus /> },
        { title: "Delete Data", icon: <BsTrash2Fill /> },
      ]}
    >
      <BasicTable
        width="full"
        variant="unstyled"
        columns={column}
        datas={DATA_DEVELOPMENT}
      />
    </TableWithHeader>
  );
};

export default DevelopmentSection;
