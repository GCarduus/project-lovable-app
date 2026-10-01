import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BookOpen, Brush, CalendarDays, Camera, Check, CheckCircle2, ClipboardCheck, Dumbbell, Edit3, Globe2, GraduationCap, Lightbulb, Lock, Medal, Palette, Rocket, Save, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import { ChallengeShell } from "@/components/challenge-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/create")({
  head: () => ({ meta: [
    { title: "Criar novo desafio — Challenge" }, { name: "description", content: "Crie um novo desafio social e convide seus amigos." },
    { property: "og:title", content: "Criar novo desafio — Challenge" }, { property: "og:description", content: "Monte uma rotina divertida, colaborativa e cheia de boas energias." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: CreateChallenge,
});

const categories = [[BookOpen,"Leitura"],[GraduationCap,"Aprendizado"],[Camera,"Fotografia"],[Brush,"Desenho & Arte"],[Sparkles,"Quizzes"],[ClipboardCheck,"Tarefas & Rotina"],[Lightbulb,"Criatividade"],[Dumbbell,"Saúde & Bem-estar"]] as const;
const proofs = [[Camera,"Foto Diária (Estilo BeReal)","Mais visual e autêntico"],[CheckCircle2,"Check-in Simples","Um toque com auto-declaração de honra"],[Edit3,"Pequeno Relato / Reflexão","Texto curto de 1 ou 2 frases sobre o progresso"]] as const;
const durationOptions = [{ value: "7", label: "7 Dias" }, { value: "14", label: "14 Dias" }, { value: "30", label: "30 Dias" }, { value: "Outro", label: "Outro" }];
const privacyOptions = [{ icon: Lock, label: "Apenas Amigos" }, { icon: Globe2, label: "Desafio Aberto" }];

function CreateChallenge() {
  const navigate = useNavigate({ from: "/create" });
  const [name,setName] = useState(""); const [description,setDescription] = useState("");
  const [category,setCategory] = useState("Leitura"); const [days,setDays] = useState("7"); const [proof,setProof] = useState("Foto Diária (Estilo BeReal)"); const [privacy,setPrivacy] = useState("Apenas Amigos"); const [limit,setLimit] = useState("10"); const [created,setCreated] = useState(false); const [draft,setDraft] = useState(false);
  return <ChallengeShell title="Criar">
    <div className="mx-auto max-w-2xl animate-rise-in">
      <div className="mb-5 flex items-center justify-between"><span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-black text-primary">Novo Hábito Social</span><span className="text-xs font-bold text-muted-foreground">Etapa 1 de 2</span></div>
      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full w-1/2 rounded-full bg-primary" /></div>
      <h1 className="text-3xl font-black">Criar Novo Desafio</h1><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Desafie seus amigos para uma rotina divertida, colaborativa e cheia de boas energias!</p>

      <FormSection icon={Palette} title="Capa & Identidade">
        <div className="relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-xl bg-primary-soft p-5 text-center"><div className="absolute -right-6 -top-8 size-28 rounded-full bg-primary/10" /><div className="relative grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-action"><BookOpen className="size-8" /></div><p className="relative mt-3 font-black">Leitura Diária</p><button className="relative mt-2 flex items-center gap-1 text-xs font-extrabold text-primary"><Camera className="size-4" /> Alterar Foto</button></div>
        <Label text="Escolha o ícone do desafio:"><div className="flex gap-2">{[BookOpen,Camera,Brush,Dumbbell,Lightbulb].map((Icon,i)=><button key={i} aria-label={`Ícone ${i+1}`} className={`grid size-10 place-items-center rounded-xl border ${i===0?"border-primary bg-primary text-primary-foreground":"border-border bg-background text-muted-foreground"}`}><Icon className="size-5" /></button>)}</div></Label>
      </FormSection>

      <FormSection title="Detalhes do Desafio">
        <Label text="Nome do Desafio" required counter={`${name.length}/60`}><Input maxLength={60} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Dê um nome cativante e claro" className="h-12 rounded-xl bg-background px-4" /></Label>
        <Label text="Categoria do Desafio" counter="1 selecionada"><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{categories.map(([Icon,label])=><button key={label} onClick={()=>setCategory(label)} className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border p-2 text-xs font-extrabold transition ${category===label?"border-primary bg-primary-soft text-primary":"border-border bg-background text-muted-foreground hover:border-primary/40"}`}><Icon className="size-5" />{label}</button>)}</div></Label>
        <Label text="Descrição & Motivação" counter={`${description.length}/280`}><Textarea maxLength={280} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Conte por que esse desafio vai fazer bem para o grupo..." className="min-h-28 rounded-xl bg-background p-4" /><p className="mt-2 flex items-center gap-1 text-xs font-bold text-primary"><Lightbulb className="size-4" /> Seja acolhedor e positivo!</p></Label>
      </FormSection>

      <FormSection icon={CalendarDays} title="Duração do Desafio"><div className="grid grid-cols-4 gap-2">{durationOptions.map(({value,label})=><button key={value} onClick={()=>setDays(value)} className={`rounded-xl border py-3 text-sm font-extrabold ${days===value?"border-primary bg-primary text-primary-foreground":"border-border bg-background"}`}>{label}</button>)}</div><div className="grid grid-cols-2 gap-3"><DateBox icon={CalendarDays} label="Início" value="Hoje (18 Mar)" /><DateBox icon={Check} label="Conclusão" value={days === "7" ? "25 Março" : days === "14" ? "1 Abril" : "17 Abril"} /></div></FormSection>

      <FormSection icon={ClipboardCheck} title="Critérios de Comprovação"><p className="-mt-2 text-xs text-muted-foreground">Como os amigos irão validar o cumprimento diário?</p><div className="grid gap-2">{proofs.map(([Icon,title,sub])=><button key={title} onClick={()=>setProof(title)} className={`flex items-center gap-3 rounded-xl border p-3 text-left ${proof===title?"border-primary bg-primary-soft":"border-border bg-background"}`}><span className={`grid size-10 place-items-center rounded-lg ${proof===title?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground"}`}><Icon className="size-5" /></span><span className="flex-1"><b className="block text-sm">{title}</b><span className="text-xs text-muted-foreground">{sub}</span></span>{proof===title&&<CheckCircle2 className="size-5 text-primary" />}</button>)}</div></FormSection>

      <div className="my-4 flex gap-3 rounded-xl bg-mint-soft p-4"><ShieldCheck className="size-6 shrink-0 text-primary" /><div><p className="text-sm font-black">🛡️ Desafio Positivo & Saudável</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Nossa comunidade prioriza hábitos construtivos, mente sã e incentivo mútuo. Desafios que envolvam perigo físico ou danos não são permitidos.</p></div></div>

      <FormSection icon={Users} title="Privacidade & Participantes"><div className="grid grid-cols-2 gap-2">{privacyOptions.map(({icon: Icon,label})=><button key={label} onClick={()=>setPrivacy(label)} className={`flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-extrabold ${privacy===label?"border-primary bg-primary-soft text-primary":"border-border"}`}><Icon className="size-4" />{label}</button>)}</div><Label text="Limite de participantes:"><div className="grid grid-cols-4 gap-2">{["10","20","50","Livre"].map(v=><button key={v} onClick={()=>setLimit(v)} className={`rounded-xl py-2.5 text-sm font-bold ${limit===v?"bg-primary text-primary-foreground":"bg-muted"}`}>{v}</button>)}</div></Label></FormSection>

      <FormSection icon={Medal} title="Recompensas Simbólicas"><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-lavender p-4"><p className="text-xs font-bold text-muted-foreground">⚡ XP Diário</p><p className="mt-1 text-lg font-black text-primary">+50 XP</p></div><div className="rounded-xl bg-gold-soft p-4"><p className="text-xs font-bold text-muted-foreground">🏅 Ao Concluir</p><p className="mt-1 text-lg font-black text-streak">Medalha Ouro</p></div></div></FormSection>

      <div className="my-5 rounded-xl border border-primary/15 bg-primary-soft p-4 text-center"><p className="font-black text-primary">Desafios em grupo têm 3x mais sucesso!</p><p className="mt-1 text-xs text-muted-foreground">Ao lançar, compartilharemos um link mágico para você enviar no WhatsApp ou convidar no app.</p></div>
      <Button variant="hero" size="xl" className="w-full" onClick={()=>setCreated(true)}><Rocket /> Lançar Desafio Agora</Button><Button variant="ghost" size="lg" className="mt-2 w-full text-muted-foreground" onClick={()=>setDraft(true)}><Save /> Salvar Rascunho para Mais Tarde</Button>
      {draft && <p className="mt-2 text-center text-xs font-bold text-primary">Rascunho salvo com sucesso.</p>}
    </div>
    {created && <div className="fixed inset-0 z-[70] grid place-items-center bg-foreground/30 p-5 backdrop-blur-sm"><div role="dialog" aria-modal="true" className="relative w-full max-w-sm rounded-2xl bg-surface p-7 text-center shadow-2xl"><button aria-label="Fechar" onClick={()=>setCreated(false)} className="absolute right-4 top-4 text-muted-foreground"><X /></button><span className="mx-auto grid size-16 place-items-center rounded-2xl bg-mint-soft text-primary"><Check className="size-8" /></span><h2 className="mt-5 text-2xl font-black">Desafio Criado! 🚀</h2><p className="mt-2 text-sm text-muted-foreground">Convite gerado com sucesso.</p><Button variant="hero" className="mt-6 w-full" onClick={()=>navigate({to:"/"})}>Voltar ao início</Button></div></div>}
  </ChallengeShell>;
}

function FormSection({icon:Icon,title,children}:{icon?:typeof Palette;title:string;children:React.ReactNode}) { return <section className="mt-4 rounded-xl bg-surface p-4 shadow-sm sm:p-5"><div className="mb-4 flex items-center gap-2">{Icon&&<Icon className="size-5 text-primary" />}<h2 className="text-lg font-black">{title}</h2></div><div className="grid gap-5">{children}</div></section>; }
function Label({text,required,counter,children}:{text:string;required?:boolean;counter?:string;children:React.ReactNode}) { return <label className="block"><span className="mb-2 flex justify-between text-sm font-extrabold"><span>{text}{required&&<em className="ml-1 not-italic text-coral">*</em>}</span>{counter&&<span className="text-xs font-bold text-muted-foreground">{counter}</span>}</span>{children}</label>; }
function DateBox({icon:Icon,label,value}:{icon:typeof CalendarDays;label:string;value:string}) { return <div className="rounded-xl bg-muted p-3"><p className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground"><Icon className="size-3.5" />{label}</p><p className="mt-1 text-sm font-black">{value}</p></div>; }