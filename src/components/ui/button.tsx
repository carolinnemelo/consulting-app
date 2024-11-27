import { Ghost } from "lucide-react";
import { ButtonShad } from "../shad";

type Props = {
  label: string;
  type: "button" | "submit" | "reset";
};

export function Button({ label, type }: Props) {
  return (
    <div className="flex mt-4">
      <ButtonShad variant="ghost" className="flex-grow" type={type}>
        {label}
      </ButtonShad>
    </div>
  );
}