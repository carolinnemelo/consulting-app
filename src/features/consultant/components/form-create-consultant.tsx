"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";
import { createConsultant } from "@/features";


export function FormCreateConsultant() {
  const initialState = { message: null, errors: {} };
  const [errorMessages, formAction] = useActionState(createConsultant, initialState); // I do not understand this error

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="First Name" nameOfInput="firstName" />
      <Input typeOfInput="text" label="Last Name" nameOfInput="lastName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      <Button label="Save" type="submit" />
      {errorMessages?.errors ? <pre>{JSON.stringify(errorMessages?.errors)}</pre> : ""}
    </form>
  );
}
