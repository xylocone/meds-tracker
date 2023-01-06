// Internal dependencies
import "./Button.scss";

export default function Button({ children, style }) {
  return (
    <button className="meds-button" style={style}>
      {children}
    </button>
  );
}
