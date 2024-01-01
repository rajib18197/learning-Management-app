export default function FormRow({ label, children, error }) {
  return (
    <div>
      {label && (
        <label htmlFor={children.props.id} className="sr-only">
          {label}
        </label>
      )}

      {children}

      {error && (
        <span style={{ fontSize: "1.4rem", color: "red" }}>{error}</span>
      )}
    </div>
  );
}
