import "./Input.scss";

export default function Input({ className, type, label, onInput }) {
  return (
    <input
      className={`meds-input ${className}`}
      type={type}
      placeholder={label}
      onInput={(e) => onInput(e.currentTarget.value)}
      required={true}
    />
  );
}
