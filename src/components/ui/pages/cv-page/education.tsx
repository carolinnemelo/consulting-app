
export function ArticleEducation({consultantData}:any) {
  return consultantData.map((object) => {
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