import { useState } from "react";
import { useRecoilState } from "recoil";
import { testState } from "../recoilState/recoilState";

export default function TestElement(): JSX.Element {
  const [text, setText] = useRecoilState(testState);

  return (
    <>
      <p
        onClick={() => {
          setText((prev) => !prev);
        }}
        className="text-white bg-black/50 backdrop-blur-sm  w-[15vw] text-center rounded-full  py-2 select-none cursor-pointer font-bold font-kufiM "
      >
        {text ? "TRUE state 🌑" : "FALSE state 🌞"}
      </p>
    </>
  );
}
