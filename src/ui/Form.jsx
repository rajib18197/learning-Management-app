export default function Form({ onSubmit, children }) {
  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
