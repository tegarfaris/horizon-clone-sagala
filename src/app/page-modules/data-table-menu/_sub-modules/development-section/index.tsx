import React, { Dispatch, SetStateAction, useState } from "react";
import TableWithHeader from "../../_components/table-with-header";
import { Flex, Progress, Text, useDisclosure } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import {
  ETech,
  IDevelopmentTable,
} from "@horizon-sagala/app/interface/development.interface";
import { renderIcon } from "@horizon-sagala/app/helper/render-icon.helper";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";
import dayjs from "dayjs";
import DevelopmentFormModal from "../../_components/development-form-modal";

const DevelopmentSection: React.FC<{
  datas: IDevelopmentTable[];
  loading: boolean;
}> = ({ datas, loading }) => {
  const [filtered, setFiltered] = useState(datas);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    tech: [] as ETech[],
    date: "",
    progress: 0,
  });

  const column: ITableColumns[] = [
    {
      key: "name",
      title: "Name",
      render: (data: IDevelopmentTable) => (
        <Text fontFamily="dm_sans" fontWeight={700}>
          {data.name}
        </Text>
      ),
    },
    {
      key: "tech",
      title: "Tech",
      render: (data: IDevelopmentTable) => (
        <Flex gap="10px">{data.tech.map((item) => renderIcon(item))}</Flex>
      ),
    },
    {
      key: "date",
      title: "Date",
      render: (data: IDevelopmentTable) => (
        <Text fontFamily="dm_sans" fontWeight={700}>
          {dayjs(data.date).format("DD.MMM.YYYY")}
        </Text>
      ),
    },
    {
      key: "progress",
      title: "Progress",
      render: (data: IDevelopmentTable) => (
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
      ),
    },
  ];

  const handleSubmit = () => {
    const newItem = {
      id: datas.length + 1,
      name: formData.name,
      tech: formData.tech,
      date: formData.date,
      progress: formData.progress,
    };

    const newDatas = [...datas, newItem];
    setFiltered(newDatas);

    const values = [35, 50, 75];
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];

    setFormData({
      name: "",
      tech: [],
      date: "",
      progress: randomValue,
    });
  };
  const handleDelete = () => {
    const newDatas = filtered.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setFiltered(newDatas);
    setSelectedItems([]);
  };

  return (
    <>
      <TableWithHeader
        title="Development Table"
        addData={onOpen}
        deleteData={() => handleDelete()}
      >
        <BasicTable
          width="full"
          variant="unstyled"
          columns={column}
          datas={filtered}
          loadingState={loading}
        />
      </TableWithHeader>

      {/* Modal untuk menambahkan data baru */}
      <DevelopmentFormModal
        isOpen={isOpen}
        onClose={onClose}
        name={formData.name}
        tech={formData.tech}
        date={formData.date}
        formData={
          formData as { name: ""; tech: []; date: ""; progress: number }
        }
        setFormData={
          setFormData as Dispatch<
            SetStateAction<{
              name: "";
              tech: ETech[];
              date: "";
              progress: number;
            }>
          >
        }
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default DevelopmentSection;
