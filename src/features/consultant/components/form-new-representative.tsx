"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";


export function FormCreateNewConsultant() {
  const initialState = { message: null, errors: {} };
  // const [state, formAction] = useActionState(formAction, initialState);

  return (
    <form >
      <Input typeOfInput="text" label="Name" nameOfInput="consultantName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Save" type="submit" />
    </form>
  );
}
