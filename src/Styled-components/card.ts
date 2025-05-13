import styled from "styled-components";

export const Card = styled.div`
width: 285px;
height: 156.208px;
border-radius: 6px;
background: linear-gradient(164deg, #6348FE 4.74%, #610595 88.83%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
top: 126px;
left: 17px;
@media (min-width: 1024px) {
 left: 130px;
 top: 187px;

}
  `
export const Input = styled.input`
width: 327px;
height: 45px;
border-radius: 8px;
border: 1px solid var(--Light-Grey, #DFDEE0);
background: var(--White, #FFF);
padding-left: 16px;
`
export const R = styled.div`
width: 286px;
height: 157px;
border-radius: 10px;
background: linear-gradient(169deg, #FFF 5%, #D2D3D9 91.69%);
padding-top: 15px;
display: flex;
flex-direction: column;
align-items: center;

`