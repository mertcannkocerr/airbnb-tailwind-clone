import Image from "next/image";
import React from "react";

interface ILargeCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: React.FC<ILargeCardProps> = ({
  image,
  title,
  description,
  buttonText,
}) => {
  console.log(image);
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src={image}
          alt="largecardimage"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
