export function AsideTitles({consultantData}:any) {
  const asideContent = consultantData.map((object) => {
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