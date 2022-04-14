import "@ui/global.css";

import { UserProvider } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from "@supabase/supabase-auth-helpers/nextjs";
import { Layout } from "@ui/components";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
