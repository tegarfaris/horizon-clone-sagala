import { Box, ChakraProvider } from "@chakra-ui/react";
import { NextPageWithLayout } from "@horizon-sagala/app/interface/main.interface";
import { useRouter } from "next/router";
import React from "react";
import Splash from "@horizon-sagala/app/components/splash";

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();

  // logic for show splash and then go to login or dashboard here
  React.useEffect(() => {
    setTimeout(() => {
      if (router.asPath === "/") {
        router.replace(`/dashboard/data-table`);
      }
    }, 1000);
  }, [router]);

  return (
    <Box>
      <Splash />
    </Box>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <ChakraProvider>{page}</ChakraProvider>;
};
