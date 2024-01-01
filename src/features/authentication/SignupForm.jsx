import ButtonSubmit from "../../ui/ButtonSubmit";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

export default function SignupForm() {
  return (
    <Form>
      <Input type="hidden" name="remember" value="true" />

      <div className="rounded-md shadow-sm -space-y-px">
        <FormRow label="Name">
          <Input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            placeholder="Student Name"
            className="login-input rounded-t-md"
          />
        </FormRow>

        <FormRow label="Email address">
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="login-input"
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="login-input"
          />
        </FormRow>

        <FormRow label="Confirm Password">
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="confirm-password"
            placeholder="Confirm Password"
            className="login-input rounded-b-md"
          />
        </FormRow>
      </div>

      <div>
        <ButtonSubmit>Create Account</ButtonSubmit>
      </div>
    </Form>
  );
}
