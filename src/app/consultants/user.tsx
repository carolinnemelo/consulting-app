"use client";
import Image from "next/image";
import { Badge, Button } from "@/components";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export function User({ user }: any) {
  function handleClick(name: any) {
    if (name === "Sheera") {

      redirect("/cv/sheera");
      
    }
    if (name === "Hermione") {

      redirect("/cv/hermione");
    }
    if (name === "Diana") {
      redirect("/cv/diana");
    }
  }
  return (
    <div
      key={user.firstName}
      onClick={() => handleClick(user.firstName)}
      className="shadow-sm p-3 bg-muted flex flex-col items-center justify-between"
    >
      <Image
        src={
          user.firstName.toLowerCase() === "sheera" ||
          user.firstName.toLowerCase() === "hermione" ||
          user.firstName.toLowerCase() === "diana"
            ? `/${user.firstName}.png`
            : `/neutral.png`
        }
        height={100}
        width={100}
        alt="Logo"
        className="justify-self-center"
      />
      <p className="text-md font-medium">
        {user.firstName} {user.lastName}
      </p>
      <p className="text-sm font-light">"{user.bio}"</p>
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-violet-500">Java</Badge>
        <Badge className="bg-violet-500">C#</Badge>
        <Badge className="bg-violet-500">Typescript</Badge>
      </div>
    </div>
  );
}
