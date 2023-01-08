import "./SelectInput.scss";

export default function SelectInput({ className, options, onChange }) {
  return (
    <select
      className={`meds-select ${className}`}
      onChange={(e) =>
        onChange(
          e.currentTarget.value,
          e.currentTarget.selectedOptions[0].label
        )
      }
      defaultValue="select"
    >
      <option value="select" disabled={true}>
        Select
      </option>
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
