import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@horizon-sagala/app/components/sidebar";
import { navbarItem } from "@horizon-sagala/app/components/sidebar/navbar.config";
import Topbar from "@horizon-sagala/app/components/topbar";
import React, { ReactNode } from "react";

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [shrink, setShrink] = React.useState<boolean>(false);
  return (
    <Flex inset={0} justifyContent="space-between">
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
        <Flex flexDir="column" minH="100%" pb={{ base: "50px", md: "0" }}>
          <Topbar />
          <Flex
            mt="100px"
            flexDir="column"
            w="100%"
            minH="100%"
            overflowY="hidden"
            p={{ base: "20px", md: "24px" }}
            flexGrow="1"
          >
            {children}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
