export function Reset({ onReset }) {
  return (
    <div>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}
