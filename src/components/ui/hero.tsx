import Link from "next/link";
import Image from "next/image";
import { PageTitle } from "./page-title";
import { HImpact, TitleThree } from ".";

export function Hero() {
  return (
    <>
      <div className="hero bg-secondary min-h-screen flex items-center justify-center" style={{ minHeight: "calc(100vh - 56px)" }}>
        <div className="hero-content flex flex-col items-center justify-center text-center max-w-sm lg:max-w-lg">
          <div className="w-fit flex flex-col items-center">
            <Image src="/logo.png" height={36} width={100} alt="Logo" />
            <HImpact>ConsultHub</HImpact>
          </div>
          <PageTitle pageTitle="The Smarter Way to Manage Your Workforce" />
          <h2 className="font-semibold">
            Talent Management for Modern Businesses
          </h2>
        </div>
      </div>
    </>
  );
}

