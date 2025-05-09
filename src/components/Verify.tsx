import { Input } from '../Styled-components/card';
const Veryfy = () => {
  return (
    <div className=" w-full bg-[var(--White, #FFF);] flex flex-col items-center justify-center h-screen uppercase gap-[20px]">
       <div className='w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]'>
     <p className='self-start text-[var(--Deep-Violet, #21092F)] text-[12px]'>Cardholder Name</p>
      <Input placeholder='e.g. Jane Appleseed'></Input>
      </div>
        <div className='w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]'>
     <p className='self-start text-[var(--Deep-Violet, #21092F)] text-[12px]'>Card Number</p>
      <Input placeholder='e.g. 1234 5678 9123 0000'></Input>
      </div>
          <div className='w-[327px] flex flex-col items-start justify-center gap-[9px] font-[500]'>

     <div className='flex flex-row items-start justify-between gap-[9px]'> 
        <p className='self-start text-[var(--Deep-Violet, #21092F)] text-[12px]'>Exp. Date (MM/YY)</p> 
        <p className='self-start text-[var(--Deep-Violet, #21092F)] text-[12px]'>CVC</p> 
     </div>

<div className='flex flex-row items-start justify-between gap-[9px]'>
      <input className='w-[72px] h-[45px] ' id='in' placeholder='MM'/>
      <input className='w-[72px] h-[45px] ' id='inp' placeholder='YY'/>
      <input className='w-[72px] h-[45px] ' id='inpu' placeholder='e.g. 123'/>
</div> 

 </div>

    <button className='w-[327px] h-[53px] bg-[#21092F] rounded-[8px]  text-white'>Confirm</button>

    </div>
  );
}
export default Veryfy;