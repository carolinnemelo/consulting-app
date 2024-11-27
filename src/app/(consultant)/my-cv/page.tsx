import { Main, PageTitle, ReusableCard } from "@/components";
import { A4Page } from "@/components/ui/pages/cv-page/a4-page";
import { consultantFeature } from "@/features";

export default async function Home() {
  const consultantInfo = await consultantFeature.service.getConsultantByEmail("linus@pierre.se")
  return <A4Page />;
}
