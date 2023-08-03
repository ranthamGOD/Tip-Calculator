import { useState } from "react";
import { Reset } from "./Reset";
import { Output } from "./Output";
import { SelectPercentage } from "./SelectPercentage";
import { BillInput } from "./BillInput";
import { Typography } from "@mui/material";

export function TipCalculator() {
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
        How did you like the service ?
      </SelectPercentage>

      <SelectPercentage Percentage={Percentage2} onSelect={setPercentage2}>
        How did your Friend like the Service ?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
