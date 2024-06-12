import { Text } from "@chakra-ui/react";
import DataTableMain from "@horizon-sagala/app/page-modules/data-table-menu";
import { startCase } from "lodash";
import { useRouter } from "next/router";
import React from "react";

const Menu: React.FC = () => {
  const router = useRouter();
  const activeMenu = startCase(router.query.menu?.toString().replace("-", " "));

  switch (router.query.menu) {
    case "data-table":
      return <DataTableMain />;
    default:
      return (
        <Text mt="20%" fontFamily="dm_sans" fontSize="30px" fontWeight={700}>
          Coming Soon ! {activeMenu}
        </Text>
      );
  }
};

export default Menu;
