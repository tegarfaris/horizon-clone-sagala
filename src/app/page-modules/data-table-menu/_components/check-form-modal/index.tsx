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

interface CheckFormModalProps {
  isOpen: boolean;
  onClose: () => void;
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
const CheckFormModal: React.FC<CheckFormModalProps> = ({
  isOpen,
  onClose,
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
        <ModalHeader>Add New Check Table Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Input Name"
              value={formData?.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quantity</FormLabel>
            <Input
              type="text"
              name="quantity"
              placeholder="Input Quantity"
              value={formData?.quantity}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData?.date}
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

export default CheckFormModal;
