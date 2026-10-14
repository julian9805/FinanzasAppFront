import { Search, Bell, Plus } from 'lucide-react'

interface HeaderProps {
    userName: string
    onNew: () => void
}

export default function Header({ userName, onNew }: HeaderProps) {
    const today = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })
    const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1)

    return (
        <header className="flex items-center justify-between gap-4">
            <div>
                <p className="mb-1 text-sm text-muted">{todayCapitalized}</p>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Buenos días, {userName}
                </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <button className="icon-button hidden sm:grid" aria-label="Buscar">
                    <Search size={19} />
                </button>

                <button className="icon-button relative" aria-label="Notificaciones">
                    <Bell size={19} />
                    <span className="absolute right-2 top-2 size-1.5 rounded-full bg-danger ring-2 ring-canvas" />
                </button>

                <button className="primary-button" onClick={onNew}>
                    <Plus size={18} />
                    <span className="hidden sm:inline">Nueva transacción</span>
                    <span className="sm:hidden">Añadir</span>
                </button>
            </div>
        </header>
    )
}