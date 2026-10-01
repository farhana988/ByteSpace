import Link from "next/link";
import { LearningPreview } from "./LearningPreview";
import Image from "next/image";
import { AuthShellProps } from "@/types/auth.interface";

export function AuthShell({
  eyebrow,
  title,
  variant,
  children,
}: AuthShellProps) {
  const isSignup = variant === "signup";

  return (
    <main
      className="relative min-h-screen h-full overflow-hidden text-white bg-secondary mb-[120px]
          bg-[url('/images/bg/auth_bg.png')] bg-top-left bg-contain bg-no-repeat max-w-360 mx-auto"
    >
      <div className="relative mx-auto grid w-full max-w-300 mx-auto px-6 xl:px-0 ">
        {/*  top */}
        <section className="relative">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 pt-[35px] pb-[40px] `}
          >
            <div className="relative ">
              <Image src="/logo.png" alt="logo" width={28} height={31} />
            </div>
          </Link>
        </section>
        {/*  bottom */}
        <section className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-[200px]">
          {/* left */}
          <section className="flex flex-col hidden lg:block">
            {/* Intro */}
            <div className="w-[425px]">
              <h2 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.02em]">
                {isSignup ? "Sign up and come in" : "Sign in with ease"}
              </h2>

              <p className="mt-4 max-w-[425px] text-[16px] leading-[1.6] text-white/90">
                {isSignup
                  ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                  : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
              </p>
            </div>
            <LearningPreview />
          </section>
          {/* RIGHT */}
          <section>
            <div className="w-full max-w-[514px] rounded-[20px] bg-white px-[43px] pb-[20px] pt-[41px] text-[#27282c] shadow-[0_10px_40px_rgba(0,0,0,0.05)] lg:px-[63px] lg:pb-[40px] lg:pt-[61px] lg:min-h-[695px]">
              {/* Header */}
              <div>
                <p className="text-[18px] leading-none text-secondary">
                  {eyebrow}
                </p>

                <h1 className="mt-2 text-[44px] font-heading font-semibold leading-[1.15] tracking-[-0.035em]">
                  {title}
                </h1>
              </div>

              <div className="mt-[40px]">{children}</div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
