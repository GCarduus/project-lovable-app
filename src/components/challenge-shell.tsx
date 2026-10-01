import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Flame, Home, Plus, Trophy, UserRound, Users } from "lucide-react";

const logo = "https://lh3.googleusercontent.com/aida/AEtjO1URH_YWxuXiI_Xugsl2-g5He6Ydqfuc8bUD3G8wfEFiRioFI8X7KVcfIB7Onp531erzYyCv_MY8w-S3RcRRDRsaR-EY4T8brVeaVNIHF9cnMtANA38ck84N840589iiMQvT0P3gFXSj5VqqDtmp181OWRcdRCwVBdkJoVREkSzjJjAKDngmx2KNBpmPNabBTnzmhGvQNOajokJvf3Z5SjRW2NZSziTWZdVHuREU4SxDpVsIZKbGEblrbls";
const profile = "https://lh3.googleusercontent.com/aida-public/AB6AXuAil8coIckIbQl6c5s_j98BcfphQ6YTgcCdgaJ3kw952U7xOwRojS9PtVeZGBA3V5Gn-de0ZnCYUSdB7hvgGkWedUteRlENoVy7A9XlEEMOO2HQ7-S3gREd5EOxDe9vaOICUS3xhujXH2JVDP449HP1uzdwCxEHePxtM3FRyAtlQrp_K4Z2u4uPte_rtpUeipU9cpYfckhKtZeekz42gCwKwb4KcUrTywpFlMLtrzxM_xkxWwYtZC6U";

const items = [
  { label: "Início", icon: Home, to: "/" as const },
  { label: "Desafios", icon: Trophy, to: "/" as const },
  { label: "Criar", icon: Plus, to: "/create" as const, create: true },
  { label: "Amigos", icon: Users, to: "/" as const },
  { label: "Perfil", icon: UserRound, to: "/" as const },
];

export function ChallengeShell({ children, title }: { children: ReactNode; title?: string }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" aria-label="Challenge — início" className="flex items-center gap-2">
            <img src={logo} alt="Challenge" className="h-9 w-9 rounded-xl object-cover" />
            <span className="hidden text-lg font-extrabold sm:block">Challenge</span>
          </Link>
          <span className="text-sm font-extrabold text-foreground sm:text-base">{title ?? "Início"}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-streak-soft px-2.5 py-1 text-xs font-extrabold text-streak">
              <Flame className="size-4 fill-current" /> 7d
            </div>
            <div className="relative text-muted-foreground">
              <Bell className="size-5" />
              {pathname === "/create" && <span className="absolute -right-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">1</span>}
            </div>
            <img src={profile} alt="Perfil de Bia" className="size-9 rounded-full object-cover ring-2 ring-surface ring-offset-2 ring-offset-primary/20" />
          </div>
        </div>
      </header>

      <main className="mx-auto min-h-screen max-w-5xl px-4 pb-28 pt-20 sm:px-6">{children}</main>

      <nav aria-label="Navegação principal" className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-xl grid-cols-5 items-center px-2">
          {items.map((item) => {
            const active = item.to === "/create" ? pathname === "/create" : pathname === "/" && item.label === "Início";
            const Icon = item.icon;
            return (
              <Link key={item.label} to={item.to} aria-current={active ? "page" : undefined} className={`group flex h-full flex-col items-center justify-center gap-1 text-[11px] font-bold transition-colors ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {item.create ? (
                  <span className="-mt-5 grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-action transition-transform group-hover:-translate-y-0.5"><Icon className="size-6" /></span>
                ) : <Icon className={`size-5 ${active ? "fill-primary/15" : ""}`} />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}