import Image from "next/image";
import { HImpact, HOne, HTwo } from "../h-titles";

export function Hero() {
  return (
    <div
      className="hero bg-secondary flex items-center justify-center px-4"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="hero-content flex flex-col items-center w-full max-w-4xl gap-6">
        <Image src="/logo.png" height={48} width={120} alt="Logo" />
        <HImpact>ConsultHub</HImpact>
        <HOne>The Smarter Way to Manage Your Workforce</HOne>
        <HTwo>Talent Management for Modern Businesses</HTwo>
      </div>
    </div>
  );
}
