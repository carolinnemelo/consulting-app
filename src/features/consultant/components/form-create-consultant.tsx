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
      {/*
      <section className="flex flex-col gap-3 py-2" key="technicalSkills">
        <HThree>Technical Skills</HThree>

        <Input typeOfInput="text" label="General" nameOfInput="generalItems" />
        <Input typeOfInput="text" label="Backend" nameOfInput="backendItems" />
        <Input
          typeOfInput="text"
          label="Frontend"
          nameOfInput="frontendItems"
        />
        <Input typeOfInput="text" label="Tools" nameOfInput="toolsItems" />
        <Input typeOfInput="text" label="Social" nameOfInput="socialItems" />
      </section>
      <section className="flex flex-col gap-3 py-2" key="education">
        <HThree>Education</HThree>

        <Input typeOfInput="text" label="School" nameOfInput="school" />
        <Input typeOfInput="text" label="Email" nameOfInput="degree" />
        <Input typeOfInput="text" label="Year" nameOfInput="year" />
        <Input typeOfInput="text" label="Details" nameOfInput="details" />
      </section>
      <section className="flex flex-col gap-3 py-2" key="workExperience">
        <HThree>Work Experience</HThree>

        <Input typeOfInput="text" label="Title" nameOfInput="title" />
        <Input typeOfInput="text" label="Company" nameOfInput="company" />
        <Input typeOfInput="text" label="Year" nameOfInput="year" />
        <Input typeOfInput="text" label="Details" nameOfInput="details" />
      </section> */}
      <Button label="Save" type="submit" />
      {errorMessages?.errors ? (
        <pre>{JSON.stringify(errorMessages?.errors)}</pre>
      ) : (
        ""
      )}
    </form>
  )
}
