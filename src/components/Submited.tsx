const Sumbited = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-[20px]" id="submitted" >
      <img src="/images/icon-complete.svg" alt="A checkmark icon inside a circle, symbolizing completion or success, with a clean and minimalistic design" />
      <h1 className="text-[28px] font-[500] tracking-[3.422px] ">THANK YOU!</h1>
      <p className="text-[18px] font-[500] text-[#8F8694]">We’ve added your card details</p>
      <button className="w-[327px] h-[53px] bg-[#21092F] rounded-[8px] text-white hover:cursor-pointer">Continue</button>
    </div>
  );
}
export default Sumbited;