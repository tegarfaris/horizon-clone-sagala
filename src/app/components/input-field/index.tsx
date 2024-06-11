import React, { KeyboardEventHandler, ReactNode } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { COLORS } from "../../../../themes/theme";

interface InputFieldProps {
  id: string;
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: React.HTMLInputTypeAttribute;
  helperText?: string | ReactNode;
  rightElement?: React.ReactNode | JSX.Element;
  leftElement?: React.ReactNode | JSX.Element;
  rightAddon?: React.ReactNode | JSX.Element;
  leftAddon?: React.ReactNode | JSX.Element;
  error?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: string | number;
  max?: string | number;
  pattern?: RegExp;
  isDisabled?: boolean;
  autocomplete?: boolean;
  borderColor?: string;
  pl?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <FormControl isInvalid={Boolean(props.error)}>
      {props.label && (
        <FormLabel htmlFor={props.id}>
          {props.label}{" "}
          {props.required && (
            <Text color={COLORS.RED} fontWeight="600" as="span">
              *
            </Text>
          )}
        </FormLabel>
      )}
      <InputGroup>
        {props.leftAddon && <InputLeftAddon>{props.leftAddon}</InputLeftAddon>}
        {props.leftElement && (
          <InputLeftElement>{props.leftElement}</InputLeftElement>
        )}
        <Input
          onKeyDown={props.onKeyDown}
          autoComplete={props.autocomplete ? "on" : "off"}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          bg={COLORS.PURPLE_SLATE}
          borderRadius="20px"
          min={props.min}
          max={props.max}
          type={props.type}
          isDisabled={props.isDisabled}
          pl={props.pl}
        />
        {props.rightElement && (
          <InputRightElement mr="58.82px">
            {props.rightElement}
          </InputRightElement>
        )}
        {props.rightAddon && (
          <InputRightAddon>{props.rightAddon}</InputRightAddon>
        )}
      </InputGroup>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
      <FormErrorMessage>{props.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
