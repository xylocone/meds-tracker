// Internal dependencies
import "./Button.scss";

export default function Button({ children, style, className }) {
  return (
    <button className={`meds-button ${className}`} style={style}>
      {children}
    </button>
  );
}
