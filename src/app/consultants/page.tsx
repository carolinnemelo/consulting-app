import { consultantFeature } from "@/features";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function AllConsultants() {
  const consultants = await consultantFeature.service.getAll()
  return (
      <div className="grid grid-cols-1 md:grid-cols-4">
        {consultants.map((user, index) => {
          return (
            <div key={index} className="bg-black/80">
              <Image
                src={`/sheera.png`}
                height={170}
                width={170}
                alt="Logo"
                className="justify-self-center"
                />
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.bio}</p>
                
            </div>
          );
        })}
      </div>
  );
}

