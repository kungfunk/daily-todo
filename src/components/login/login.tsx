import classes from "./login.module.css";
import { supabase } from "../../lib/supabase";
import { FormEvent, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await supabase.auth.signInWithOtp({ email });
      if (response.error) {
        throw new Error(error);
      }
    } catch (error: any) {
      setError(error.error_description);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.login}>
      <div>{error}</div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send magic link"}
        </button>
      </form>
    </div>
  );
};
