import "./Header.scss";

export default function Header({ heading, className }) {
  return <header className={`meds-header ${className}`}>{heading}</header>;
}
