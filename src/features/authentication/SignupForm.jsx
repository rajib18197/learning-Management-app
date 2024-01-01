import { useState } from "react";
import ButtonSubmit from "../../ui/ButtonSubmit";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignupMutation } from "../../store/api/apiSlice";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "test",
    email: "test@gmail.com",
    password: "test1234",
    confirmPassword: "test1234",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signup, { isLoading, isError, error: signupError }] =
    useSignupMutation();

  function handleBlur(e) {
    if (e.target.name === "name" && e.target.value === "") {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "This field is required",
      }));
    }

    if (e.target.name === "email" && !e.target.value.includes("@")) {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "Email must contains @",
      }));
    }

    if (e.target.name === "password" && e.target.value.length < 6) {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "Password must be greater than 6 chars!",
      }));
    }

    if (
      e.target.name === "confirmPassword" &&
      e.target.value !== info.password
    ) {
      setError((prev) => ({
        ...prev,
        [e.target.name]: "password needs to match!",
      }));
    }
  }

  function handleChange(e) {
    setError((prev) => ({ ...prev, [e.target.name]: "" }));
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: info.name,
      email: info.email,
      password: info.password,
      role: "student",
    };

    console.log(newUser);

    try {
      const data = await signup(newUser).unwrap();
      console.log(data);

      setInfo((prev) => ({
        ...prev,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));

      navigate("/");
    } catch {
      console.error(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="hidden" name="remember" value="true" />

      <div className="rounded-md shadow-sm -space-y-px">
        <FormRow label="Name" error={error?.name}>
          <Input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            placeholder="Student Name"
            className="login-input rounded-t-md"
            value={info.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormRow>

        <FormRow label="Email address" error={error?.email}>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className="login-input"
            value={info.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormRow>

        <FormRow label="Password" error={error?.password}>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="login-input"
            value={info.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormRow>

        <FormRow label="Confirm Password" error={error?.confirmPassword}>
          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="confirm-password"
            placeholder="Confirm Password"
            className="login-input rounded-b-md"
            value={info.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormRow>
      </div>

      {isError && <div>{signupError || "Signup Error"}</div>}

      <div>
        <ButtonSubmit>
          {isLoading ? "Signing up" : "Create Account"}
        </ButtonSubmit>
      </div>
    </Form>
  );
}
