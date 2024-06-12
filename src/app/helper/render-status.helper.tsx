import { Flex, Text } from "@chakra-ui/react";
import { EStatus } from "../interface/complex.interface";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { COLORS } from "../../../themes/theme";
import { PiWarningCircleFill } from "react-icons/pi";

export const renderStatus = (status: EStatus) => {
  switch (status) {
    case EStatus.APPROVED:
      return (
        <Flex gap="5px" fontFamily="dm_sans" fontWeight={700}>
          <IoMdCheckmarkCircle size={22} color={COLORS.GREEN} />
          <Text>Approved</Text>
        </Flex>
      );
    case EStatus.DISABLE:
      return (
        <Flex gap="5px" fontFamily="dm_sans" fontWeight={700}>
          <IoMdCloseCircle size={22} color={COLORS.RED} />
          <Text>Disable</Text>
        </Flex>
      );
    case EStatus.ERROR:
      return (
        <Flex gap="5px" fontFamily="dm_sans" fontWeight={700}>
          <PiWarningCircleFill size={22} color={COLORS.YELLOW} />
          <Text>Error</Text>
        </Flex>
      );
  }
};
