import React from "react";
import TableWithHeader from "../../_components/table-with-header";
import { FaPlus } from "react-icons/fa6";
import { BsTrash2Fill } from "react-icons/bs";
import { Flex, Text } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import DATA_FOURTH from "@horizon-sagala/app/data/data-dummy-fourth.json";
import { IFourth } from "@horizon-sagala/app/interface/fourth-table.interface";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";

const FourthColumnSection: React.FC = () => {
  const column: ITableColumns[] = [
    {
      key: "name",
      title: "Name",
      render: (data: IFourth) => {
        return (
          <Flex gap="10px" alignItems="center">
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
      render: (data: IFourth) => {
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
      render: (data: IFourth) => {
        return <Text fontWeight={700}>{data.quantity}</Text>;
      },
    },
    {
      key: "date",
      title: "Date",
      render: (data: IFourth) => {
        return (
          <Text fontFamily="dm_sans" fontWeight={700}>
            {data.date}
          </Text>
        );
      },
    },
  ];
  return (
    <TableWithHeader
      title="4-Column Table"
      menuTitle={[
        { title: "Add Data", icon: <FaPlus /> },
        { title: "Delete Data", icon: <BsTrash2Fill /> },
      ]}
    >
      <BasicTable
        variant="unstyled"
        width="100%"
        columns={column}
        datas={DATA_FOURTH}
      />
    </TableWithHeader>
  );
};

export default FourthColumnSection;
