import { Card } from "../Styled-components/card";
import React from "react";
import type { InputState, ValidationState } from "../App";
import { R } from "../Styled-components/card";

interface InterfaceProps {
  input: InputState;
  setInput: React.Dispatch<React.SetStateAction<InputState>>;
  validation: ValidationState;
  setValidation: React.Dispatch<React.SetStateAction<ValidationState>>;
}

const Interface: React.FC<InterfaceProps> = ({ input, validation, setValidation }) => {
  return (
    <div className="flex w-full h-[240px] flex-col relative items-center bg-[url('/images/bg-main-mobile.png')] justify-center
         lg:w-[500px] lg:h-screen lg:self-start lg:bg-[url('/images/bg-main-desktop.png')] lg:bg-cover lg:bg-no-repeat lg:justify-around">
      <Card>
        <img className="self-start" id="bg" src="/images/Group 8.svg" alt="" />
        <p className="text-[18px] text-center text-white" id="num">{input.cardNumber}</p>
        <div className="wrap">
          <span className="text-[9px] text-white">{input.cardHolder}</span>
          <span className="text-[9px] text-white">{input.expMonth}/{input.expYear}</span>
        </div>
      </Card>
      <R>
        <div className="w-full bg-[#2F2F2F] h-[35px]"></div>
        <div className="w-[230px] h-[30px] bg-[#ADB5BE]" id="rectangle">
          <span className="text-[12px] text-center text-white" id="cvc">{input.cvc}</span>
        </div>
      </R>
    </div>
  );
};

export default Interface;
