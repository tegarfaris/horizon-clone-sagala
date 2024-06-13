import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import TableWithHeader from "../../_components/table-with-header";
import { Flex, Text, Checkbox, Button, useDisclosure } from "@chakra-ui/react";
import BasicTable, {
  ITableColumns,
} from "@horizon-sagala/app/components/basic-table";
import { IFourth } from "@horizon-sagala/app/interface/fourth-table.interface";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";
import FourthFormModal from "../../_components/fourth-form-modal"; // Assuming you have a similar modal for FourthColumnSection
import { useSearch } from "@horizon-sagala/app/context/searchContext";
import dayjs from "dayjs";

const FourthColumnSection: React.FC<{ datas: IFourth[]; loading: boolean }> = ({
  datas,
  loading,
}) => {
  const { searchValue } = useSearch();
  const [filtered, setFiltered] = useState<IFourth[]>(datas);
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
      render: (data: IFourth) => {
        return (
          <Checkbox
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
            X
          </Button>
        </Flex>
      ),
    },
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
      id: filtered.length + 1,
      name: formData.name,
      progress: formData.progress,
      quantity: formData.quantity,
      date: formData.date,
    };

    const newDatas = [...filtered, newItem];
    setFiltered(newDatas);

    const values = [35, 50, 75];
    const randomIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randomIndex];

    setFormData({
      name: "",
      progress: randomValue,
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
        title="4-Column Table"
        addData={onOpen}
        deleteData={toggleCheckboxes}
      >
        <BasicTable
          variant="unstyled"
          width="100%"
          columns={column}
          datas={searchValue ? datas : filtered}
          loadingState={loading}
        />
      </TableWithHeader>

      <FourthFormModal
        isOpen={isOpen}
        onClose={onClose}
        name={formData.name}
        progress={formData.progress}
        quantity={formData.quantity}
        date={formData.date}
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

export default FourthColumnSection;
