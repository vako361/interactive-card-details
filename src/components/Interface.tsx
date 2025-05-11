import { Card } from "../Styled-components/card";
const Interface = () => {   
    return (
        <div className="flex w-full h-[240px] flex-col relative items-center bg-[url('/images/bg-main-mobile.png')]  justify-center
         lg:w-[500px] lg:h-screen lg:self-start lg:bg-[url('/images/bg-main-desktop.png')] lg:bg-cover lg:bg-no-repeat lg:justify-around">
        <Card> 
            <img className="self-start " id="bg" src="/images/Group 8.svg" alt="" />
            <p className="text-[18px] text-center text-white" id="num">0000 0000 0000 0000</p>
            <div className="wrap">
              <span className="text-[9px] text-white ">JANE APPLESEED</span>
              <span className="text-[9px] text-white">00/00</span>
            </div>
        </Card>
        <img className="w-[286px] h-[157px] bg-[linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%)]"id="r-card" src="/images/bg-card-back.png" alt="" />
        </div>
    );
}
export default Interface;