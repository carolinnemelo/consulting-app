"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";
import { createConsultant } from "../actions";
import { consultantFeature } from "../instance";


const loggedUser = await consultantFeature.service.getConsultantByEmail("carolinnepmelo@gmail.com")

export function FormCreateConsultant() {
  const initialState = loggedUser[0]
  const [errorMessages, formAction] = useActionState(updateConsultant, initialState);

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


