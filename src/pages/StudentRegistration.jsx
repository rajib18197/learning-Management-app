import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

export default function StudentRegistration() {
  return (
    <section className="py-6 bg-primary h-screen grid place-items-center">
      <div className="mx-auto max-w-md px-5 lg:px-0">
        <Logo title="Create Your New Account" />
        <SignupForm />
      </div>
    </section>
  );
}
