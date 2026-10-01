"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormField } from "../shared/FormField";
import Image from "next/image";
import { AuthFormProps } from "@/types/auth.interface";

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "signup";

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      {isSignup && (
        <FormField label="Full Name" name="name" placeholder="Jamie Davis" />
      )}

      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="designer@example.com"
      />

      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />

      <div className="flex justify-end pt-px">
        <Button
          type="submit"
          className="h-[46px] rounded-full bg-primary px-[24px] py-[12px] text-[15px] font-semibold text-gray-950 hover:bg-[#baf000]"
        >
          {isSignup ? "Continue" : "Sign In"}
        </Button>
      </div>

      {isSignup ? (
        <p className="pt-[86px] text-center text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-secondary hover:underline">
            Login
          </Link>
        </p>
      ) : (
        <>
          <div className="flex items-center gap-3 pt-[47px] text-[14px] text-[#999]">
            <div className="h-px flex-1 bg-[#d9d9d9]" />

            <span>or</span>

            <div className="h-px flex-1 bg-[#d9d9d9]" />
          </div>

          {/* social icons */}
          <div className="flex justify-center gap-[14px] pt-[25px]">
            <button
              type="button"
              aria-label="Continue with Facebook"
              className="flex h-16 w-16 items-center justify-center rounded-[21px] border border-[#d8d8d8] bg-white text-[27px] font-bold text-black transition hover:bg-[#fafafa] hover:-translate-y-px"
            >
              <Image src="/fb.png" alt="Facebook" width={40} height={40} />
            </button>

            <button
              type="button"
              aria-label="Continue with Google"
              className="flex h-16 w-16 items-center justify-center rounded-[21px] border border-[#d8d8d8] bg-white text-[25px] font-bold text-black transition hover:bg-[#fafafa] hover:-translate-y-px"
            >
              <Image src="/google.png" alt="Google" width={40} height={40} />
            </button>
          </div>

          <p className="pt-[50px] text-center text-gray-700">
            New user?{" "}
            <Link href="/signup" className="text-secondary hover:underline">
              Create an account
            </Link>
          </p>
        </>
      )}
    </form>
  );
}
