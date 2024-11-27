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
        <aside className="col-start-1 row-start-1 mt-16 h-full text-start px-4 space-y-3">
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
        <article className="col-start-2 col-span-3 space-y-2 pr-4">
       <ArticleGeneralInfo />
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
          <h3 key={index + 1} className="text-base space-y-0">
            {object.summary}
          </h3>
        </>
      );
    }
  });
}

export function AsideTitles() {
  const asideContent = sheeraData.map((object, index) => {
    if (object.section === "Technical Skills") {
      if (!object.skills) {
        return "";
      }
      return object.skills.map((skill, indexValue) => {
        const content = skill.items.map((item) => {
          return (
            <h4 key={index} className="text-[12px]">
              {item}
            </h4>
          );
        });
        return (
          <article>
            <h3 key={indexValue} className="text-[12px] font-semibold">
              {skill.category}
            </h3>
            {content}
          </article>
        );
      });
    }
  });
  return asideContent;
}

const sheeraData = [
  {
    section: "General Information",
    name: "Sheera of Etheria",
    summary:
      "Full-stack developer specializing in powerful frameworks and ancient runes. With a background in mystical engineering, Sheera blends magic and technology to solve the most challenging problems. Passionate about empowering her allies, she thrives in collaborative, Agile settings.",
  },
  {
    section: "Technical Skills",
    skills: [
      {
        category: "General",
        items: [
          "EtherealScript",
          "JavaScript",
          "Python",
          "RuneLang",
          "Mystic++",
        ],
      },
      {
        category: "Backend",
        items: [
          "CastleForge",
          "Spellbound ORM",
          "REST Spells",
          "CrystalDB",
          "MoonlightDB",
        ],
      },
      {
        category: "Frontend",
        items: [
          "GlimmerUI",
          "NextPortalJS",
          "HTML/CSS Enchanted",
          "Tailwind Spells",
          "VisionBoard",
        ],
      },
      {
        category: "Tools",
        items: [
          "Moonlight Studio",
          "Bright IntellijJewel",
          "MysticOS",
          "GitSword",
          "DockerDragon",
          "CI/CD Enchantments",
        ],
      },
    ],
  },
  {
    section: "Education",
    education: [
      {
        degree: "Full-stack Magic & Code - School of Bright Moon",
        year: "2023",
        details:
          "Intensive three-moon training program focused on full stack spell-casting and web development. Emphasis on TDD (Test-Driven Defense), team enchantments, and applied magical coding. Gained deep knowledge of EtherealScript, CastleForge, and hands-on experience with DockerDragon and Moonlight Cloud (SkyRealm).",
      },
    ],
  },
  {
    section: "Work Experience",
    experience: [
      {
        title: "Guardian Engineer",
        company: "Castle Bright Moon",
        year: "2022-2023",
        details:
          "Assisted in designing protective barriers for Castle Bright Moon and contributed to the magical infrastructure for the new Etherian energy shield. Led team in using technology to enhance the mystical defenses of the castle.",
      },
    ],
  },
  {
    section: "Additional Information",
    github: "https://github.com/sheera-of-etheria",
    languages: [
      { language: "Etherian", proficiency: "Fluent" },
      { language: "Ancient Runes", proficiency: "Advanced" },
      { language: "English", proficiency: "Conversational" },
    ],
  },
];
