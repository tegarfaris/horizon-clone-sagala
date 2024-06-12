import { useCallback } from "react";
import { useRouter } from "next/router";

const useActiveMenu = () => {
  const router = useRouter();

  const isActive = useCallback(
    (path: string) => {
      const asPath = router?.asPath;
      const queryMenu = path as string;

      console.log(queryMenu);

      if (asPath === queryMenu) {
        return true;
      }
    },
    [router?.query.role, router?.asPath, router.query?.menu]
  );

  return { isActive };
};

export default useActiveMenu;
