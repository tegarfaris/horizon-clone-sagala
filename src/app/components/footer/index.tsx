import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../../../themes/theme";

const Footer: React.FC = () => {
  return (
    <Flex w="full" p="50px" justifyContent="space-between">
      <Text fontFamily="dm_sans" fontSize="16px" color={COLORS.GREY}>
        © 2024 Horizon UI Clone. All Rights Reserved. Made with love by Tegar
        Faris!
      </Text>

      <Flex gap="40px" fontFamily="dm_sans" fontSize="16px" color={COLORS.GREY}>
        <Text>Support</Text>
        <Text>License</Text>
        <Text>Term of Use</Text>
        <Text>Blog</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
