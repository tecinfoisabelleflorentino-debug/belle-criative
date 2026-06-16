import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu, X, MessageCircle, MapPin, Mail, Phone, ArrowUp, Moon, Sun,
  Sparkles, Heart, BookOpen, Pencil, Gift, GraduationCap, Star,
  CheckCircle2, Send, Instagram, ArrowRight, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-stationery.jpg";
import catCadernos from "@/assets/cat-cadernos.jpg";
import catCanetas from "@/assets/cat-canetas.jpg";
import catEscolar from "@/assets/cat-escolar.jpg";
import catPresentes from "@/assets/cat-presentes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Belle Papelaria — Tudo que inspira, você encontra aqui" },
      { name: "description", content: "Cadernos, agendas, canetas, marca-textos, material escolar e presentes selecionados com carinho. Visite a Belle Papelaria." },
      { property: "og:title", content: "Belle Papelaria" },
      { property: "og:description", content: "Tudo que inspira, você encontra aqui!" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20conhecer%20os%20produtos%20da%20Belle%20Papelaria.";

function Index() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-fade-up")),
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#categorias", label: "Categorias" },
    { href: "#destaques", label: "Destaques" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <Heart className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="font-display text-2xl text-primary leading-none">Belle</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Alternar tema"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/50 transition hover:bg-card"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105 md:inline-flex"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMenu(!menu)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            >
              {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menu && (
          <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">
                  {n.label}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground">
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative gradient-hero overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-rose/40 blur-3xl animate-blob" />
          <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-lilac/40 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-mint/40 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/60 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Papelaria criativa & inspiradora
            </span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-primary md:text-8xl">
              Belle <span className="gradient-brand-text">Papelaria</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-foreground/75 md:text-xl">
              Tudo que inspira, você encontra aqui. Cadernos, canetas, agendas e muito mais — selecionados com muito carinho para o seu dia a dia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#categorias" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-105 hover:shadow-glow">
                Ver Produtos
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-7 py-3.5 text-sm font-semibold text-primary backdrop-blur transition hover:bg-card">
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-foreground/60">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-rose text-rose" />)}
                <span className="ml-1 font-semibold text-foreground/80">4.9/5</span>
              </div>
              <div>+1.000 clientes felizes</div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-rose/30 via-lilac/30 to-mint/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
              <img src={heroImg} alt="Materiais de papelaria coloridos" width={1280} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl p-4 shadow-soft animate-float">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint">
                <BookOpen className="h-5 w-5 text-primary" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Cadernos</div>
                <div className="text-sm font-bold">+200 modelos</div>
              </div>
            </div>
            <div className="glass absolute -top-4 -right-4 flex items-center gap-3 rounded-2xl p-4 shadow-soft animate-float-slow">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose">
                <Pencil className="h-5 w-5 text-primary" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Canetas</div>
                <div className="text-sm font-bold">Todas as cores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div data-reveal className="opacity-0">
              <span className="font-display text-3xl gradient-brand-text">Nossa história</span>
              <h2 className="mt-2 text-4xl font-bold text-primary md:text-5xl">
                Sobre a <span className="font-display">Belle</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75">
                Fundada para oferecer produtos de papelaria com qualidade, variedade e muito carinho para o dia a dia dos clientes. Acreditamos que pequenos detalhes inspiram grandes ideias.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: Sparkles, label: "Criatividade", color: "bg-rose" },
                  { icon: CheckCircle2, label: "Organização", color: "bg-mint" },
                  { icon: Heart, label: "Inspiração", color: "bg-lilac" },
                  { icon: Star, label: "Qualidade", color: "bg-rose" },
                ].map((v) => (
                  <div key={v.label} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${v.color} transition group-hover:scale-110`}>
                      <v.icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="font-semibold">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal className="relative opacity-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl bg-rose p-8 shadow-card">
                    <div className="font-display text-6xl text-primary">10+</div>
                    <div className="mt-2 text-sm font-medium text-primary/80">anos de carinho</div>
                  </div>
                  <div className="rounded-3xl bg-mint p-8 shadow-card">
                    <div className="font-display text-6xl text-primary">500+</div>
                    <div className="mt-2 text-sm font-medium text-primary/80">produtos únicos</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl bg-lilac p-8 shadow-card">
                    <div className="font-display text-6xl text-primary">1k+</div>
                    <div className="mt-2 text-sm font-medium text-primary/80">clientes felizes</div>
                  </div>
                  <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-card">
                    <div className="font-display text-6xl">4.9</div>
                    <div className="mt-2 text-sm font-medium opacity-80">avaliação média</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section id="categorias" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center" data-reveal style={{ opacity: 0 }}>
            <span className="font-display text-3xl gradient-brand-text">Explore</span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Nossas categorias</h2>
            <p className="mt-4 text-foreground/70">Encontre tudo o que você precisa, organizado com carinho.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, title: "Material Escolar", desc: "Tudo para um ano letivo inspirador.", img: catEscolar, bg: "bg-lilac" },
              { icon: BookOpen, title: "Cadernos & Agendas", desc: "Modelos lindos para suas anotações.", img: catCadernos, bg: "bg-rose" },
              { icon: Pencil, title: "Canetas & Marca-textos", desc: "Cores que despertam criatividade.", img: catCanetas, bg: "bg-mint" },
              { icon: Gift, title: "Presentes & Organização", desc: "Detalhes especiais para presentear.", img: catPresentes, bg: "bg-rose" },
            ].map((c, i) => (
              <div
                key={c.title}
                data-reveal
                style={{ opacity: 0, animationDelay: `${i * 0.1}s` }}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={c.img} alt={c.title} width={800} height={800} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className={`mb-3 inline-grid h-11 w-11 place-items-center rounded-xl ${c.bg}`}>
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{c.desc}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Saiba mais <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section id="destaques" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6" data-reveal style={{ opacity: 0 }}>
            <div>
              <span className="font-display text-3xl gradient-brand-text">Em destaque</span>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">Produtos amados</h2>
            </div>
          </div>
          <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 scroll-smooth">
            {[
              { name: "Cadernos personalizados", price: "A partir de R$ 29", color: "bg-rose" },
              { name: "Kits escolares completos", price: "A partir de R$ 89", color: "bg-mint" },
              { name: "Marca-textos pastel", price: "A partir de R$ 12", color: "bg-lilac" },
              { name: "Canetas coloridas", price: "A partir de R$ 8", color: "bg-rose" },
              { name: "Organizadores de mesa", price: "A partir de R$ 35", color: "bg-mint" },
              { name: "Agendas 2026", price: "A partir de R$ 49", color: "bg-lilac" },
            ].map((p) => (
              <div key={p.name} className="group min-w-[280px] snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                <div className={`relative grid h-56 place-items-center ${p.color}`}>
                  <Sparkles className="h-16 w-16 text-primary/40 transition group-hover:scale-125 group-hover:rotate-12" />
                  <span className="absolute right-4 top-4 rounded-full bg-card px-3 py-1 text-xs font-bold text-primary shadow-card">NOVO</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{p.price}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                    <MessageCircle className="h-4 w-4" /> Quero esse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center" data-reveal style={{ opacity: 0 }}>
            <span className="font-display text-3xl text-rose">Por que a Belle</span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Nossos diferenciais</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Qualidade garantida", color: "bg-rose" },
              { label: "Grande variedade", color: "bg-mint" },
              { label: "Atendimento personalizado", color: "bg-lilac" },
              { label: "Produtos selecionados", color: "bg-rose" },
              { label: "Ambiente acolhedor", color: "bg-mint" },
            ].map((d, i) => (
              <div
                key={d.label}
                data-reveal
                style={{ opacity: 0, animationDelay: `${i * 0.08}s` }}
                className="group rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-primary-foreground/10"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${d.color} transition group-hover:rotate-6 group-hover:scale-110`}>
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-4 font-semibold">{d.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <Galeria />

      {/* DEPOIMENTOS */}
      <Depoimentos />

      {/* CONTATO */}
      <section id="contato" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center" data-reveal style={{ opacity: 0 }}>
            <span className="font-display text-3xl gradient-brand-text">Fale com a gente</span>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Vamos conversar?</h2>
            <p className="mt-4 text-foreground/70">Tire dúvidas, faça encomendas ou visite nossa loja.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4" data-reveal style={{ opacity: 0 }}>
              {[
                { icon: MapPin, label: "Endereço", value: "Rua Rômulo Menezes, 447" },
                { icon: Heart, label: "Proprietária", value: "Isabelle Florentino" },
                { icon: Phone, label: "WhatsApp", value: "(11) 98765-4321" },
                { icon: Mail, label: "E-mail", value: "contato@bellepapelaria.com.br" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-rose">
                    <c.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 font-semibold break-words">{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <iframe
                  title="Mapa Belle Papelaria"
                  src="https://www.google.com/maps?q=Rua+R%C3%B4mulo+Menezes,+447&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); const f = new FormData(e.currentTarget as HTMLFormElement); const text = `Olá! Sou ${f.get("name")}.%0A${f.get("msg")}`; window.open(`https://wa.me/5511987654321?text=${text}`, "_blank"); }}
              className="space-y-4 rounded-3xl border border-border bg-card p-8 shadow-card"
              data-reveal
              style={{ opacity: 0 }}
            >
              <div>
                <label className="text-sm font-medium" htmlFor="name">Seu nome</label>
                <input id="name" name="name" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="msg">Mensagem</label>
                <textarea id="msg" name="msg" rows={5} required className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] hover:shadow-soft">
                <Send className="h-4 w-4" /> Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-rose">
                <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              </span>
              <span className="font-display text-3xl">Belle</span>
            </div>
            <p className="mt-4 max-w-xs text-sm opacity-75">Tudo que inspira, você encontra aqui. Papelaria feita com carinho.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navegação</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:opacity-100 hover:underline">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              <li>Rua Rômulo Menezes, 447</li>
              <li>(11) 98765-4321</li>
              <li>contato@bellepapelaria.com.br</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-primary-foreground/20">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-primary-foreground/20">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-4 pt-6 text-center text-xs opacity-60 sm:px-6">
          © {new Date().getFullYear()} Belle Papelaria. Feito com <Heart className="inline h-3 w-3 fill-rose text-rose" /> em São Paulo.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      </a>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="fixed bottom-24 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function Galeria() {
  const items = [
    { cat: "Cadernos", img: catCadernos, h: "row-span-2" },
    { cat: "Canetas", img: catCanetas, h: "" },
    { cat: "Escolar", img: catEscolar, h: "" },
    { cat: "Presentes", img: catPresentes, h: "row-span-2" },
    { cat: "Cadernos", img: catCadernos, h: "" },
    { cat: "Canetas", img: catCanetas, h: "" },
  ];
  const cats = ["Todos", "Cadernos", "Canetas", "Escolar", "Presentes"];
  const [active, setActive] = useState("Todos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "Todos" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="galeria" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center" data-reveal style={{ opacity: 0 }}>
          <span className="font-display text-3xl gradient-brand-text">Inspirações</span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Nossa galeria</h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${active === c ? "bg-primary text-primary-foreground shadow-soft" : "border border-border bg-card hover:bg-muted"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(it.img)}
              className={`group relative overflow-hidden rounded-2xl shadow-card transition hover:shadow-soft ${it.h}`}
            >
              <img src={it.img} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold opacity-0 transition group-hover:opacity-100">
                {it.cat}
              </span>
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-primary/80 p-4 backdrop-blur"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-glow" />
          <button onClick={() => setLightbox(null)} aria-label="Fechar" className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-card">
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}

function Depoimentos() {
  const items = [
    { name: "Mariana S.", text: "Amei tudo! Os cadernos são lindos e o atendimento é super carinhoso. Sempre volto.", color: "bg-rose" },
    { name: "Camila R.", text: "Encontrei tudo que precisava para organizar minha rotina. A Isabelle é um amor!", color: "bg-mint" },
    { name: "Bruna L.", text: "Variedade incrível e preços ótimos. Virei cliente fiel da Belle.", color: "bg-lilac" },
    { name: "Ana P.", text: "Os kits escolares salvaram o início do ano letivo. Super recomendo!", color: "bg-rose" },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section className="bg-gradient-to-br from-rose/20 via-lilac/20 to-mint/20 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center" data-reveal style={{ opacity: 0 }}>
          <span className="font-display text-3xl gradient-brand-text">Quem ama, recomenda</span>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Depoimentos</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-rose text-rose" />)}
            <span className="ml-2 font-bold">4.9/5</span>
          </div>
        </div>
        <div className="relative mt-12 h-64">
          {items.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-700 ${i === idx ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-6"}`}
            >
              <Quote className="h-8 w-8 text-rose" />
              <p className="mt-4 text-lg italic text-foreground/80 md:text-xl">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full ${t.color} font-bold text-primary`}>
                  {t.name[0]}
                </span>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">Cliente Belle</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
