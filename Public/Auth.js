import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";

const { Text } = Typography

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://imdvvfcbtrfewysxgrnr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg"
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
