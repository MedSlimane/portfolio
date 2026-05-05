import {
  ArrowUpRight,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "SamOps",
    href: "https://samops.app",
    meta: "Next.js, Go, Node.js, Python, LLMs, AWS, Vercel",
    summary:
      "Agentic cloud FinOps platform that ingests cloud cost and usage signals, detects anomalies, and scans code or Terraform for optimization opportunities.",
  },
  {
    name: "Scribo",
    meta: "SwiftUI, Kotlin Jetpack Compose, NestJS, LLMs",
    summary:
      "Mobile lecture assistant for recording concepts, transcript chunking, idea highlighting, summaries, quizzes, and revision materials.",
  },
  {
    name: "dotenv-share",
    href: "https://dotenv-share.vercel.app",
    meta: "Next.js, Convex",
    summary:
      "Tool for securely sharing environment secrets with hashing and a local PIN layer.",
  },
  {
    name: "Confero",
    meta: "Symfony, JavaFX",
    summary:
      "Web and desktop platform for professionals organizing seminars, bookings, transport, catering, and event services.",
  },
];

const skillGroups = [
  ["Frontend", "React", "Next.js", "React Native", "Expo"],
  ["Mobile", "Flutter", "SwiftUI", "Kotlin Jetpack Compose"],
  ["Backend", "Spring Boot", "Node.js", "NestJS", "Go"],
  ["Cloud + AI", "AWS", "Vercel", "Docker", "LLM workflows", "AI agents"],
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/MedSlimane",
    icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-slimane-182aa9264",
    icon: LinkedinLogo,
  },
  {
    label: "Email",
    href: "mailto:mohamed.slimane@esprit.tn",
    icon: EnvelopeSimple,
  },
  {
    label: "CV",
    href: "/mohamed-slimane-cv.pdf",
    icon: FileText,
  },
];

const headerLinks = links.filter(({ label }) =>
  ["GitHub", "LinkedIn"].includes(label),
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b py-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            className="text-sm font-medium"
            href="#top"
            aria-label="Mohamed Slimane home"
          >
            Mohamed Slimane
          </a>
          <div className="flex flex-wrap items-center gap-3">
            <nav className="flex flex-wrap gap-1 text-xs text-muted-foreground">
              <a
                className="px-2 py-1 transition-colors hover:text-foreground"
                href="#work"
              >
                Work
              </a>
              <a
                className="px-2 py-1 transition-colors hover:text-foreground"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="px-2 py-1 transition-colors hover:text-foreground"
                href="#github"
              >
                GitHub
              </a>
              <a
                className="px-2 py-1 transition-colors hover:text-foreground"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <div className="flex gap-1">
              {headerLinks.map(({ href, icon: Icon, label }) => (
                <Button asChild key={label} size="icon-xs" variant="ghost">
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </header>

        <section
          id="top"
          className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-sm text-muted-foreground">
              Computer Science Engineering student in Tunis
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Building mobile, cloud, and AI-driven products.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Fourth-year engineering student at ESPRIT, specializing in mobile
              development. I work across React and Next.js, Flutter, SwiftUI,
              Kotlin Jetpack Compose, Spring Boot, Go, Node.js, Python, and cloud
              deployments.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              <Button asChild>
                <a href="mailto:mohamed.slimane@esprit.tn">
                  Contact me
                  <EnvelopeSimple aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/mohamed-slimane-cv.pdf">
                  View CV
                  <FileText aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <aside className="grid content-start gap-5 border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <p className="text-xs uppercase text-muted-foreground">Current</p>
              <p className="mt-2 text-sm leading-6">
                Seeking a Software Engineering summer internship, with a focus on
                mobile development and full-stack product work.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted-foreground">Education</p>
              <p className="mt-2 text-sm leading-6">
                Engineering Degree in Computer Science, ESPRIT. Expected
                graduation: 2027.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted-foreground">Languages</p>
              <p className="mt-2 text-sm leading-6">
                Arabic native, French B2, English B2.
              </p>
            </div>
          </aside>
        </section>

        <section id="work" className="border-t py-14">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="text-xl font-semibold">Selected work</h2>
            <p className="hidden text-sm text-muted-foreground sm:block">
              Product, mobile, cloud, and AI systems.
            </p>
          </div>

          <div className="divide-y">
            {projects.map((project) => (
              <article
                className="grid gap-3 py-6 sm:grid-cols-[0.8fr_1.2fr]"
                key={project.name}
              >
                <div>
                  {project.href ? (
                    <a
                      className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  ) : (
                    <h3 className="font-medium">{project.name}</h3>
                  )}
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {project.meta}
                  </p>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="border-t py-14">
          <h2 className="mb-8 text-xl font-semibold">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map(([group, ...skills]) => (
              <div className="border-t pt-4" key={group}>
                <h3 className="text-sm font-medium">{group}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="github" className="border-t py-14">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">GitHub activity</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Recent contribution graph for public work and open-source
                activity.
              </p>
            </div>
            <Button asChild variant="outline">
              <a
                href="https://github.com/MedSlimane"
                target="_blank"
                rel="noreferrer"
              >
                View profile
                <GithubLogo aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="overflow-hidden border bg-muted/20 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto min-h-32 w-full"
              src="https://ghchart.rshah.org/18181b/MedSlimane"
              alt="Mohamed Slimane GitHub contribution graph"
              loading="lazy"
            />
          </div>
        </section>

        <footer
          id="contact"
          className="flex flex-col gap-6 border-t py-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Based in Tunis. Available for software engineering internships and
            product-focused engineering work.
          </p>
          <div className="flex flex-wrap gap-2">
            {links.map(({ href, icon: Icon, label }) => (
              <Button asChild key={label} size="icon" variant="outline">
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
