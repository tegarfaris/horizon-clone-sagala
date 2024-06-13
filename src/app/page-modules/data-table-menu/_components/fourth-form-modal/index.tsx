import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { COLORS } from "../../../../../../themes/theme";

interface FourthFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  progress: number;
  quantity: string;
  date: string;
  formData: {
    name: "";
    progress: number;
    quantity: string;
    date: "";
  };
  setFormData: Dispatch<
    SetStateAction<{
      name: "";
      progress: number;
      quantity: string;
      date: "";
    }>
  >;
  handleSubmit: () => void;
}
const FourthFormModal: React.FC<FourthFormModalProps> = ({
  isOpen,
  onClose,
  name,
  quantity,
  date,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New 4-Column Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Input Name"
              value={name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="quantity"
              name="quantity"
              placeholder="Input Quantity"
              value={quantity}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="transparent"
            border="1px solid"
            borderColor={COLORS.PURPLE}
            color={COLORS.PURPLE}
            mr={3}
            _hover={{ bg: COLORS.PURPLE, color: "white" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="ghost"
            color={COLORS.RED}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FourthFormModal;
