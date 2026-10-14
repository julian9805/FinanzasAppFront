import type { Budget } from '../../types/budget'
import { formatEuro } from '../../lib/format'

interface BudgetsCardProps {
    budgets: Budget[]
}

export default function BudgetsCard({ budgets }: BudgetsCardProps) {
    const available = budgets.reduce((sum, budget) => sum + (budget.total - budget.used), 0)

    return (
        <section className="panel">
            <div className="flex items-center justify-between">
                <div>
                    <p className="section-label">Presupuestos</p>
                    <p className="mt-1 text-xs text-muted">Junio 2025</p>
                </div>
                <button className="text-sm font-medium hover:text-success">Ver todos</button>
            </div>

            <div className="mt-7 space-y-6">
                {budgets.map((budget) => {
                    const percentage = Math.round((budget.used / budget.total) * 100)

                    return (
                        <div key={budget.id}>
                            <div className="mb-2.5 flex items-center">
                <span className="grid size-8 place-items-center rounded-lg bg-canvas text-xs font-semibold">
                  {budget.initial}
                </span>
                                <div className="ml-3">
                                    <p className="text-sm font-medium">{budget.name}</p>
                                    <p className="font-mono text-xs text-muted">
                                        {formatEuro(budget.used, 0)} de {formatEuro(budget.total, 0)}
                                    </p>
                                </div>
                                <span className="ml-auto font-mono text-xs font-medium">{percentage}%</span>
                            </div>

                            <div className="h-1.5 overflow-hidden rounded-full bg-line">
                                <div
                                    className={`h-full rounded-full ${budget.color}`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-7 border-t border-line pt-4">
                <div className="flex justify-between text-xs">
                    <span className="text-muted">Disponible este mes</span>
                    <span className="font-mono font-semibold text-success">{formatEuro(available, 0)}</span>
                </div>
            </div>
        </section>
    )
}