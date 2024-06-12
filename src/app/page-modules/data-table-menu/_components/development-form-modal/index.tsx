import {
  Button,
  Checkbox,
  CheckboxGroup,
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
import { ETech } from "@horizon-sagala/app/interface/development.interface";

interface DevelopmentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  tech: ETech[];
  date: string;
  formData: {
    name: "";
    tech: [];
    date: "";
    progress: number;
  };
  setFormData: Dispatch<
    SetStateAction<{
      name: "";
      tech: ETech[];
      date: "";
      progress: number;
    }>
  >;
  handleSubmit: () => void;
}
const DevelopmentFormModal: React.FC<DevelopmentFormModalProps> = ({
  isOpen,
  onClose,
  name,
  tech,
  date,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const techOptions: ETech[] = ["windows", "android", "mac-os"] as ETech[];

  const handleTechChange = (selectedTech: ETech[]) => {
    setFormData({
      ...formData,
      tech: selectedTech,
    });
  };

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
        <ModalHeader>Add New Development Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              isRequired
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Tech</FormLabel>
            <CheckboxGroup value={tech} onChange={handleTechChange}>
              {techOptions.map((tech) => (
                <Checkbox
                  key={tech}
                  colorScheme="purple"
                  value={tech}
                  px="10px"
                  isRequired
                >
                  {tech}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={date}
              onChange={handleInputChange}
              isRequired
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
          <Button variant="ghost" color={COLORS.RED} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DevelopmentFormModal;
