import { TitleTwo } from "./title-2";
import { cn } from "@/lib/utils";
import { Button } from "@/components";

const buttons = {
  Languages: ["Java Script", "Java", "C#"],
  status: ["Available", "Assigned", "Unavailable", "Talent Pool"],
};

export function Sidebar() {
  const languagesLinks = buttons.Languages.map((button) => {
    return <Button label={button} type="button" />;
  });

  const statusLinks = buttons.Languages.map((button) => {
    return <Button label={button} type="button" />;
  });
  return (
    <div>
      <div className="outline-dashed py-4">
        <div className="px-3 py-2">
          <TitleTwo titleTwo="Filters" />
          <div className="space-y-1">{languagesLinks}</div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Status
          </h2>
          <div className="space-y-1">{statusLinks}</div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            scroll area
          </h2>
        </div>
      </div>
    </div>
  );
}
