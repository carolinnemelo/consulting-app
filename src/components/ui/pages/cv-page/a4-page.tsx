import { ReactNode } from "react";
import Image from "next/image";


type Props = {
  children: ReactNode;
};

export function A4Page() {
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
          <AsideTitles />
        </aside>
        <article className="col-start-2 col-span-3 pr-6 space-y-3 -mt-6">
          <ArticleGeneralInfo />
          <h4 className="text-base font-extrabold uppercase">
            Education & Training
          </h4>
          <ArticleEducation />
          <h4 className="text-base font-extrabold uppercase">
            Education & Training
          </h4>
          <ArticleExperience />
        </article>
      </div>
    </div>
  );
}

export function ArticleGeneralInfo() {
  return sheeraData.map((object, index) => {
    if (object.section === "General Information") {
      return (
        <>
          <h4 key={index} className="text-[27px] capitalize font-extrabold">
            {object.name}
          </h4>
          <h3 key={index + 1} className="text-[12px] space-y-0">
            {object.summary}
          </h3>
        </>
      );
    }
  });
}

export function AsideTitles() {
  const asideContent = sheeraData.map((object) => {
    if (object.section === "Technical Skills") {
      if (!object.skills) {
        return "";
      }
      return object.skills.map((skill) => {
        const content = skill.items.map((item) => {
          return (
            <h4 key={item} className="text-[12px]">
              {item}
            </h4>
          );
        });
        return (
          <section>
            <h3
              key={skill.category}
              className="text-[12px] font-semibold uppercase"
            >
              {skill.category}
            </h3>
            {content}
          </section>
        );
      });
    }
  });
  return asideContent;
}

export function ArticleEducation() {
  return sheeraData.map((object) => {
    if (object.section === "Education") {
      if (!object.education) {
        return "";
      }
      return object.education.map((degree) => {
        return (
          <section key={`sectionEducation${degree.degree}`}>
            <p key={`${degree.degree}`} className="text-[12px] font-extrabold">
              {degree.degree} | {degree.school}
            </p>
            <p key={degree.year} className="text-[12px] text-justify">
              {degree.year}
            </p>
            <p key={degree.details} className="text-[12px] text-justify ">
              {degree.details}
            </p>
          </section>
        );
      });
    }
  });
}

export function ArticleExperience() {
  return sheeraData.map((object) => {
    if (object.section === "Work Experience") {
      if (!object.experience) {
        return "";
      }
      return object.experience.map((experience) => {
        return (
          <section key={`sectionExperience${experience.company}`}>
            <p key={experience.company} className="text-[12px] font-extrabold">
              {experience.title} | {experience.company}
            </p>
            <p key={experience.year} className="text-[12px] text-justify">
              {experience.year}
            </p>
            <p key={experience.details} className="text-[12px] text-justify">
              {experience.details}
            </p>
          </section>
        );
      });
    }
  });
}

