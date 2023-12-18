import React, { useEffect } from "react";
import TypeComponent from "../../components/TypeComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { getVan } from "../../Redux/Slices/Thunks/vansThunk";
import { useParams } from "react-router-dom";
import BackNavigation from "../../components/feature/BackNavigation";
import { Link } from "react-router-dom";

const VansDetails = () => {
  const van = useSelector((state) => state.vans.vans);
  const dispatch = useDispatch();
  const { vanId } = useParams();

  useEffect(() => {
    dispatch(getVan(vanId));
  }, [dispatch, vanId]);

  return (
    <div className="min-h-[calc(100vh-148px)] px-7 flex flex-col gap-6 py-9">
      <Link to=".." relative="path">
        <BackNavigation />
      </Link>
      <img className="w-[31.0625rem] rounded-md" src={van.imageUrl} alt="van" />
      <TypeComponent type={van.type} />
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[2rem] font-bold leading-8">{van.name}</h1>
        <span className="text-base font-normal leading-8 underline underline-offset-[3px] capitalize">
          NeonVans
        </span>
      </div>
      <span className="text-xl font-medium leading-[2.7rem]">
        ${van.price}/day
      </span>
      <p className="text-base font-medium leading-6">{van.description}</p>
      <ButtonComponent text="Rent this van" />
    </div>
  );
};

export default VansDetails;
