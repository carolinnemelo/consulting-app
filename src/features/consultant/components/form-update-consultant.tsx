"use client";

import { useActionState } from "react";
import { Button, Input } from "@/components";
import { updateConsultant } from "../actions";




export function FormUpdateConsultant(loggedConsultant: any) {
  const initialState = {
    ...loggedConsultant,
    errorMessage: { message: null, errors: {} },
  };
  const [state, formAction] = useActionState(
    updateConsultant,
    initialState
  );

  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="First Name" nameOfInput="firstName" value={initialState.loggedConsultant.firstName} />
      <Input typeOfInput="text" label="Last Name" nameOfInput="lastName" value={initialState.loggedConsultant.lastName}/>
      <Input typeOfInput="email" label="Email" nameOfInput="email" value={initialState.loggedConsultant.email} />
      <Button label="Save" type="submit" />
    </form>
  );
}


