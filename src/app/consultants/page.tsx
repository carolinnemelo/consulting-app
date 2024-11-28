import { Badge } from "@/components";
import { consultantFeature } from "@/features";
import Image from "next/image";

export default async function AllConsultants() {
  const consultants = await consultantFeature.service.getAll()
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {consultants.map((user, index) => {
          return (
            <div key={index} className="shadow-sm p-3 bg-muted flex flex-col items-center justify-between">
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
        })}
      </div>
  );
}

