import { useSearch } from "@horizon-sagala/app/context/searchContext";
import { useCallback, useEffect, useState } from "react";

import DATA_DEVELOPMENT from "@horizon-sagala/app/data/data-dummy-development.json";
import DATA_CHECK from "@horizon-sagala/app/data/data-dummy-check.json";
import DATA_FOURTH from "@horizon-sagala/app/data/data-dummy-fourth.json";
import DATA_COMPLEX from "@horizon-sagala/app/data/data-dummy-complex.json";
import { IDevelopmentTable } from "@horizon-sagala/app/interface/development.interface";
import { ICheckTable } from "@horizon-sagala/app/interface/check-table.interface";
import { IFourth } from "@horizon-sagala/app/interface/fourth-table.interface";
import { IComplex } from "@horizon-sagala/app/interface/complex.interface";

const useDataTables = () => {
  const { searchValue } = useSearch();
  const [listDevelopment, setListDevelopment] = useState<IDevelopmentTable[]>(
    DATA_DEVELOPMENT as IDevelopmentTable[]
  );
  const [listCheck, setListCheck] = useState<ICheckTable[]>();
  const [listFourth, setListFourth] = useState<IFourth[]>();
  const [listComplex, setListComplex] = useState<IComplex[]>();
  const [refetch, setRefetch] = useState(false);

  // GET DEVELOPMENT LIST TABLE
  const getDevelopmentList = useCallback(() => {
    const filtered = DATA_DEVELOPMENT.filter((data) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListDevelopment(filtered as IDevelopmentTable[]);
  }, [searchValue, refetch]);

  // GET CHECK LIST TABLE
  const getCheckList = useCallback(() => {
    const filtered = DATA_CHECK.filter((data) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListCheck(filtered as ICheckTable[]);
  }, [searchValue]);

  // GET 4-COLUMN LIST TABLE
  const getFourthList = useCallback(() => {
    const filtered = DATA_FOURTH.filter((data) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListFourth(filtered as IFourth[]);
  }, [searchValue]);

  // GET COMPLEX LIST TABLE
  const getComplexList = useCallback(() => {
    const filtered = DATA_COMPLEX.filter((data) =>
      data.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListComplex(filtered as unknown as IComplex[]);
  }, [searchValue]);

  return {
    getDevelopmentList,
    getCheckList,
    getFourthList,
    getComplexList,
    listDevelopment,
    listCheck,
    listFourth,
    listComplex,
    refetch,
  };
};

export default useDataTables;
