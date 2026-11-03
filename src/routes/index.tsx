import { createFileRoute } from "@tanstack/react-router";

const projects = [
  {
    id: "restaurant",
    title: "Restaurant",
    description:
      "Site vitrine pour un restaurant : menu du jour, galerie de plats et réservation en ligne en quelques clics.",
    tags: ["React", "Tailwind CSS"],
    url: "https://www.yumyum.sn",
  },
  {
    id: "boutique",
    title: "Boutique en ligne",
    description:
      "Boutique e-commerce avec catalogue de produits, panier, filtres et paiement sécurisé.",
    tags: ["React", "E-commerce"],
    url: "https://www.expat-dakar.com",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "Portfolio personnel présentant mes réalisations, mes compétences et mes coordonnées de contact.",
    tags: ["React", "Design"],
    url: "https://www.canva.com/fr_fr/creer/portfolio",
  },
  {
    id: "agence-voyage",
    title: "Agence de voyage",
    description:
      "Plateforme de voyages avec destinations, formules détaillées et demande de devis en ligne.",
    tags: ["React", "UI/UX"],
    url: "https://premiumvoyages-sn.com/",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ibrahima Gassama — Développeur Frontend" },
      {
        name: "description",
        content:
          "Développeur frontend passionné par la création d'expériences utilisateur fluides.",
      },
      { property: "og:title", content: "Ibrahima Gassama — Développeur Frontend" },
      {
        property: "og:description",
        content:
          "Développeur frontend passionné par la création d'expériences utilisateur fluides.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <p className="relative mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Développeur Frontend
        </p>
        <h1 className="relative font-display text-6xl leading-none tracking-tight md:text-8xl">
          Ibrahima Gassama
        </h1>
        <p className="relative mt-8 max-w-xl text-lg text-muted-foreground">
          Passionné par le développement frontend, je conçois des interfaces modernes et des
          expériences utilisateur fluides, pensées dans le moindre détail.
        </p>
        <a
          href="#projets"
          className="relative mt-10 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition hover:scale-105 hover:opacity-90"
        >
          Voir mes projets
        </a>
      </section>

      <section id="projets" className="mx-auto max-w-5xl scroll-mt-10 px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          04 projets
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Mes projets</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Quatre réalisations qui montrent ma façon de penser les interfaces : claires, rapides et
          agréables à utiliser.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-6 font-display text-3xl tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:gap-3"
              >
                Voir le projet
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
