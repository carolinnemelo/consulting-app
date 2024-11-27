import { TitleThree } from "./title-2";
import { cn } from "@/lib/utils";
import { Button } from "@/components";

const buttons = {
  languages: ["Java Script", "Java", "C#"],
  status: ["Available", "Assigned", "Unavailable", "Talent Pool"],
};

export function Sidebar() {
  const languagesLinks = buttons.languages.map((button) => {
    return <Button label={button} type="button" align="start" />;
  });
  const statusLinks = buttons.status.map((button) => {
    return <Button label={button} type="button" align="start" />;
  });
  
  return (
    <div className="outline-dashed py-4">
      <div className="px-1 py-2">
        <TitleThree titleTwo="Filters" />
        <div className="ml-3 space-y-0">{languagesLinks}</div>
      </div>
      <div className="px-1 py-2">
        <TitleThree titleTwo="Status" />
        <div className="ml-3 space-y-0">{statusLinks}</div>
      </div>
    </div>
  );
}
