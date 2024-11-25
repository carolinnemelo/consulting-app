import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export function Main({children}: Props) {
  return <main className="container mx-auto flex items-center justify-center">{children}</main>
}