import { useCallback } from "react";
import { useRouter } from "next/router";

const useActiveMenu = () => {
  const router = useRouter();

  const isActive = useCallback(
    (path: string) => {
      const asPath = router?.asPath;
      const queryMenu = path as string;

      if (asPath === queryMenu) {
        return true;
      }
    },
    [router?.asPath]
  );

  return { isActive };
};

export default useActiveMenu;
