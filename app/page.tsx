'use client';
import { useState } from 'react';

const InputRow = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex items-center gap-4">
      
      <label className="text-4xl font-bold text-[#EEEEEE] w-24">{label}</label>
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        
        className="w-full bg-[#393E46] text-[#EEEEEE] text-2xl font-bold p-3 text-center rounded-sm outline-none placeholder-[#EEEEEE]/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-[#393E46] focus:border-[#00ADB5] transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
};


const ResultRow = ({ label, value }) => {
  return (
    <div className="flex items-center gap-4">
      
      <label className="text-3xl font-bold text-[#EEEEEE] whitespace-nowrap w-40 text-right">
        {label}
      </label>
      
      <div className="w-full bg-[#EEEEEE] text-[#222831] text-3xl font-bold p-4 text-center rounded-sm shadow-[0_0_10px_rgba(0,173,181,0.3)]">
        {value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
};



export default function Home() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [results, setResults] = useState({ tip: 0, total: 0 });

  const handleCalculate = () => {
    const billAmount = parseFloat(bill) || 0;
    const tipPercent = parseFloat(tipPercentage) || 0;

    const tipAmount = billAmount * (tipPercent / 100);
    const totalAmount = billAmount + tipAmount;

    setResults({
      tip: tipAmount,
      total: totalAmount,
    });
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#222831] p-4">
      
      
      <h1 className="text-5xl font-bold text-[#00ADB5] mb-10 tracking-wider drop-shadow-lg">
        Tip Calculator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        <div className="space-y-8">
          <InputRow
            label="Bill"
            value={bill}
            onChange={setBill}
            placeholder="100.00"
          />

          <InputRow
            label="Tip %"
            value={tipPercentage}
            onChange={setTipPercentage}
            placeholder="10"
          />

          <div className="pl-28 pt-4">
            <button
              onClick={handleCalculate}
              
              className="w-full bg-[#00ADB5] hover:bg-[#00ADB5]/80 text-[#EEEEEE] text-2xl font-bold py-4 rounded-sm shadow-lg transition-all active:scale-95"
            >
              CALCULATE
            </button>
          </div>
        </div>

        
        <div className="space-y-6 flex flex-col justify-center pt-2 md:border-l md:border-[#393E46] md:pl-8">
          <ResultRow label="Tip Total" value={results.tip} />
          <ResultRow label="Bill Total" value={results.total} />
        </div>
      </div>
    </div>
  );
}