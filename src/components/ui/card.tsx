import { ReactNode } from "react";
import { Card, CardTitle } from "../shad";

type Props = {
  cardTitle?: string,
  children: ReactNode;
};

export function ReusableCard({ cardTitle, children }: Props) {
  return (
    <>
      <Card className="my-auto p-4 flex-grow">
        <CardTitle className="mb-3">{cardTitle}</CardTitle>
        {children}
      </Card>
    </>
  );
}
