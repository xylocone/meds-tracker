// Internal dependencies
import "./Button.scss";

export default function Button({ children, style, className, onClick }) {
  return (
    <button
      className={`meds-button ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
