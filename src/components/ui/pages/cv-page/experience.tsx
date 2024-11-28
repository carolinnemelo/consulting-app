export function ArticleExperience({ consultantData }: any) {
  return consultantData.map((object) => {
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
