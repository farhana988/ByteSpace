import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "text-pTag" }) => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative mb-3">
        <Image src="/logo.png" alt="logo" width={28} height={31} />
      </div>

      <span className="text-2xl font-logo">ByteSpace</span>
    </Link>
  );
};

export default Logo;
