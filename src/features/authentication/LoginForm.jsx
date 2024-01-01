import AccountIssueLink from "../../ui/AccountIssueLink";
import ButtonSubmit from "../../ui/ButtonSubmit";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

export default function LoginForm() {
  return (
    <Form>
      <Input type="hidden" name="remember" value="true" />

      <div className="rounded-md shadow-sm -space-y-px">
        <FormRow label="Email address">
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="login-input rounded-t-md"
          />
        </FormRow>

        <FormRow label="Password">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="login-input rounded-b-md"
          />
        </FormRow>
      </div>

      <AccountIssueLink to={"/registration"}>
        Create New Account
      </AccountIssueLink>

      <div>
        <ButtonSubmit>Sign in</ButtonSubmit>
      </div>
    </Form>
  );
}
