import DataTableMain from "@horizon-sagala/app/page-modules/data-table-menu";
import { useRouter } from "next/router";
import React from "react";

const Menu: React.FC = () => {
  const router = useRouter();

  switch (router.query.menu) {
    case "data-table":
      return <DataTableMain />;
    default:
      return <>Coming Soon</>;
  }
};

export default Menu;
