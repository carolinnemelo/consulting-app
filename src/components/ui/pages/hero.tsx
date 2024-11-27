import { HImpact, HTwo } from "../h-titles";

export function Hero() {
  return (
    <section
      className="hero bg-secondary flex items-center justify-center px-4 dark:bg-gray-900"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="hero-content flex flex-col items-center text-center w-full max-w-4xl place-self-center">
        <HImpact>A Smarter Way to Manage Talent</HImpact>
        <HTwo>
          At ConsultHub, we help companies unlock the true potential of their
          workforce. By simplifying talent management, we enable you to focus on
          what matters most: driving growth, innovation, and lasting success.
        </HTwo>
      </div> 
    </section>
  );
}
