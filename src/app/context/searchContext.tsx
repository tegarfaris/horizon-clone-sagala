import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context types
interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

// Create the context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create a provider component
export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

// Create a custom hook to use the search context
export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
