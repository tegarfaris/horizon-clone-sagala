import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import TableWithHeader from "../../_components/table-with-header";
import { Checkbox, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import { ICheckTable } from "@horizon-sagala/app/interface/check-table.interface";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";
import CheckFormModal from "../../_components/check-form-modal"; // Assuming you have a similar modal for CheckSection
import { useSearch } from "@horizon-sagala/app/context/searchContext";
import dayjs from "dayjs";
import { FaCheck } from "react-icons/fa6";

const CheckSection: React.FC<{ datas: ICheckTable[]; loading: boolean }> = ({
  datas,
  loading,
}) => {
  const { searchValue } = useSearch();
  const [filtered, setFiltered] = useState<ICheckTable[]>(datas);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isShowCheckbox, showCheckbox] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    progress: 0,
    quantity: "",
    date: "",
  });

  useEffect(() => {
    setFiltered(datas);
  }, [datas]);

  const handleConfirmDelete = () => {
    const newDatas = filtered.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setFiltered(newDatas);
    setSelectedItems([]);
    showCheckbox(false);
  };

  const column: ITableColumns[] = [
    {
      key: "selectedItem",
      title: "",
      display: isShowCheckbox ? "flex" : "none",
      render: (data: ICheckTable) => {
        return (
          <Checkbox
            colorScheme="red"
            isChecked={selectedItems.includes(data.id)}
            onChange={() => handleSelectItem(data.id)}
          />
        );
      },
      renderHeaderProperty: (
        <Flex mt="10px" ml="-15px">
          <Button
            w="full"
            size="xs"
            colorScheme="red"
            onClick={handleConfirmDelete}
          >
            <FaCheck size={14} />
          </Button>
        </Flex>
      ),
    },
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
            {dayjs(data.date).format("DD.MMM.YYYY")}
          </Text>
        );
      },
    },
  ];

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const newItem = {
      id: datas.length + 1,
      name: formData.name,
      progress: formData.progress,
      quantity: formData.quantity,
      date: formData.date,
    };

    const newDatas = [...datas, newItem];
    setFiltered(newDatas);

    setFormData({
      name: "",
      progress: 0,
      quantity: "",
      date: "",
    });
    onClose();
  };

  const toggleCheckboxes = () => {
    showCheckbox(!isShowCheckbox);
    if (isShowCheckbox) {
      setSelectedItems([]);
    }
  };

  return (
    <>
      <TableWithHeader
        title="Check Table"
        addData={onOpen}
        deleteData={toggleCheckboxes}
      >
        <BasicTable
          width="100%"
          variant="unstyled"
          columns={column}
          datas={searchValue ? datas : filtered}
          loadingState={loading}
        />
      </TableWithHeader>

      <CheckFormModal
        isOpen={isOpen}
        onClose={onClose}
        formData={
          formData as { name: ""; progress: number; quantity: string; date: "" }
        }
        setFormData={
          setFormData as Dispatch<
            SetStateAction<{
              name: "";
              progress: number;
              quantity: string;
              date: "";
            }>
          >
        }
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CheckSection;
