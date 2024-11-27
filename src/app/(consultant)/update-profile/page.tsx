import { Main, PageTitle, ReusableCard } from "@/components";
import { consultantFeature, FormUpdateConsultant } from "@/features";

export default async function Home() {
  const loggedConsultant = await consultantFeature.service.getConsultantByEmail(
    "carolinnepmelo@gmail.com"
  );
  if (!loggedConsultant)
    return (
      <Main>
        <ReusableCard>
          <PageTitle pageTitle="Update Profile" />
          <p>Consultant not found. Please try again later.</p>
        </ReusableCard>
      </Main>
    );

  return (
    <Main>
      <ReusableCard>
        <PageTitle pageTitle="Update Profile" />
        <FormUpdateConsultant loggedConsultant={loggedConsultant} />
      </ReusableCard>
    </Main>
  );
}
