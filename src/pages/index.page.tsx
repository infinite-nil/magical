import { useUser, Auth } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";

export default function Home() {
  const { user, error } = useUser();

  return (
    <>
      {!user && (
        <div className="w-60">
          {error && <p>{error.message}</p>}
          <Auth
            supabaseClient={supabaseClient}
            providers={["github"]}
            socialLayout="horizontal"
            onlyThirdPartyProviders
          />
        </div>
      )}
    </>
  );
}
