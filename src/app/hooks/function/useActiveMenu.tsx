import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { startCase } from "lodash";
import { DashboardMenu } from "../../config/navigation";

const useActiveMenu = () => {
  const router = useRouter();

  const checkRoutePath = React.useMemo(() => {
    if (router.asPath === `/dashboard/`) {
      return "dashboard";
    } else if (router.pathname === `/data-kendaraan`) {
      return "data-kendaraan";
    }
    return startCase(
      ((router.query.menu as string) || "").replaceAll("-", " ")
    );
  }, [router, router?.query.role]);

  const isActive = useCallback(
    (path: string) => {
      const role = router?.query.role;
      const asPath = router?.asPath;
      const queryMenu = router.query?.menu as string;

      if (path === "/" && asPath === `/dashboard/`) {
        return true;
      }
    },
    [router?.query.role, router?.asPath, router.query?.menu]
  );

  return { checkRoutePath, isActive };
};

export default useActiveMenu;
