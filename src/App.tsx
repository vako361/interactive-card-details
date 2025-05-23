import Interface from './components/Interface';
import './App.css';
import { useState } from 'react';
import Verify from './components/Verify';
import Sumbited from './components/Submited';

export interface InputState {
  cardNumber: number | null;
  cardHolder: string;
  expMonth: number | null;
  expYear: number | null;
  cvc: number | null;
}
export interface ValidationState {
  cardNumber: boolean;
  cardHolder: boolean;
  expMonth: boolean;
  expYear: boolean;
  cvc: boolean;
}

function App() {
  const [input, setInput] = useState<InputState>({
    cardNumber: null,
    cardHolder: "",
    expMonth: null,
    expYear: null,
    cvc: null,
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validation, setValidation] = useState<ValidationState>({
    cardNumber: true,
    cardHolder: true,
    expMonth: true,
    expYear: true,
    cvc: true,
  });


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center lg:flex-row lg:justify-between">
      <Interface input={input} setInput={setInput} validation={validation} setValidation={setValidation} />
     {!submitted && <Verify input={input} setInput={setInput} validation={validation} setValidation={setValidation} 
      submitted={submitted} setSubmitted={setSubmitted} />}
     {submitted && <Sumbited />}
    </div>
  );
}


export default App;
