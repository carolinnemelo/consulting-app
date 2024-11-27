import { ButtonShad } from "../shad";

type Props = {
  label: string;
  type: "button" | "submit" | "reset";
  align?: "start" | "center" | "end";
};

export function Button({ label, type, align }: Props) {
  let alignText;
  if (align === "start") {
    alignText = "justify-start";
  }
  if (align === "center" || !align) {
    alignText = "justify-center";
  }
  if (align === "end") {
    alignText = "justify-end";
  }

  return (
    <div className="flex mt-4">
      <ButtonShad
        variant="ghost"
        className={`${alignText} flex-grow`}
        type={type}
        size="sm"
      >
        {label}
      </ButtonShad>
    </div>
  );
}