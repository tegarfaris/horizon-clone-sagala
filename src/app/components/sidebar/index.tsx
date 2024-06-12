import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { INavbarItem } from "./navbar.config";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import useActiveMenu from "@horizon-sagala/app/hooks/function/useActiveMenu";
import { COLORS } from "../../../../themes/theme";
import CardUpgradePro from "../card-upgrade-pro";

interface SidebarProps {
  shrink: boolean;
  setShrink: React.Dispatch<React.SetStateAction<boolean>>;
  filteredMenu: INavbarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  shrink,
  setShrink,
  filteredMenu,
}) => {
  const router = useRouter();
  const { isActive } = useActiveMenu();

  const menuItemContainer = useMemo(() => {
    return {
      gap: "20px",
      py: "10px",
      cursor: "pointer",
      pl: { base: shrink ? "20px" : "0", xl: shrink ? "0" : "20px" },
      justifyContent: {
        base: shrink ? "flex-start" : "center",
        xl: shrink ? "center" : "flex-start",
      },
      alignItems: "center",
      maxW: { base: shrink ? "full" : "50px", xl: shrink ? "50px" : "full" },
      h: "44px",
    };
  }, [shrink]);

  const menuItemText = useMemo(() => {
    return {
      variant: "heading/heading-6",
      opacity: {
        base: shrink ? "1" : "0",
        xl: shrink ? "0" : "1",
      },
    };
  }, [shrink]);

  return (
    <Flex
      flexDir="column"
      p="20px"
      bg={{
        base: shrink ? "rgba(247, 247, 247, 0.8)" : "white",
        xl: "white",
      }}
      display={{ base: "none", md: "flex" }}
      w={{ base: shrink ? "300px" : "80px", xl: shrink ? "80px" : "300px" }}
      borderRight={{ base: shrink ? COLORS.PURPLE : "none", xl: "none" }}
      minH="100vh"
      position="fixed"
      zIndex="999"
      shadow="sm"
      transition="ease-in 0.25s"
      transitionDelay="0.3s"
    >
      <Flex
        flexDir="column"
        justifyContent="center"
        h="125px"
        w={shrink ? "45px" : undefined}
      >
        <Text
          display={{
            base: shrink ? "none" : "flex",
            xl: shrink ? "flex" : "none",
          }}
          textAlign="center"
          fontFamily="dm_sans"
          fontSize="24px"
          fontWeight={700}
          ml="10px"
        >
          H
        </Text>

        <Text
          display={{
            base: shrink ? "flex" : "none",
            xl: shrink ? "none" : "flex",
          }}
          textAlign="center"
          fontSize="24px"
          mb="20px"
          ml="20px"
        >
          <Text as="span" fontWeight={800}>
            HORIZON
          </Text>{" "}
          FREE
        </Text>

        <Divider borderColor={COLORS.GREY} w="full" pr="20px" />
      </Flex>
      <Flex flexDir="column" gap="5px" pl="10px" position="relative">
        {filteredMenu.map((menu) => {
          return (
            <Flex
              key={menu.id}
              onClick={() => {
                router.push(`/${menu.path}`);
              }}
              {...menuItemContainer}
              position="relative"
              transition={{
                base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
              }}
              transitionDelay={{
                base: shrink ? "0.02s" : "0.5s",
                xl: shrink ? "0.25s" : "0.02s",
              }}
              transitionProperty="transition, opacity, left"
              alignItems="center"
              fontWeight={isActive(menu.path as string) ? 600 : 400}
              fontSize="15px"
              mr={{
                base: shrink ? "30px" : undefined,
                lg: shrink ? undefined : "30px",
              }}
            >
              <Text
                position="absolute"
                left={shrink ? "10px" : "20px"}
                color={isActive(menu.path as string) ? "#000" : COLORS.GREY}
              >
                {isActive(menu.path as string) ? menu.iconActive : menu.icon}
              </Text>
              <Text
                {...menuItemText}
                position="absolute"
                color={isActive(menu.path as string) ? "#000" : COLORS.GREY}
                left={{
                  base: shrink ? "50px" : "20px",
                  xl: shrink ? "20px" : "60px",
                }}
                transition={{
                  base: shrink ? "ease-in 0.25s" : "ease-out 0.1s",
                  xl: shrink ? "ease-out 0.1s" : "ease-in 0.25s",
                }}
                transitionDelay={{
                  base: shrink ? "0.25s" : "0.1s",
                  xl: shrink ? "0.1s" : "0.15s",
                }}
              >
                {menu.label}
              </Text>
              <Box
                pos="absolute"
                display={isActive(menu.path as string) ? "block" : "none"}
                right={0}
                rounded="10px"
                h="30px"
                w="4px"
                bg={COLORS.PURPLE}
              />
            </Flex>
          );
        })}

        <CardUpgradePro shrink={shrink} />
        <Flex
          bg="white"
          justifyContent="center"
          alignItems="center"
          p="8px"
          w="36px"
          h="36px"
          rounded="full"
          border="1px solid"
          borderColor={COLORS.PURPLE}
          position="absolute"
          right="-35px"
          top="-50px"
          cursor="pointer"
          shadow="md"
          onClick={() => setShrink(!shrink)}
          transform={{
            base: shrink ? "rotate(-180deg)" : "rotate(360deg)",
            xl: shrink ? "rotate(360deg)" : "rotate(-180deg)",
          }}
          transition="ease-in 0.25s"
        >
          <FiArrowRight color={COLORS.PURPLE} size={20} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
