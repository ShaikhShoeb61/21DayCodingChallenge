import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHostVans } from "../../Redux/Slices/Thunks/vansThunk";
import { Link } from "react-router-dom";

const Van = () => {
  const dispatch = useDispatch();
  const { vans: vanData, loading } = useSelector((state) => state.vans);


  useEffect(() => {
    dispatch(getHostVans());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        vanData.map((van) => (
          <Link className="w-full" to={`${van.id}/details`} key={van.id}>
            <div className="w-full px-6 py-[1.12rem] rounded-0.125rem flex justify-between items-center border-[1px] rounded-[0.37rem]">
              <div className="flex items-center gap-4">
                <img
                  className="w-[4.12rem] round-[0.31rem]"
                  src={van.imageUrl}
                  alt="van"
                />
                <div className="flex flex-col items-start">
                  <span className="text-xl font-semibold">{van.name}</span>
                  <span className="text-base font-medium">
                    ${van.price}/day
                  </span>
                </div>
              </div>
              <span className="text-base font-medium">Edit</span>
            </div>
          </Link>
        ))
      )}
    </>
  );
};

export default Van;
