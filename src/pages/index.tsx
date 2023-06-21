/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HexColorPicker } from "react-colorful";
import { getRGBColor } from "../utils/colors.utils";

const imgSrc =
  "https://production-pp-authenticator.s3.amazonaws.com/avatar-logos/8072-1633933519.jpg?AWSAccessKeyId=AKIA35ONTX7STMYYSJZA&Signature=xKHlXY3GtNXid0p5aEkbpQgDrRc%3D&Expires=1687408530";

function PpWelcome() {
  return (
    <div>
      <div className="shadow-md rounded border-none p-5 flex flex-row bg-white-1 max-w-[550px]">
        <img
          src={imgSrc}
          alt="Avatar"
          className="w-[80px] h-[80px] rounded-[50%]"
        />
        <div className="px-4 flex flex-col justify-center text-pp-orange">
          <p>Welcome to Parcel Perform,</p>
          <p className="font-bold">Trung Duong (Production)</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-white-1 shadow-xl rounded-2xl w-[550px] relative p-4">
      {/* Avatar */}
      <img
        src={imgSrc}
        alt="Avatar"
        className="w-[100px] h-[100px] rounded-[50%] absolute top-[-50px] left-[50%] transform translate-x-[-50%]"
      />
      <div className="w-full h-[50px]" />

      {/* Info */}
      <div className="text-center">
        <div className="flex flex-row justify-center items-center">
          <p className="text-primary m-2 font-medium text-3xl text-gray-500">
            Jane Cooper
          </p>
          <div className="bg-primary w-[40px] h-[40px] rounded-[50%] flex justify-center items-center text-white-1">
            👋🏻
          </div>
        </div>
        <p className="m-2 font-medium text-xl text-black-1">Web Developer</p>
        <p className="font-light">
          An optional overview about this person as a quick bio.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const handleColorChange = (color: string) => {
    const customHead = document.getElementById("custom-color");
    if (customHead) {
      customHead.innerHTML = `
        :root {
          ${getRGBColor(color, "primary")}
        }
      `;
    }
  };

  return (
    <div>
      <div className="p-9 bg-surface-3 flex flex-col gap-y-20">
        <PpWelcome />
        <div className="flex flex-row justify-between gap-x-5 w-[900px]">
          <InfoCard />
          <div className="bg-white-1 p-4 rounded-xl flex flex-col">
            <p className="pb-2">Pick a color</p>
            <HexColorPicker color="#2079FF" onChange={handleColorChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
