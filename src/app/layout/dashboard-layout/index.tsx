import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "@horizon-sagala/app/components/sidebar";
import { navbarItem } from "@horizon-sagala/app/components/sidebar/navbar.config";
import Topbar from "@horizon-sagala/app/components/topbar";
import React, { ReactNode } from "react";
import { COLORS } from "../../../../themes/theme";
import Footer from "@horizon-sagala/app/components/footer";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [shrink, setShrink] = React.useState<boolean>(false);
  return (
    <Flex w="full" justifyContent="space-between">
      <Sidebar
        shrink={shrink}
        setShrink={setShrink}
        filteredMenu={navbarItem}
      />
      <Box
        w="full"
        minH="100vh"
        pl={{ base: "0", md: "80px", xl: shrink ? "80px" : "300px" }}
        position="relative"
        id="top"
        transition="all ease-in 0.25s"
      >
        <Flex
          w="full"
          flexDir="column"
          minH="100%"
          pb={{ base: "50px", md: "0" }}
        >
          <Topbar shrink={shrink} />
          <Flex
            mt={{ base: "170px", lg: "100px" }}
            flexDir="column"
            alignItems="center"
            w="full"
            minH="100%"
            overflowX="hidden"
            pl={{ base: "20px", md: "24px" }}
            flexGrow="1"
          >
            {children}
          </Flex>
          <Footer />
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
