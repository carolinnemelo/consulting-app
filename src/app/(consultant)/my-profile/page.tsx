import { Main, ReusableCard } from "@/components";
import { FormCreateNewConsultant } from "@/features/consultant/components/form-new-representative";

export default function Home() {
  return (
    <Main>
      <ReusableCard>
        <h1>My profile</h1>
        <FormCreateNewConsultant />
      </ReusableCard>
    </Main>
  );
}
