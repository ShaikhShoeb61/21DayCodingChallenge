import { useState, useEffect } from "react";

const useLoadPages = () => {
  const [loadmore, setLoadMore] = useState(false);

  const HandleLoadMore = () => {
    setLoadMore((prev) => !prev);
  };

  useEffect(() => {
    setLoadMore(false);
  }, [location.pathname]);

  return { loadmore, HandleLoadMore };
};

export default useLoadPages;
