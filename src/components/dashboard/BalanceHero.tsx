import { useState } from 'react'
import { Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react'
import type { Summary } from '../../types/summary'
import { formatEuro } from '../../lib/format'

interface BalanceHeroProps {
    summary: Summary
}

export default function BalanceHero({ summary }: BalanceHeroProps) {
    const [visible, setVisible] = useState(true)

    const percent = summary.changePercent.toLocaleString('es-ES')

    return (
        <section className="relative overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-8">
            {/* Círculo decorativo */}
            <div className="absolute -right-12 -top-20 size-64 rounded-full border-32 border-white/5" />

            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_1fr]">
                {/* Balance total */}
                <div>
                    <div className="flex items-center gap-2 text-sm text-white/55">
                        Balance total
                        <button
                            onClick={() => setVisible((value) => !value)}
                            className="text-white/45 transition hover:text-white"
                            aria-label={visible ? 'Ocultar balance' : 'Mostrar balance'}
                        >
                            {visible ? <Eye size={17} /> : <EyeOff size={17} />}
                        </button>
                    </div>

                    <p className="mt-2 font-mono text-4xl font-medium tracking-tight sm:text-5xl">
                        {visible ? formatEuro(summary.balance) : '••••••••'}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white/8 px-3 py-1.5 text-xs">
            <span className="grid size-5 place-items-center rounded-full bg-accent text-ink">
              <ArrowUp size={13} />
            </span>
                        <strong className="text-accent">{percent}%</strong>
                        <span className="text-white/50">vs. mes anterior</span>
                    </div>
                </div>

                {/* Ingresos y gastos */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-1">
                    <div>
                        <p className="flex items-center gap-2 text-xs text-white/45">
              <span className="grid size-6 place-items-center rounded-full bg-accent/15 text-accent">
                <ArrowDown size={13} />
              </span>
                            Ingresos
                        </p>
                        <p className="mt-3 font-mono text-xl font-medium">
                            {formatEuro(summary.income, 0)}
                        </p>
                    </div>

                    <div>
                        <p className="flex items-center gap-2 text-xs text-white/45">
              <span className="grid size-6 place-items-center rounded-full bg-danger/15 text-danger-soft">
                <ArrowUp size={13} />
              </span>
                            Gastos
                        </p>
                        <p className="mt-3 font-mono text-xl font-medium">
                            {formatEuro(summary.expenses, 0)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}