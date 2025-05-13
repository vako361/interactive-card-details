// Removed unused import
import React from "react";
import type { InputState } from "../App";
import type { ValidationState } from "../App";

interface Props {
  input: InputState;
  setInput: React.Dispatch<React.SetStateAction<InputState>>;
  validation: ValidationState;
  setValidation: React.Dispatch<React.SetStateAction<ValidationState>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}
const Verify: React.FC<Props> = ({ input, setInput, validation, setValidation, setSubmitted}) => {
  const handleClick = () => {
    const isCardHolderValid = input.cardHolder.trim() !== "";
    const isCardNumberValid = !isNaN(input.cardNumber ?? 0) && String(input.cardNumber ?? "").trim().length === 16;
    const isExpMonthValid = input.expMonth != null && input.expMonth > 0 && input.expMonth <= 12;
    const isExpYearValid = input.expYear !== 0;
    const isCvcValid = String(input.cvc).trim().length === 3;
   if (isCardHolderValid && isCardNumberValid && isExpMonthValid && isExpYearValid && isCvcValid) {
      setSubmitted(true);
    }
    setValidation((prevValidation) => ({
      ...prevValidation,
      cardHolder: isCardHolderValid,
      cardNumber: isCardNumberValid,
      expMonth: isExpMonthValid,
      expYear: isExpYearValid,
      cvc: isCvcValid,
    }));
  };
return (
  <div className="w-full bg-[var(--White)] flex flex-col items-center justify-center h-screen uppercase gap-[20px]">
      <div className="w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]">
        <p className="self-start text-[var(--Deep-Violet, #21092F)] text-[12px]">Cardholder Name</p>
        <input
          className="w-full"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => setInput({ ...input, cardHolder: e.target.value })}
        />
        {!validation.cardHolder ? <span className="text-[12px] font-[500] text-[#FF5050]">Wrong format</span> : null}
      </div>
      <div className="w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]">
        <p className="self-start text-[var(--Deep-Violet, #21092F)] text-[12px]">Card Number</p>
        <input
          className="w-full"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => setInput({ ...input, cardNumber: parseInt(e.target.value) || 0 })}
        />
        {!validation.cardNumber ? <span className="text-[12px] font-[500] text-[#FF5050]">Wrong format, numbers only</span> : null}
      </div>
      <div className="w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]">
        <div className="flex flex-row items-start justify-between gap-[9px]">
          <p className="self-start text-[var(--Deep-Violet, #21092F)] text-[12px]">Exp. Date (MM/YY)</p>
          <p className="self-start text-[var(--Deep-Violet, #21092F)] text-[12px]">CVC</p>
        </div>
        <div className="flex flex-row items-start justify-between gap-[9px]">
          <div className="flex flex-col items-start justify-between gap-[9px]">
          <input
            className="w-[72px] h-[45px]"
            placeholder="MM"
            onChange={(e) => setInput({ ...input, expMonth: parseInt(e.target.value) || 0 })}
          />
          {!validation.expMonth && !validation.expYear ? <span className="text-[12px] font-[500] text-[#FF5050]">Can’t be blank</span> : null}
          </div>
          <input
            className="w-[72px] h-[45px]"
            placeholder="YY"
            onChange={(e) => setInput({ ...input, expYear: parseInt(e.target.value) || 0 })}
          />
          <div className="flex flex-col items-start justify-between gap-[9px]">
          <input
            className="w-[191px] h-[45px]"
            placeholder="e.g. 123"
            onChange={(e) => setInput({ ...input, cvc: parseInt(e.target.value) || 0 })}
          />
             {!validation.cvc ? <span className="text-[12px] font-[500] text-[#FF5050]">Can’t be blank</span> : null}
          </div>
        </div>
      </div>
      <button
        className="w-[327px] h-[53px] bg-[#21092F] rounded-[8px] text-white hover:cursor-pointer"
        onClick={handleClick}
      >
        Confirm
      </button>
    </div>
  );
};

// Removed duplicate return block and replaced Input with input
export default Verify;