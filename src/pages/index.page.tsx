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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
