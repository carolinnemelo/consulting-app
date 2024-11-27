import Link from "next/link";
import Image from "next/image";
import { PageTitle } from "./page-title";
import { HImpact, HOne } from ".";

export function Hero() {
  return (
    <div
      className="hero bg-secondary flex items-center justify-center px-4"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="hero-content flex flex-col items-center text-center w-full max-w-4xl gap-6">
        <Image src="/logo.png" height={48} width={120} alt="Logo" />
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <HImpact>ConsultHub</HImpact>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl font-medium">
          <HOne>The Smarter Way to Manage Your Workforce</HOne>
        </div>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          Talent Management for Modern Businesses
        </h2>
      </div>
    </div>
  );
}