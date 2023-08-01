import React from "react";
import Image from "next/image";

interface ISmallCardProps {
  image: string;
  location: string;
  distance: string;
}

const SmallCard: React.FC<ISmallCardProps> = ({
  image,
  distance,
  location,
}) => {
  return (
    <div className="flex items-center m-2 mt-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={image} className="rounded-lg" layout="fill" alt="image" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
