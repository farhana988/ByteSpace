import { AuthShell } from "@/components/auth/AuthShell";
import { AuthForm } from "@/components/forms/AuthForm";


export default function SigninPage() {
  return (
    <AuthShell
      variant="signin"
      eyebrow="Sign In"
      title="Welcome Back"
    >
      <AuthForm mode="signin" />
    </AuthShell>
  );
}
