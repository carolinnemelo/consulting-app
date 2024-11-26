"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";


export function FormCreateNewConsultant() {
  const initialState = { message: null, errors: {} };
  // const [state, formAction] = useActionState(formAction, initialState);

  return (
    <form >
      <Input typeOfInput="text" label="First Name" nameOfInput="firstName" />
      <Input typeOfInput="text" label="Last Name" nameOfInput="LastName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Save" type="submit" />
    </form>
  );
}
