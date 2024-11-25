"use client";

import { useActionState } from "react";
import { Button, ErrorMessage, Input } from "@/components";


export function FormNewRepresentative() {
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useActionState(formAction, initialState);
  return (
    <form action={formAction}>
      <Input typeOfInput="text" label="Representative name" nameOfInput="representativeName" />
      <Input typeOfInput="email" label="Email" nameOfInput="email" />
      {state?.errors && (
        <ErrorMessage errors={state.errors} />
      )}
      <Button label="Create Representative" type="submit" />
    </form>
  );
}
