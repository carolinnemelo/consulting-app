import Link from "next/link";
import Image from "next/image";
import { PageTitle } from "./page-title";
import { TitleThree } from ".";

export function Hero() {
  return (
    <>
      <div className="hero bg-base-300 min-h-screen text-center">
        <div className="w-fit m-auto">
          <Link
            href="/"
            className="flex justify-between align-middle text-lg font-semibold"
          >
            <Image src="/logo.png" height={36} width={35} alt="Logo" />

            <h1></h1>
            <TitleThree titleThree="ConsultHub" />
          </Link>
        </div>
        <PageTitle pageTitle="The Smarter Way to Manage Your Workforce" />
        <h2 className="font-semibold">
          Talent Management for Modern Businesses
        </h2>
        {/* <div className="hero-content text-center flex flex-col max-w-sm lg:flex-row-reverse justify-center lg:max-w-lg">
        </div> */}
      </div>
    </>
  );
}
