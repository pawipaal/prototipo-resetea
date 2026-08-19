import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Resetea" },
      {
        name: "description",
        content: "Habla con Resetea: pedidos para tiendas, regalos personalizados y dudas.",
      },
      { property: "og:title", content: "Contacto — Resetea" },
      { property: "og:description", content: "Pedidos para tiendas, personalizados y dudas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="font-display text-4xl md:text-5xl">Hablemos</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        ¿Tienes una tienda, buscas un regalo personalizado o solo quieres saludar? Escríbenos.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_16rem]">
        <form
          className="space-y-4 rounded-3xl bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Mensaje enviado. Te respondemos en 24 h 🌱");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" name="nombre" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Asunto" name="asunto" />
          <label className="block text-sm font-semibold">
            Mensaje
            <textarea
              name="mensaje"
              required
              rows={5}
              className="mt-1 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-normal outline-none focus:border-pink"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-pink px-6 py-3 font-bold text-pink-foreground transition hover:scale-[1.02]"
          >
            Enviar mensaje
          </button>
        </form>

        <aside className="space-y-4 rounded-3xl bg-sky/40 p-6 text-sm">
          <p className="flex items-center gap-2">
            <Mail className="size-4" /> hola@resetea.es
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4" /> +34 600 000 000
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="size-4" /> Madrid, España
          </p>
          <p className="text-muted-foreground">Lunes a viernes, 9:00 – 18:00</p>
        </aside>
      </div>
    </main>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm font-normal outline-none focus:border-pink"
      />
    </label>
  );
}
