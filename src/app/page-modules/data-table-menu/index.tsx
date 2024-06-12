import React from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import DevelopmentSection from "./_sub-modules/development-section";
import CheckSection from "./_sub-modules/check-section";
import FourthColumnSection from "./_sub-modules/fourth-column-section";
import ComplexSection from "./_sub-modules/complex-section";

const DataTableMain: React.FC = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
      ml="-20px"
      w="full"
    >
      <GridItem p="10px" overflowX="auto">
        <DevelopmentSection />
      </GridItem>
      <GridItem p="10px" overflowX="auto">
        <CheckSection />
      </GridItem>

      <GridItem p="10px" overflowX="auto">
        <FourthColumnSection />
      </GridItem>
      <GridItem p="10px" overflowX="auto">
        <ComplexSection />
      </GridItem>
    </Grid>
  );
};

export default DataTableMain;
