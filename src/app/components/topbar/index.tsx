import { Avatar, Flex, Input, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import InputField from "../input-field";
import { SlMagnifier } from "react-icons/sl";
import {
  IoMdInformationCircleOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdColorLens } from "react-icons/md";
import { COLORS } from "../../../../themes/theme";
import {
  IRootContext,
  ProviderContext,
} from "@horizon-sagala/app/context/global.context";
import { useSearch } from "@horizon-sagala/app/context/searchContext";

const DATA_TOPBAR = [
  { icon: <IoMdNotificationsOutline size={20} color={COLORS.GREY} /> },
  { icon: <IoMdInformationCircleOutline size={20} color={COLORS.GREY} /> },
  { icon: <MdColorLens size={20} color={COLORS.GREY} /> },
];
const Topbar: React.FC<{ shrink: boolean }> = ({ shrink }) => {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <Flex w="full" pos="fixed" top={0} right={0} p="20px" zIndex={99}>
      <Flex
        w="full"
        p="10px"
        ml={{ base: "0", md: "80px", xl: shrink ? "80px" : "300px" }}
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        borderRadius="20px"
        fontFamily="dm_sans"
        bg="rgba(255, 255, 255, 0)"
        style={{ backdropFilter: "blur(15px)" }}
      >
        <Flex flexDir="column">
          <Text>Pages / Data Tables</Text>
          <Text fontSize="40px" mt="-10px" fontWeight={700}>
            Data Tables
          </Text>
        </Flex>

        {/* profile section */}
        <Flex
          alignItems="center"
          p="10px"
          borderRadius="50px"
          bg="white"
          w={{ base: "full", md: "360px" }}
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
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
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
