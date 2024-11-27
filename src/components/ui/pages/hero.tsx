import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  HImpact,
  HTwo,
} from "@/components";

const items = [
  {
    title: "A Smarter Way to Manage Talent",
    description:
      "At ConsultHub, we help companies unlock the true potential of their workforce. By simplifying talent management, we enable you to focus on what matters most: driving growth, innovation, and lasting success.",
  },
  {
    title: "Empower Your Team with the Right Tools",
    description:
      "Provide your team with cutting-edge tools to streamline hiring, onboarding, and skill development. ConsultHub is designed to help your company build an empowered and future-ready workforce.",
  },
  {
    title: "Achieve Consistency Across Your Workforce",
    description:
      "Our platform helps maintain consistent standards for employee profiles and performance, ensuring everyone is aligned with your company’s vision. ConsultHub brings structure and uniformity to your talent strategy.",
  },
];




export function Hero() {
  return (
    <section
      className="hero flex w-full items-center justify-center text-center"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <Carousel style={{ maxWidth: "calc(100vw - 100px)" }}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <HImpact>{item.title}</HImpact>
              <HTwo>{item.description}</HTwo>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

