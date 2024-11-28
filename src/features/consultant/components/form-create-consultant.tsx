"use client";

import { Button, HThree, Input } from "@/components";
import { useActionState } from "react";
import { createConsultant } from "@/features";

export function FormCreateConsultant() {
  const initialState = { message: null, errors: {} };
  const [errorMessages, formAction] = useActionState(createConsultant, initialState); 

  return (
    <form action={formAction}>
      <section className="flex flex-col gap-3 py-2" key="generalInformation">
        <HThree>General Information</HThree>
        <article>
          <Input
            typeOfInput="text"
            label="First Name"
            nameOfInput="firstName"
          />
          <Input typeOfInput="text" label="Last Name" nameOfInput="lastName" />
          <Input typeOfInput="email" label="Email" nameOfInput="email" />
          <Input typeOfInput="text" label="Bio" nameOfInput="bio" />
        </article>
      </section>
      <Button variant={true} label="Save" type="submit" />

      {errorMessages?.errors ? (
        <div className="text-red-500 text-sm py-2">
          <p key={1}>{errorMessages.errors.firstName}</p>
          <p key={2}>{errorMessages.errors.lastName}</p>
          <p key={3}>{errorMessages.errors.email}</p>
          <p key={4}>{errorMessages.errors.bio}</p>
        </div>
      ) : (
        <div className="text-teal-500 text-sm py-2">
          <p>New talent added.</p>
        </div>
      )}
    </form>
  );
}