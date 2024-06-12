import React, { useEffect, useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import DevelopmentSection from "./_sub-modules/development-section";
import CheckSection from "./_sub-modules/check-section";
import FourthColumnSection from "./_sub-modules/fourth-column-section";
import ComplexSection from "./_sub-modules/complex-section";

import { useSearch } from "@horizon-sagala/app/context/searchContext";
import { IDevelopmentTable } from "@horizon-sagala/app/interface/development.interface";
import { IComplex } from "@horizon-sagala/app/interface/complex.interface";
import { IFourth } from "@horizon-sagala/app/interface/fourth-table.interface";
import { ICheckTable } from "@horizon-sagala/app/interface/check-table.interface";
import useDataTables from "@horizon-sagala/app/hooks/function/useDataTables";

const DataTableMain: React.FC = () => {
  const {
    getDevelopmentList,
    getCheckList,
    getComplexList,
    getFourthList,
    listDevelopment,
    listCheck,
    listComplex,
    listFourth,
    refetch,
  } = useDataTables();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      getDevelopmentList();
      getCheckList();
      getComplexList();
      getFourthList();
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [getDevelopmentList, refetch]);

  return (
    <Grid
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
      ml="-20px"
      w="full"
    >
      <GridItem p="10px" overflowX="auto">
        <DevelopmentSection datas={listDevelopment} loading={loading} />
      </GridItem>
      <GridItem p="10px" overflowX="auto">
        <CheckSection datas={listCheck as ICheckTable[]} loading={loading} />
      </GridItem>

      <GridItem p="10px" overflowX="auto">
        <FourthColumnSection
          datas={listFourth as IFourth[]}
          loading={loading}
        />
      </GridItem>
      <GridItem p="10px" overflowX="auto">
        <ComplexSection datas={listComplex as IComplex[]} loading={loading} />
      </GridItem>
    </Grid>
  );
};

export default DataTableMain;
