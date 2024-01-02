import { useState } from "react";
import AccountIssueLink from "../../ui/AccountIssueLink";
import ButtonSubmit from "../../ui/ButtonSubmit";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "./authApi";

export default function LoginForm() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [login, { isLoading, isError: isLoggingError }] = useLoginMutation();

  function handleBlur(e) {
    if (e.target.name === "email" && !e.target.value.includes("@")) {
      setError((prev) => ({ ...prev, email: "Email must contain @ symbol" }));
    }

    if (e.target.name === "password" && e.target.value.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password must be greater than 6 chars!",
      }));
    }
  }

  function handleChange(e) {
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = { ...info, role: "student" };
      console.log(info);
      await login(user).unwrap();
      setInfo((prev) => ({ ...prev, email: "", password: "" }));
      navigate("/coursePlayer");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
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
            value={info.email}
            onChange={handleChange}
            onBlur={handleBlur}
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
            value={info.password}
            onChange={handleChange}
            onBlur={handleBlur}
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
