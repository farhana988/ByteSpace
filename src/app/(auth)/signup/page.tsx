import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/forms/AuthForm";

export default function SignupPage() {
  return (
    <AuthShell
      variant="signup"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to
          <br />
          ByteSpace
        </>
      }
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
