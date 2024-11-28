"use client";

import { usePathname } from "next/navigation";
import { ButtonShad } from "@/components/shad";
import Link from "next/link";
import { HThree, Input } from "@/components";

type Props = {
  sectionName: string;
  items: object[];
};

export function FormSection({ sectionName, items }: Props) {
    return (
      <section>
        <HThree>{sectionName}</HThree>
        <FormSectionItems sectionName={sectionName} items={items} />
      </section>
    );
}

type Items = {
  sectionName: string;
  items: object[];
};


export function FormSectionItems({ sectionName, items }: Items) {
  return items.map((item) => {
    return (
      <article>
    <Input typeOfInput="text" label="First Name" nameOfInput="firstName" />

      </article>
    );
  });
}

<section className="flex flex-col gap-3 py-2" key="generalInformation">
  <HThree>General Information</HThree>
  <article>
    <Input typeOfInput="text" label="First Name" nameOfInput="firstName" />
    <Input typeOfInput="text" label="Last Name" nameOfInput="lastName" />
    <Input typeOfInput="email" label="Email" nameOfInput="email" />
    <Input typeOfInput="text" label="Bio" nameOfInput="summary" />
  </article>
</section>;

{
  /* <ButtonShad
key={item.name}
variant={isActive ? "secondary" : "ghost"}
size="sm"
asChild
>
<Link href={item.href}>{item.name}</Link>
</ButtonShad> */
}
