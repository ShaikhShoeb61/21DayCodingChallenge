import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  let [selecteditem, setSelectedItem] = useState([]);

  const HandleSelectedItem = (item) => {
    if (!selecteditem.includes(item)) {
      setSelectedItem((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };

  const HandleRemoveFilterd = (select) => {
    setSelectedItem((prevSelectedItems) =>
      prevSelectedItems.filter((item) => item !== select)
    );
  };

  return (
    <FilterContext.Provider
      value={{ HandleSelectedItem, HandleRemoveFilterd, selecteditem }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};
