import { InputShad, Label } from "../shad";

type Props = {
  label: string;
  nameOfInput: string;
  typeOfInput: "text" | "email";
  value?: string;
};

export function Input({ label, nameOfInput, typeOfInput, value }: Props) {
  console.log({value})
  return (
    <>
      <Label htmlFor={nameOfInput}>{label}</Label>
      <InputShad
        type={typeOfInput}
        name={nameOfInput}
        id={nameOfInput}
        defaultValue={value}
      />
    </>
  );
}
