import Image from "next/image";
import {
  ArticleEducation,
  ArticleExperience,
  ArticleGeneralInfo,
  AsideTitles,
} from ".";
import { consultantFeature } from "@/features";
export async function A4Page() {
  const consultantData = await consultantFeature.service.getCV("sheera")
  return (
    <div className="a4-page">
      <div className="grid grid-cols-4 grid-rows-12 h-full gap-3">
        <div className="text-primary bg-muted col-start-1 col-end-5 row-start-1 h-[50px] text-xl pr-4 flex items-center justify-end">
          &lt;/salt&gt;
        </div>
        <aside className="col-start-1 row-start-1 row-end-13 pt-16 h-full text-start px-4 bg-muted space-y-3">
          <Image
            src="/she-ra.png"
            height={170}
            width={170}
            alt="Logo"
            className="justify-self-center"
          />
          <h2 className="text-sm font-bold uppercase">Technical Skills</h2>
          <AsideTitles consultantData={consultantData} />
        </aside>
        <article className="col-start-2 col-span-3 pr-6 space-y-3 -mt-6">
          <ArticleGeneralInfo consultantData={consultantData} />
          <h4 className="text-base font-extrabold uppercase">
            Education & Training
          </h4>
          <ArticleEducation consultantData={consultantData} />
          <h4 className="text-base font-extrabold uppercase">
            Education & Training
          </h4>
          <ArticleExperience consultantData={consultantData} />
        </article>
      </div>
    </div>
  );
}
