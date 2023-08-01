import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="">How airbnb works</p>
        <p className="">Newsroom</p>
        <p className="">Investors</p>
        <p className="">Airbnb Plus</p>
        <p className="">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="">Accessibility</p>
        <p className="">This is not a real site</p>
        <p className="">It is pretty awesome</p>
        <p className="">Referrals accepted</p>
        <p className="">Papafam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="">How airbnb works</p>
        <p className="">Newsroom</p>
        <p className="">Investors</p>
        <p className="">Airbnb Plus</p>
        <p className="">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="">Papa React</p>
        <p className="">Presents</p>
        <p className="">Zero to Full Stack Hero</p>
        <p className="">Hundreds of Students</p>
        <p className="">Join Now</p>
      </div>
    </div>
  );
};

export default Footer;
