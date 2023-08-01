export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput> How much was the bill?</BillInput>
      <Percentage>How did you like the service? </Percentage>
      <Percentage>How did your Friend like the Service? </Percentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput({ children }) {
  return (
    <div>
      {children}
      <input type="text" name="bill" placeholder="Bill" />
    </div>
  );
}

function Percentage({ children }) {
  return (
    <div>
      {children}
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Dissatisfied (5%)</option>
        <option value="10">Dissatisfied (10%)</option>
        <option value="20">Dissatisfied (20%)</option>
      </select>
    </div>
  );
}

function Output() {}

function Reset() {}
