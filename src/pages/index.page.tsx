import { supabase } from "../services/supabase";

export default function Home() {
  async function handleLogin() {
    await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        scopes:
          "repo gist notifications admin:org user delete_repo write:discussion admin:enterprise",
      }
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
