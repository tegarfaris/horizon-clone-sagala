import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CardUpgradePro: React.FC = () => {
  return (
    <Flex
      pos="relative"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      w="286px"
      h="246px"
      borderRadius="30px"
      mt="70px"
      px="20px"
      ml="-20px"
      background="rgb(255,255,255)"
      backgroundImage="linear-gradient(145deg, rgba(255,255,255,1) -100%, rgba(80,47,255,1) 100%)"
      color="white"
      gap="10px"
    >
      <Box
        pos="absolute"
        top="-45px"
        w="90px"
        h="90px"
        background="rgb(255,255,255)"
        backgroundImage="linear-gradient(145deg, rgba(255,255,255,1) -100%, rgba(80,47,255,1) 100%)"
        rounded="full"
        zIndex={3}
      >
        <Box
          pos="absolute"
          ml="20px"
          my="20px"
          bg="white"
          w="50px"
          h="50px"
          rounded="full"
          zIndex={4}
        />

        <Box
          pos="absolute"
          top="28px"
          right="33px"
          w="25px"
          h="25px"
          background="rgb(255,255,255)"
          backgroundImage="linear-gradient(145deg, rgba(255,255,255,1) -100%, rgba(80,47,255,1) 100%)"
          rounded="full"
          zIndex={5}
        >
          <Box
            pos="absolute"
            top="10px"
            right="1px"
            bg="white"
            w="24px"
            h="24px"
            rounded="full"
            zIndex={5}
          />
        </Box>
      </Box>
      <Box
        pos="absolute"
        top="-50px"
        bg="white"
        w="100px"
        h="100px"
        rounded="full"
        zIndex={2}
      />
      <Text fontSize="20px" fontFamily="dm_sans" fontWeight={700}>
        Upgrade to PRO
      </Text>
      <Text fontFamily="dm_sans">
        Improve your development process and start doing more with Horizon UI
        PRO!
      </Text>
      <Button
        pos="absolute"
        bottom="20px"
        fontFamily="dm_sans"
        bg="#7262FF"
        w="215px"
        boxShadow="md"
        color="white"
        borderRadius="20px"
      >
        Upgrade to PRO
      </Button>
    </Flex>
  );
};

export default CardUpgradePro;
