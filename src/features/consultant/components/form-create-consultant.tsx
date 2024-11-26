"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";
import { createConsultant } from ".";

export function FormCreateConsultant() {
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(createConsultant, initialState);

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="First Name" nameOfInput="firstName" />
      <Input typeOfInput="text" label="Last Name" nameOfInput="LastName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Save" type="submit" />
      {state ? <pre>{JSON.stringify(state?.errors)}</pre> : ""}
    </form>
  );
}
