import { createContext } from "react";
import { useState, useEffect } from "react";

export const FetchContext = createContext();

export const FetchProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        setTimeout(() => {
          setData(result);
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <FetchContext.Provider value={data}>{props.children}</FetchContext.Provider>
  );
};
