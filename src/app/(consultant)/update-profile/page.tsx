import { Main, PageTitle, ReusableCard } from "@/components";
import { consultantFeature, FormUpdateConsultant } from "@/features";

export default async function Home() {
  const loggedConsultant = await consultantFeature.service.getConsultantByEmail(
    "carolinnepmelo@gmail.com"
  );
  return (
    <Main>
      <ReusableCard>
        <PageTitle pageTitle="Update Profile" />
        <FormUpdateConsultant loggedConsultant={loggedConsultant}/>
      </ReusableCard>
    </Main>
  );
}
