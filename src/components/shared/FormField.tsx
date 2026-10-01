"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormFieldProps = {
  label: string;
  type?: React.ComponentProps<typeof Input>["type"];
  placeholder?: string;
  name?: string;
};

export function FormField({
  label,
  type = "text",
  placeholder,
  name,
}: FormFieldProps) {
  return (
    <div className="space-y-[7px]">
      <Label
        htmlFor={name}
        className="text-[14px] font-medium text-[#25262a]"
      >
        {label}
      </Label>

      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          h-[46px]
          rounded-[11px]
          border-[#dedfe2]
          px-5
          text-[14px]
          shadow-none
          placeholder:text-[#999da6]
          focus-visible:border-[#0054ff]
          focus-visible:ring-1
          focus-visible:ring-[#0054ff]
        "
      />
    </div>
  );
}
