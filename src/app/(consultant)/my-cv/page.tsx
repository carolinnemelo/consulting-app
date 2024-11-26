import { Main, ReusableCard } from "@/components";
import { consultantFeature } from "@/features";

export default async function Home() {
  const consultantInfo = await consultantFeature.service.getAll()
  return (
    <Main>
      <ReusableCard>
      <pre>{JSON.stringify(consultantInfo)}</pre>
      </ReusableCard>
    </Main>
  );
}
