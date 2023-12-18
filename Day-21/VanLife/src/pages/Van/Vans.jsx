import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVans } from "../../Redux/Slices/Thunks/vansThunk";
import TypeComponent from "../../components/TypeComponent";

const Vans = () => {
  const dispatch = useDispatch();
  const vans = useSelector((state) => state.vans);
  const vanData = Object.values(vans.vans);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    dispatch(getVans());
  }, [dispatch]);

  const displayFilteredVans = typeFilter
    ? vanData.filter((van) => van.type === typeFilter)
    : vanData;

  return (
    <>
      <div className="min-h-[calc(100vh-148px)] flex flex-col gap-11 py-11">
        <div className="flex gap-5 items-center w-full justify-center">
          <button
            onClick={() => setSearchParams({ type: "simple" })}
            className="rounded-md px-7 py-2 bg-primarylight text-lightgrey active: text-base font-semibold font-Nunito  hover:bg-simple hover:text-white active:bg-simple active:text-whit"
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: "luxury" })}
            className="rounded-md px-7 py-2 bg-primarylight text-lightgrey text-base font-semibold font-Nunito  hover:bg-luxury hover:text-white active:bg-luxury active:text-white"
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: "rugged" })}
            className="rounded-md px-7 py-2 bg-primarylight text-lightgrey text-base font-semibold font-Nunito hover:bg-rugged hover:text-white active:bg-rugged active:text-white"
          >
            Rugged
          </button>

          <span
            onClick={() => setSearchParams({})}
            className="text-lightgrey font-semibold text-base"
          >
            Clear filters
          </span>
        </div>
        <div className="flex flex-wrap gap-7 justify-center items-center">
          {vans.loading === true ? (
            <h1>Loading</h1>
          ) : (
            displayFilteredVans.map((van) => (
              <Link to={`${van.id}`} key={van.id}>
                <div>
                  <img
                    className="w-56 rounded-md"
                    src={van.imageUrl}
                    alt="example"
                  />
                  <div className="flex justify-between mt-1">
                    <div>
                      <span className="text-xl font-semibold">{van.name}</span>
                      <TypeComponent type={van.type} />
                    </div>
                    <div className="mt-1 flex flex-col">
                      <span className="text-sm font-bold">{van.price}$</span>
                      <span className="text-xs font-bold">/day</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Vans;
