import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export function AFourSize({children}: Props) {
  return <section className="a4- flex justify-between">{children}</section>
}