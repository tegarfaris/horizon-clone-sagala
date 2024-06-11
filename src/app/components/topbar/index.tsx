import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../input-field";
import { SlMagnifier } from "react-icons/sl";
import {
  IoMdInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdColorLens } from "react-icons/md";
import { COLORS } from "../../../../themes/theme";

const DATA_TOPBAR = [
  { icon: <IoMdNotificationsOutline size={20} color={COLORS.GREY} /> },
  { icon: <IoMdInformationCircleOutline size={20} color={COLORS.GREY} /> },
  { icon: <MdColorLens size={20} color={COLORS.GREY} /> },
];
const Topbar: React.FC = () => {
  const router = useRouter();

  return (
    <Flex w="full" pos="fixed" top={0} p="33px">
      <Flex pos="relative" w="full" flexDir="column" fontFamily="dm_sans">
        <Text>Pages / Data Tables</Text>
        <Text fontSize="40px" mt="-10px" fontWeight={700}>
          Data Tables
        </Text>

        {/* profile section */}
        <Flex
          pos="absolute"
          right="300px"
          alignItems="center"
          p="10px"
          borderRadius="50px"
          bg="white"
          w="350px"
          h="65px"
          shadow="xl"
        >
          <Flex alignItems="center" w="full" h="40px" gap="10px">
            <InputField
              id="search"
              name="search"
              type="text"
              placeholder="Search..."
              leftElement={<SlMagnifier />}
            />
            {DATA_TOPBAR.map((data) => (
              <Flex>{data.icon}</Flex>
            ))}

            <Avatar w="40px" h="40px" name="Tegar Faris Nurhakim" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Topbar;
