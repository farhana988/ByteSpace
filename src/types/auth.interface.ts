export interface AuthShellProps {
  eyebrow: string;
  title: React.ReactNode;
  variant: "signup" | "signin";
  children: React.ReactNode;
}
export type AuthFormProps = {
  mode: "signin" | "signup";
};