import { Typography } from "@mui/material";

export function SelectPercentage({ children, Percentage, onSelect }) {
  return (
    <div>
      <Typography component={"label"}>{children}</Typography>

      <select
        value={Percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">dissatisfied (0%)</option>
        <option value="5">Dissatisfied (5%)</option>
        <option value="10">Dissatisfied (10%)</option>
        <option value="20">Dissatisfied (20%)</option>
      </select>
    </div>
  );
}
