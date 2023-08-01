import Image from "next/image";
import React from "react";

interface IMediumCardProps {
  image: string;
  title: string;
}

const MediumCard: React.FC<IMediumCardProps> = ({ title, image }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image
          className="rounded-xl"
          src={image}
          layout="fill"
          alt="Medium Card"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
