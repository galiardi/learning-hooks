import { Message } from "./Message";
import { useForm } from "../custom-hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="username"
        name="username"
      />
      <input
        type="text"
        value={email}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="email"
        name="email"
      />
      <input
        type="password"
        value={password}
        onChange={onInputChange}
        className="form-control mt-4"
        placeholder="password"
        name="password"
      />
      {username === "pablo" && <Message />}
    </>
  );
};
