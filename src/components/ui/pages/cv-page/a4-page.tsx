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

const sheeraData = [
  {
    section: "General Information",
    name: "Sheera of Etheria",
    summary:
      "I am a passionate and resourceful professional with a unique ability to merge creativity and strategy to deliver impactful solutions. Drawing on my background in mystical engineering, I approach every challenge with a blend of innovation, adaptability, and determination. I thrive in collaborative environments where I can empower teams, foster growth, and drive projects toward success. My commitment to excellence and continuous improvement ensures that I consistently deliver results that exceed expectations. I am eager to bring my skills and energy to a team where I can make a meaningful difference and contribute to shared goals.",
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
      {
        category: "Social",
        items: ["github.com/sheera"],
      },
      {
        category: "Languages",
        items: ["Etherian", "Ancient Runes", "English"],
      },
    ],
  },

  {
    section: "Education",
    education: [
      {
        school: "School of Bright Moon",
        degree: "Full-stack Magic & Code",
        year: "2023",
        details:
          "Intensive three-moon training program focused on full stack spell-casting and web development. Emphasis on TDD (Test-Driven Defense), team enchantments, and applied magical coding. Gained deep knowledge of EtherealScript, CastleForge, and hands-on experience with DockerDragon and Moonlight Cloud (SkyRealm).",
      },
      {
        school: "Mystic Academy of Etheria",
        degree: "Advanced Enchantment & Software Alchemy",
        year: "2021",
        details:
          "Specialized training in combining magical enchantments with software engineering. Focus on advanced spell algorithms, enchantment layering, and security enhancements for magical systems.",
      },
      {
        school: "Etherian University",
        degree: "Bachelor of Magical Sciences",
        year: "2018",
        details:
          "Four-year program combining foundational magic studies with the basics of software development. Learned to integrate magic with modern technology, focusing on Etherian culture and spell programming.",
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
      {
        title: "Spell Integration Specialist",
        company: "Mystic Forge Co.",
        year: "2020-2022",
        details:
          "Worked on integrating magical spells with modern software systems. Developed scalable solutions for combining traditional spell casting with digital automation. Contributed to major projects involving defense spells and communication enhancements.",
      },
      {
        title: "Junior Enchanter",
        company: "GlimmerTech Solutions",
        year: "2019-2020",
        details:
          "Collaborated on various enchantment projects involving user interface spells and interactive magical components. Assisted senior enchanters in developing new magic-based features for Etherian devices.",
      },
    ],
  },
];
