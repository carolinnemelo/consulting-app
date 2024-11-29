import { Hero, HOne, Main } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Main>
      <div>
        <Hero />
        <div className="flex flex-wrap bg-muted justify-around items-center py-10 px-12 text-center ">
          <Link href="/" className="md:w-[50%]">
            <Image src="/talent.png" height={300} width={300} alt="Logo" />
          </Link>
          <div className="md:w-[50%] text-2xl py-6">
            <h3 className="font-bold">
              Empower your team to shine with up-to-date, standardized profiles
              that adapt dynamically to your evolving needs.
            </h3>
          </div>
        </div>
        <div className="shadow-md p-10  gap-8 flex items-center w-fit justify-between  flex-col">
          <Link href="/" className="">
            <Image src="/logo.png" height={100} width={100} alt="Logo" />
          </Link>
          <p className="w-fit text-center">
            ConsultHub is a cutting-edge platform designed to help businesses
            manage their workforce with precision and efficiency. Whether you're
            tracking employee profiles, approving updates, or generating
            consistent resumes, ConsultHub ensures your organization is always
            one step ahead.
          </p>
        </div>
      </div>
    </Main>
  );
}
