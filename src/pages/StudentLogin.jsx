import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

export default function StudentLogin() {
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <Logo title="Sign in to Student Account" />
        <LoginForm />
      </div>
    </section>
  );
}
