import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [Percentage1, setPercentage1] = useState(0);
  const [Percentage2, setPercentage2] = useState(0);

  const tip = bill * ((Percentage1 + Percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage Percentage={Percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>

      <SelectPercentage Percentage={Percentage2} onSelect={setPercentage2}>
        How did your Friend like the Service?
      </SelectPercentage>

      <Output bill={bill} tip={tip} />

      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, Percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={Percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Dissatisfied (5%)</option>
        <option value="10">Dissatisfied (10%)</option>
        <option value="20">Dissatisfied (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}
