import { StatProps } from "@/types/stat.interface";

const Stat = ({ value, label }: StatProps) => {
  return (
    <div>
      <div className="text-[36px] font-heading font-medium leading-none tracking-[-1px] text-secondary">
        {value}
      </div>

      <div className="mt-2 text-[18px] text-[#777980]">{label}</div>
    </div>
  );
};

export default Stat;
