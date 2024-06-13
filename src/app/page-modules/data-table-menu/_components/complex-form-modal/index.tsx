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
  Select,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { COLORS } from "../../../../../../themes/theme";
import { IComplex } from "@horizon-sagala/app/interface/complex.interface";

interface ComplexFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: IComplex;
  setFormData: Dispatch<SetStateAction<IComplex>>;
  handleSubmit: () => void;
}

const ComplexFormModal: React.FC<ComplexFormModalProps> = ({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "progress" ? Number(value) : value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Complex Table Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Input Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="approved">Approved</option>
              <option value="error">Error</option>
              <option value="disable">Disable</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
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
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ComplexFormModal;
