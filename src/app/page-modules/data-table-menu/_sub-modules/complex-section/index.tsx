import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import TableWithHeader from "../../_components/table-with-header";
import { Flex, Text, Checkbox, Button, Progress, useDisclosure } from "@chakra-ui/react";
import BasicTable, { ITableColumns } from "@horizon-sagala/app/components/basic-table";
import { EStatus, IComplex } from "@horizon-sagala/app/interface/complex.interface";
import { renderStatus } from "@horizon-sagala/app/helper/render-status.helper";
import { calculateProgress } from "@horizon-sagala/app/helper/calculate-progress.helper";
import ComplexFormModal from "../../_components/complex-form-modal"; // Assuming you have a similar modal for ComplexSection
import { useSearch } from "@horizon-sagala/app/context/searchContext";

const ComplexSection: React.FC<{ datas: IComplex[]; loading: boolean }> = ({
  datas,
  loading,
}) => {
  const { searchValue } = useSearch();
  const [filtered, setFiltered] = useState<IComplex[]>(datas);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isShowCheckbox, showCheckbox] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    date: "",
    progress: 0,
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
      render: (data: IComplex) => {
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
      render: (data: IComplex) => {
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

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    const newItem = {
      id: filtered.length + 1,
      name: formData.name,
      status: formData.status as EStatus,
      date: formData.date,
      progress: formData.progress,
    };

    const newDatas = [...filtered, newItem];
    setFiltered(newDatas);

    setFormData({
      name: "",
      status: "",
      date: "",
      progress: 0,
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
        title="Complex Table"
        addData={onOpen}
        deleteData={toggleCheckboxes}
      >
        <BasicTable
          width="full"
          variant="unstyled"
          columns={column}
          datas={searchValue ? datas : filtered}
          loadingState={loading}
        />
      </TableWithHeader>

      <ComplexFormModal
        isOpen={isOpen}
        onClose={onClose}
        formData={
          formData as IComplex
        }
        setFormData={
          setFormData as Dispatch<
            SetStateAction<IComplex>
          >
        }
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ComplexSection;
