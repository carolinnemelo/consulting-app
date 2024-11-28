import { Main, PageTitle, ReusableCard } from "@/components";
import { FormCreateConsultant } from "@/features";

export default function Home() {
  return (
    <Main>
      <ReusableCard>
        <PageTitle pageTitle="Add Consultant" />
        <FormCreateConsultant />
      </ReusableCard>
    </Main>
  );
}
