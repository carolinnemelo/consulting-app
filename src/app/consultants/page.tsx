import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function AllConsultants() {
  return (
      <Grid>
        {new Array(10).fill(0).map((_, index) => {
          return (
            <div key={index} className="container">
              <Image
                src={`/sheera.png`}
                height={170}
                width={170}
                alt="Logo"
                className="justify-self-center"
              />
            </div>
          );
        })}
      </Grid>
  );
}
export function Grid({ children }: Props) {
  return (
    <div className="flex flex-wrap">
      {children}
    </div>
  );
}
