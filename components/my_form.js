import { ValidationError, useForm } from "@statickit/react";

function MyForm() {
  const [state, submit] = useForm({
    id: "e5bbf05ac055"
  });

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default MyForm;
