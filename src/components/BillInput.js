import { Typography } from "@mui/material";

export function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <Typography variant="label" component={"label"}>
        How much was the bill?
      </Typography>

      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
