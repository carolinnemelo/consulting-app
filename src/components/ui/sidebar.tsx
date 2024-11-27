import { TitleThree } from "./title-2";
import { Button } from "@/components";

const buttons = {
  languages: ["Java Script", "Java", "C#"],
  status: ["Available", "Assigned", "Unavailable", "Talent Pool"],
};

export function Sidebar() {
  const languagesLinks = buttons.languages.map((button, i) => {
    return <Button key={i} label={button} type="button" align="start" />;
  });
  const statusLinks = buttons.status.map((button, i) => {
    return <Button key={i} label={button} type="button" align="start" />;
  });

  return (
    <nav className="bg-red-400 py-4 pr-2 h-full">
      <div className="py-2">
        <TitleThree titleThree="Filters" />
        <div className="ml-3 space-y-0">{languagesLinks}</div>
      </div>
      <div className="py-2">
        <TitleThree titleThree="Status" />
        <div className="ml-3 space-y-0">{statusLinks}</div>
      </div>
    </nav>
  );
}
