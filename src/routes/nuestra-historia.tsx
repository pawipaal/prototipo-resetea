import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import story from "@/assets/story.jpg";

export const Route = createFileRoute("/nuestra-historia")({
  head: () => ({
    meta: [
      { title: "Nuestra historia — Resetea" },
      {
        name: "description",
        content:
          "Cómo nació Resetea: un taller pequeño, papel semilla y la idea de que un regalo puede seguir creciendo.",
      },
      { property: "og:title", content: "Nuestra historia — Resetea" },
      {
        property: "og:description",
        content: "Un taller pequeño, papel semilla y regalos que siguen creciendo.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Historia,
});

const milestones = [
  { year: "2016", text: "Nace el primer papel semilla en un taller de 20 m² en Madrid." },
  { year: "2019", text: "Retiramos el plástico de todo el packaging y pasamos a cartón reciclado." },
  { year: "2022", text: "Más de 200 tiendas en España venden nuestros kits." },
  { year: "2026", text: "1,2 millones de semillas plantadas por nuestra comunidad." },
];

function Historia() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl md:text-6xl">Regalar algo que siga vivo</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Empezamos preguntándonos por qué casi todos los regalos acaban en un cajón. La respuesta
        fue sembrar: papel, arcilla y semillas que convierten un detalle en un jardín.
      </p>

      <img
        src={story}
        alt="Taller de Resetea trabajando papel semilla"
        width={1200}
        height={700}
        className="mt-10 w-full rounded-4xl object-cover"
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-2xl">Materiales que vuelven a la tierra</h2>
          <p className="mt-3 text-muted-foreground">
            Trabajamos con fibra reciclada, arcilla, algodón y tintas vegetales. Sin plásticos, sin
            turba y con semillas autóctonas certificadas que no invaden ecosistemas.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl">Hecho a mano, cerca</h2>
          <p className="mt-3 text-muted-foreground">
            Todo se fabrica en nuestro taller y con talleres colaboradores a menos de 300 km. Menos
            transporte, más manos conocidas detrás de cada pieza.
          </p>
        </Reveal>
      </div>

      <ol className="mt-14 space-y-4">
        {milestones.map((m, i) => (
          <Reveal key={m.year} delay={i * 0.06}>
            <li className="flex gap-5 rounded-3xl bg-card p-5">
              <span className="font-display text-2xl font-extrabold text-pink">{m.year}</span>
              <span className="text-muted-foreground">{m.text}</span>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 rounded-4xl bg-lime/40 p-10 text-center">
        <h2 className="font-display text-3xl">¿Nos ayudas a plantar el próximo millón?</h2>
        <Link
          to="/tienda"
          className="mt-6 inline-block rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:scale-105"
        >
          Ver productos
        </Link>
      </div>
    </main>
  );
}
