import { forwardRef } from "react";

const Input = forwardRef(function ({ id, type, placeholder, ...props }, ref) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...props}
      required
      ref={ref}
    />
  );
});

export default Input;
