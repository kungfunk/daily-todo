import { FormEvent, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Avatar } from "../avatar";
import classes from "./login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
  const client = useSupabaseClient();
  const defaultAvatarSeed = "asdafewqropz";

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await client.auth.signInWithOtp({ email });
      if (response.error) {
        throw new Error(error);
      }
    } catch (error: any) {
      setError(error.error_description);
    } finally {
      setIsLoading(false);
      setIsEmailSent(true);
    }
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <h1 className={classes.jumbo}>
            daily
            <br />
            to-do
          </h1>
        </div>
        <div className={classes.content}>
          <div className={classes.login}>
            <Avatar
              className={classes.avatar}
              seed={email || defaultAvatarSeed}
              size="big"
              alt="This is your avatar"
              title="This is your avatar"
            />
            {!isEmailSent ? (
              <>
                <h2 className={classes.title}>Hello!</h2>
                <p className={classes.subtitle}>
                  Pssst... enter your email and receive a magic link, no
                  passwords needed! 🤫
                </p>
              </>
            ) : (
              <>
                <h2 className={classes.title}>Hurray!</h2>
                <p>
                  📬 Email sent! please check your email and click in the link
                  to access your <i> daily to-do.</i>
                </p>
              </>
            )}
            {!isEmailSent && (
              <form className={classes.form} onSubmit={handleOnSubmit}>
                {error && <div>{error}</div>}
                <input
                  className={classes.input}
                  id="email"
                  type="email"
                  placeholder="your-email@example.com"
                  value={email}
                  disabled={isLoading}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={classes.button}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send magic link"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
