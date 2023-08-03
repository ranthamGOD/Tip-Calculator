export function BillInput({ bill, onSetBill }) {
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
