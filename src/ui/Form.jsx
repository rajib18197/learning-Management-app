export default function Form({ children }) {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      {children}
    </form>
  );
}
