import {
    LayoutGrid,
    Wallet,
    ArrowLeftRight,
    ChartColumn,
    Settings,
    TrendingUp,
    Ellipsis,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NavEntry {
    label: string
    icon: LucideIcon
}

const navItems: NavEntry[] = [
    { label: 'Resumen', icon: LayoutGrid },
    { label: 'Cuentas', icon: Wallet },
    { label: 'Transacciones', icon: ArrowLeftRight },
    { label: 'Presupuestos', icon: ChartColumn },
]

interface SidebarProps {
    active: string
    onNavigate: (item: string) => void
}

export default function Sidebar({ active, onNavigate }: SidebarProps) {
    return (
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-ink px-5 py-7 text-white lg:flex">
            {/* Logo */}
            <div className="flex items-center gap-3 px-2">
                <div className="grid size-9 place-items-center rounded-xl bg-accent text-ink">
                    <TrendingUp size={22} />
                </div>
                <span className="text-xl font-semibold tracking-tight">Clara</span>
            </div>

            {/* Menú principal */}
            <nav className="mt-12 space-y-1.5" aria-label="Navegación principal">
                {navItems.map(({ label, icon: Icon }) => {
                    const isActive = active === label
                    return (
                        <button
                            key={label}
                            onClick={() => onNavigate(label)}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                                isActive
                                    ? 'bg-white/10 font-medium text-white'
                                    : 'text-white/55 hover:bg-white/5 hover:text-white'
                            }`}
                        >
              <span
                  className={`grid size-8 place-items-center rounded-lg ${
                      isActive ? 'bg-accent text-ink' : 'text-white/60'
                  }`}
              >
                <Icon size={18} />
              </span>
                            {label}
                        </button>
                    )
                })}
            </nav>

            {/* Parte baja */}
            <div className="mt-auto">
                <button
                    onClick={() => onNavigate('Ajustes')}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
                >
          <span className="grid size-8 place-items-center">
            <Settings size={18} />
          </span>
                    Ajustes
                </button>

                <div className="mt-4 flex items-center gap-3 border-t border-white/10 px-2 pt-6">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-sand font-semibold text-ink">
                        JD
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-medium">Javier Díaz</p>
                        <p className="truncate text-xs text-white/45">Plan personal</p>
                    </div>
                    <button className="ml-auto text-white/45 hover:text-white" aria-label="Opciones de perfil">
                        <Ellipsis size={18} />
                    </button>
                </div>
            </div>
        </aside>
    )
}