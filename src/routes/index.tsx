import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Clock3, Flame, Heart, Medal, MessageCircle, Plus, Sparkles, Timer, Trophy, Users, Zap } from "lucide-react";
import { ChallengeShell } from "@/components/challenge-shell";
import { Button } from "@/components/ui/button";

const avatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCuIzEI0jm9Z8w8Qoiiec_ZLaiI8OHABZjU3X6hp8tgVOg2CSv7yaqnr5glLjE_G22-EsEAzWH2c9gx7XBGHTEjl7ZB-VQIMrtUyyxEF6JhhgnjTbl-v9S34dVjuZ1ajeYBZqW_EYIu3A-J6vUpZzqspnCM-gwU0ys4BeemZmcg8kNTwS2Xw27_2e4Z96Gm70kjBKKcZQaiRwwyI4noZldIUyfk0ibgy-BDFxI6XRdvSkIuZD7-HcUm",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuYLbHpy6TQbp_lA3Yjgk9TXf-SAYkak1WkK3RJnfKw2821RYbnJUs2uRgFd8B3WQOEGrgqKEknEyZK9ZQ1r_PlIsSXkpSk6iSzF9cKBg3PK3OXwplKYKY32yK6DcmRL2OmoMKH3TFztkMNRHg-XmzHRnQ0_yJ49LHrH7CWcjGvqIISX9u97RwhJg4TTvgbt4FttDGbTOPTTiBXEkiNG9bWou9XE1v8R0rs8Hb0MzR4_u_TgfJRipe",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-sBUgi0W-EJ361RruYLsvUW-S8tPhq2eacOr4nlyzMrccHb_SAIGOAlVD2ixGzYpTFwoLvq48MCRrxOMEi7jNm2-lfw5PcMCevLeIFWe173IiHdgWPtKu-XXmAgtN6gOoldxVVnzAPaztgg4vIxqGxMyyFk-dPjVSQLQfOxsCKI6ac42scgI6DzQNB_D-2QGnuAMoNC3HhGCJMQp0AQhjHMnwEVgmScR9B8g7jPNh_WEKI8Ti5wOl",
];
const postAvatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuAtxf5I-aCU4vIlxSYWKdHKiE5D6c2uaDra4neyekuWyaXSmbPydJbXl9YLQmBJVd0ScJd6bLasJzI2GSMtIg2OoP0EdHLgDHfTZ04hscrC3Ycqzot7NIcdiO_lQrmQJTduzC7PbNzdbq3NLBcQUwd71HP2DfG1Eqyg5EL-i7Lb0HmR58KrPNaXZRkNwI9FvhbpoX6vSZ4HvH4X8EanxOCpTXx1n-uPeXN4Gte3bS3DtO1Fk95d436N";
const postImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuARSfIuO1__Y2sc1VaxFjJzLQMAY0vGJQEh41nn-Sm2grF-uVJ59z4Y9oGNQktahaHXPJ6avvZR-XE3YcQydJEyZH3Wtdlbsm89Z2YnCvgx73Yg7sbS_faPyhGq23fFgrTawKjS9JQYkvV_w-sLe7tBVoGPuBHah2aExukhQpnQqciOCcX4hb0PPSOZVuAwQQPqF8RujwjUNcjLRj--ojO8MWMScNM-rKMrbpDpIW_FA-MYEY2efEbB";
const popularImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAE-v6SyRlrLs33yPB7kgHhBNVX1atcWE4AgITUr4nKJ5UIEJvSaHAfUbqiOKWiy6yxyoRgTBJhVDB6V-XCHIsEn8jxJ6eqm3h1em9I0-NsnJUapMMcflpAwGaqpr4B92q7kjRjRTrxHXyYFpCx-0WIWHyM5SgcFFUWZ4wD6nYVuPU1RsqQRhsdkHTi20VfS1KH57qwiKabvMACE4Qyh6Hl3P1d7-2yyYUA1tD812z6tzdF3QGvx_EX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8UWZg1uIbch4WQbcYtyTsqS2Y-QlCRfnE2lnSMZp79sM2buEjZ9UEQax3bCc_70MvW3rpNpre5xXtYJxishN7wW3HJYTQVQ8IylOuJvfu69qL4Kr2reuysFdMu7IamyKhpWvf3zeysXzgRJbmKtdRSXN9XXjdVDnDTfb4Aw4e6Ug_lZqH6KxqkMdnZoVGtLWwidAB_1UNyrdAnLBAaWnJrGMF6MrYrJOwjlvVfIqapFtNiUREAHJ1",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCaL4khxRBTzajYpoV0u7MZY52EMHAKvnQzaZJsEYKgbC8ORxqthkANTBtfq8cydKMDk3ushGcs0wQFE30wD9KUswd7-m8U1YLR7cgYUQBlKUC4MV7UR6naJQ-_Yy4-LtwB8-dF1l6yGYBpwiisOwtqC3GyTwuxrNyDk7WyoGc1j7xrEyDPl9RKRJ-moUv3f3HS4aRu39IcP5-Ns7nK-hzvRiltv8b1IzmlRbH-LddfPDGLmVGkfEr9",
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Início — Challenge" },
    { name: "description", content: "Acompanhe seus hábitos, amigos e desafios diários no Challenge." },
    { property: "og:title", content: "Início — Challenge" },
    { property: "og:description", content: "Hábitos, desafios e conquistas para fazer junto com seus amigos." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

const active = [
  ["Fotografia 📸", "30 Dias de Fotografia Urbana", "Lucas M.", "12d", 40, "bg-sky-soft"],
  ["Leitura 📚", "Clube do Livro: 1 Livro por Mês", "Você (Bia R.)", "4d", 85, "bg-lavender"],
  ["Hábitos 🏃‍♀️", "30 Minutos de Corrida/Caminhada", "Camila V.", "18d", 60, "bg-mint-soft"],
] as const;
const popular = [
  ["Artes & Criatividade 🎨", "Desenho Diário em 15 min", "Liberte o lado artístico sem pressão: um esboço rápido todo santo dia.", "Mestre do Traço", "+300 XP", "11"],
  ["Nutrição & Bem-estar 🥑", "Café da Manhã Saudável", "Poste a foto do seu café nutritivo todo dia e ganhe energia extra em grupo.", "Nutri-Rotina", "+250 XP", "20"],
  ["Idiomas & Estudos 🌍", "1 Lição de Idioma por Dia", "Pelo menos 10 minutos de prática com seu app de idiomas favorito.", "Poliglota", "+400 XP", "16"],
] as const;
const stats = [
  { icon: Zap, title: "Nível 8", sub: "1.420 XP", className: "bg-lavender text-primary" },
  { icon: Flame, title: "14 Dias", sub: "Fogo Ativo 🔥", className: "bg-streak-soft text-streak" },
  { icon: Trophy, title: "6 Ativos", sub: "18 Concluídos", className: "bg-gold-soft text-streak" },
];

function Home() {
  return <ChallengeShell>
    <div className="animate-rise-in">
      <div className="mb-5 flex items-end justify-between">
        <div><p className="text-sm font-bold text-muted-foreground">Olá, Bia! 👋</p><h1 className="mt-1 text-3xl font-black">Pronta para hoje?</h1></div>
        <div className="rounded-full bg-gold-soft px-3 py-1.5 text-xs font-extrabold text-streak">⭐ Temporada 3</div>
      </div>
      <p className="mb-4 text-sm font-semibold text-muted-foreground">Você tem <b className="text-coral">2 desafios</b> com prazo hoje!</p>

      <section className="relative overflow-hidden rounded-2xl bg-primary p-5 text-primary-foreground shadow-action sm:p-6">
        <div className="absolute -right-8 -top-9 size-36 rounded-full bg-primary-foreground/10" />
        <div className="relative flex items-start gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary-foreground/15"><BookOpen className="size-6" /></div>
          <div className="min-w-0 flex-1"><p className="text-xs font-bold opacity-75">Desafio do Dia • Família & Amigos</p><div className="mt-1 flex items-start justify-between gap-3"><h2 className="text-xl font-black">Ler 20 páginas hoje</h2><span className="shrink-0 rounded-full bg-gold-soft px-2 py-1 text-xs font-black text-streak">+120 XP</span></div></div>
        </div>
        <div className="relative mt-5"><div className="mb-2 flex justify-between text-xs font-bold"><span>Meta diária</span><span>15 de 20 pág. (75%)</span></div><div className="h-2 rounded-full bg-primary-foreground/20"><div className="h-2 w-3/4 rounded-full bg-primary-foreground" /></div></div>
        <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3"><div className="flex items-center"><div className="flex -space-x-2">{avatars.map((a) => <img key={a} src={a} alt="" className="size-8 rounded-full border-2 border-primary object-cover" />)}</div><span className="ml-3 text-xs font-bold">+3 leram hoje</span></div><Button variant="secondary" className="h-10 rounded-xl bg-primary-foreground px-4 font-extrabold text-primary hover:bg-primary-foreground/90"><CheckCircle2 /> Fazer Check-in</Button></div>
      </section>

      <section className="my-4 grid grid-cols-3 gap-2">
        {stats.map(({icon: Icon,title,sub,className}) => <div key={title} className="rounded-xl bg-surface p-3 shadow-sm"><div className={`mb-2 grid size-8 place-items-center rounded-lg ${className}`}><Icon className="size-4" /></div><p className="text-sm font-black">{title}</p><p className="text-[10px] font-bold text-muted-foreground">{sub}</p></div>)}
      </section>

      <Link to="/create" className="mb-7 flex items-center gap-3 rounded-xl border border-primary/15 bg-primary-soft p-4 text-primary transition-transform hover:-translate-y-0.5"><span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Plus /></span><span className="flex-1"><b className="block text-sm">+ Criar Novo Desafio</b><span className="text-xs text-muted-foreground">Desafie sua turma agora mesmo!</span></span><ArrowRight /></Link>

      <SectionTitle icon={CheckCircle2} title="Em Andamento" badge="3" action="Ver todos" />
      <div className="grid gap-3 md:grid-cols-3">{active.map((c) => <article key={c[1]} className="rounded-xl bg-surface p-4 shadow-sm"><div className="flex justify-between text-xs font-extrabold"><span className={`rounded-lg px-2 py-1 ${c[5]}`}>{c[0]}</span><span className="flex items-center gap-1 text-muted-foreground"><Clock3 className="size-3.5" /> {c[3]}</span></div><h3 className="mt-4 min-h-12 text-base font-black leading-tight">{c[1]}</h3><p className="text-xs text-muted-foreground">Criado por {c[2]}</p><div className="mt-5 flex justify-between text-xs font-extrabold"><span>Progresso</span><span>{c[4]}%</span></div><div className="mt-2 h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-primary" style={{width:`${c[4]}%`}} /></div><div className="mt-4 flex items-center justify-between"><div className="flex -space-x-2"><span className="grid size-7 place-items-center rounded-full border-2 border-surface bg-lavender text-[9px] font-black">LM</span><span className="grid size-7 place-items-center rounded-full border-2 border-surface bg-mint-soft text-[9px] font-black">BR</span><span className="grid size-7 place-items-center rounded-full border-2 border-surface bg-muted text-[9px] font-black">+6</span></div><span className="rounded-full bg-mint-soft px-2 py-1 text-[10px] font-black">Ativo</span></div></article>)}</div>

      <div className="mt-8"><SectionTitle icon={Timer} title="Próximos de Terminar" badge="Urgente" /></div>
      <div className="grid gap-3 sm:grid-cols-2"><Urgent icon="💧" title="Hidratação 2.5L ao dia" time="8h rest." leader="Rafael (100%) 🥇" action="Completar" /><Urgent icon="🌙" title="Sem Telas 1h Antes de Dormir" time="Termina amanhã" leader="Você & Bia (95%)" action="Ver Placar" /></div>

      <div className="mt-8"><SectionTitle icon={Users} title="Feed dos Amigos" badge="Em tempo real" /></div>
      <article className="overflow-hidden rounded-xl bg-surface shadow-sm"><div className="flex items-center gap-3 p-4"><img src={postAvatar} alt="Lucas M." className="size-11 rounded-full object-cover" /><div className="flex-1"><p className="font-black">Lucas M. <CheckCircle2 className="inline size-4 text-primary" /></p><p className="text-xs text-muted-foreground">há 12 minutos • Clube do Livro</p></div><span className="rounded-full bg-primary-soft px-2 py-1 text-xs font-black text-primary">Dia 26/30</span></div><p className="px-4 pb-4 text-sm leading-relaxed">“Capítulo 8 finalizado no ônibus hoje! 📖✨ Meta de 20 páginas super batida antes do almoço.”</p><div className="relative aspect-[16/9] overflow-hidden"><img src={postImage} alt="Registro de leitura de Lucas" className="size-full object-cover" /><span className="absolute bottom-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-extrabold text-primary backdrop-blur"><CheckCircle2 className="mr-1 inline size-4" /> Foto Verificada</span></div><div className="flex items-center gap-5 p-4 text-sm font-bold text-muted-foreground"><span><Heart className="mr-1 inline size-5 text-coral" />14</span><span><Flame className="mr-1 inline size-5 text-streak" />8</span><MessageCircle className="size-5" /><span className="ml-auto text-xs">Bia e +12 curtiram</span></div></article>

      <div className="mt-8"><SectionTitle icon={Sparkles} title="Populares entre Amigos" action="Explorar" /></div>
      <div className="grid gap-4 md:grid-cols-3">{popular.map((p,i) => <article key={p[1]} className="overflow-hidden rounded-xl bg-surface shadow-sm"><img src={popularImages[i]} alt="" className="aspect-[16/9] w-full object-cover" /><div className="p-4"><p className="text-xs font-extrabold text-muted-foreground">{p[0]}</p><div className="mt-3 flex items-center justify-between gap-2 text-[10px] font-black text-streak"><span className="rounded-full bg-gold-soft px-2 py-1"><Medal className="mr-1 inline size-3" /> Medalha {p[3]}</span><span>{p[4]}</span></div><h3 className="mt-3 text-lg font-black">{p[1]}</h3><p className="mt-1 min-h-12 text-xs leading-relaxed text-muted-foreground">{p[2]}</p><div className="mt-4 flex items-center justify-between"><span className="text-xs font-bold text-muted-foreground"><Users className="mr-1 inline size-4" />{p[5]} amigos já topam</span><Button variant="soft" size="sm">Entrar</Button></div></div></article>)}</div>
      <div className="mt-6 flex items-center gap-4 rounded-xl bg-gold-soft p-4"><span className="text-3xl">🎉</span><div><p className="font-black">Você está entre os top 5% da turma!</p><p className="text-xs text-muted-foreground">Continue assim para conquistar a coroa de Campeão Semanal no domingo.</p></div></div>
    </div>
  </ChallengeShell>;
}

function SectionTitle({ icon: Icon, title, badge, action }: { icon: typeof Trophy; title: string; badge?: string; action?: string }) { return <div className="mb-3 flex items-center gap-2"><Icon className="size-5 text-primary" /><h2 className="text-lg font-black">{title}</h2>{badge && <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-black text-primary">{badge}</span>}{action && <button className="ml-auto flex items-center text-xs font-extrabold text-primary">{action}<ChevronRight className="size-4" /></button>}</div>; }
function Urgent({ icon,title,time,leader,action }: {icon:string;title:string;time:string;leader:string;action:string}) { return <article className="flex items-center gap-3 rounded-xl bg-surface p-4 shadow-sm"><span className="grid size-11 place-items-center rounded-xl bg-sky-soft text-xl">{icon}</span><div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-2"><h3 className="text-sm font-black">{title}</h3><span className="shrink-0 text-[10px] font-extrabold text-coral">{time}</span></div><p className="mt-1 text-[11px] text-muted-foreground">Líder atual: <b>{leader}</b></p></div><Button variant="soft" size="sm">{action}</Button></article>; }