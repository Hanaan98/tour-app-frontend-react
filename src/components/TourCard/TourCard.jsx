import React from "react";
import { BiMap } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const TourCard = ({ location, rating, price, desc, img, link }) => {
  return (
    <Link
      to={link}
      className="flex flex-col w-64 rounded-lg border shadow-xl overflow-hidden gap-1 relative"
    >
      <div className="absolute top-1 text-xs right-1 bg-primary text-white px-2 py-1 ">
        Featured
      </div>
      <img src={img} alt="" className="w-full h-52 object-cover" />
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-1">
          <BiMap className="text-secondary" />
          <p className="text-xs">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <AiFillStar className="text-secondary" />
          <p className="text-xs">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-2 mb-2">
        <h3 className="font-bold">{desc}</h3>
        <h3 className="text-secondary font-semibold">
          {price}$<span className="text-xs text-gray-500">/person</span>
        </h3>
      </div>
    </Link>
  );
};

export default TourCard;
