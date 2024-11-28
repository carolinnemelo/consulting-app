import Image from "next/image";
import {
  ArticleEducation,
  ArticleExperience,
  ArticleGeneralInfo,
  AsideTitles,
} from ".";
import { consultantFeature } from "@/features";

export async function A4Page() {
  const name = "sheera";
  const consultantData = await consultantFeature.service.getCV(name);
  return (
    <div className="">
      <div className="grid grid-cols-1 md:mx-auto md:grid-cols-4  md:min-h-[1122px] md:max-h-[1122px]  md:min-w-[795px] md:max-w-[795px] bg-white shadow-lg shadow-zinc-300">
        <div className="text-primary bg-muted h-[50px] text-xl pr-4 flex items-center justify-end md:col-start-1 md:col-end-5 md:row-start-1">
          &lt;/salt&gt;
        </div>
        <aside className="h-full text-start p-4 bg-muted space-y-3 md:col-start-1 md:col-end-2  md:row-start-1 md:pt-16">
          <Image
            src={`/${name}.png`}
            height={170}
            width={170}
            alt="Logo"
            className="justify-self-center"
          />
          <h2 className="text-sm font-bold uppercase">Technical Skills</h2>
          <AsideTitles consultantData={consultantData} />
        </aside>

        <article className="p-4 space-y-3 md:col-start-2 md:col-end-5 md:row-start-1 md:pt-16">
          <ArticleGeneralInfo consultantData={consultantData} />
          <h4 className="text-base font-extrabold uppercase">
            Education & Training
          </h4>
          <ArticleEducation consultantData={consultantData} />
          <h4 className="text-base font-extrabold uppercase">Experience</h4>
          <ArticleExperience consultantData={consultantData} />
        </article>
      </div>
    </div>
  );
}