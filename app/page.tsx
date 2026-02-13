'use client';
import { useState } from 'react';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Tip Calculator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
        
        <div className="space-y-6">
          
          
          <div className="flex items-center gap-4">
            <label className="text-4xl font-bold text-black w-24">bill</label>
            <input
              type="number"
              step="0.01"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              
              className="w-full bg-yellow-400 text-black text-2xl font-bold p-3 text-center rounded-sm outline-none placeholder-gray-600/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="100.00"
            />
          </div>

          \
          <div className="flex items-center gap-4">
            <label className="text-4xl font-bold text-black w-24">Tip</label>
            <div className="relative w-full">
              <input
                type="number"
                step="0.01"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                
                className="w-full bg-sky-300 text-black text-2xl font-bold p-3 text-center rounded-sm outline-none placeholder-gray-600/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="ระบุ %"
              />
            </div>
          </div>

          
          <div className="pl-28"> 
             <button
              onClick={handleCalculate}
              className="w-full bg-teal-200 hover:bg-teal-300 text-black text-2xl font-bold py-4 rounded-sm shadow-sm transition-colors"
            >
              Calculate
            </button>
          </div>
        </div>

      
        <div className="space-y-6 flex flex-col justify-start pt-2">
          
          <div className="flex items-center gap-4">
            <label className="text-3xl font-bold text-black whitespace-nowrap w-40 text-right">Tip Total</label>
            <div className="w-full bg-pink-200 text-black text-3xl font-bold p-4 text-center rounded-sm">
              {results.tip.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-3xl font-bold text-black whitespace-nowrap w-40 text-right">Bill Total</label>
            <div className="w-full bg-pink-200 text-black text-3xl font-bold p-4 text-center rounded-sm">
              {results.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}