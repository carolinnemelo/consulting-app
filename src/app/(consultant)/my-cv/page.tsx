import { Main, ReusableCard } from "@/components";
import { consultantFeature } from "@/features";

export default async function Home() {
  const consultantInfo = await consultantFeature.service.getById(4)
  return (
    <Main>
      <ReusableCard>
      <pre>{JSON.stringify(consultantInfo, null, 2)}</pre>
      </ReusableCard>
    </Main>
  );
}
