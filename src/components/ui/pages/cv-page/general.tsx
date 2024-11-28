import { ConsultantData } from "@/features";

export function ArticleGeneralInfo({consultantData}:any) {
  return consultantData.map((object, index) => {
    if (object.section === "General Information") {
      return (
        <>
          <h4 key={index} className="text-[27px] capitalize font-extrabold">
            {object.name}
          </h4>
          <h3 key={index + 1} className="text-[12px] space-y-0">
            {object.summary}
          </h3>
        </>
      );
    }
  });
}