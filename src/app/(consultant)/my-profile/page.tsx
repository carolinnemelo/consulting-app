import { Main, ReusableCard } from "@/components";
import { FormCreateConsultant } from "@/features";

export default function Home() {
  return (
    <Main>
      <ReusableCard>
        <h1>My profile</h1>
        <FormCreateConsultant />
      </ReusableCard>
    </Main>
  );
}
