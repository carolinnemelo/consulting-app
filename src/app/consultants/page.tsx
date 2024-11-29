import { consultantFeature } from "@/features";

import { redirect } from "next/navigation";
import { User } from "./user";


export default async function AllConsultants() {
  const consultants = await consultantFeature.service.getAll();

  return (
    <div key={34} className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {consultants.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
}

