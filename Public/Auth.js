import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";

const { Text } = Typography

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://imdvvfcbtrfewysxgrnr.supabase.co",
  "public-anon-key"
);

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Text>Signed in: {user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function Home() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Auth providers={['facebook', 'github']}/>
    </Auth.UserContextProvider>
  );
};
