import { ChevronRight } from 'lucide-react'
import type { Transaction } from '../../types/transaction'
import { formatEuroSigned } from '../../lib/format'

interface RecentTransactionsProps {
    transactions: Transaction[]
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
    return (
        <section className="panel">
            <div className="flex items-center justify-between">
                <div>
                    <p className="section-label">Últimos movimientos</p>
                    <p className="mt-1 text-xs text-muted">Tus transacciones más recientes</p>
                </div>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-success">
                    Ver todos <ChevronRight size={15} />
                </button>
            </div>

            <div className="mt-5 divide-y divide-line">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="flex items-center gap-3 py-3.5 first:pt-0 last:pb-0"
                    >
                        <div className={`transaction-icon tone-${transaction.tone}`}>
                            {transaction.initial}
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{transaction.name}</p>
                            <p className="mt-0.5 truncate text-xs text-muted">
                                {transaction.category} · {transaction.date}
                            </p>
                        </div>

                        <p
                            className={`ml-auto whitespace-nowrap font-mono text-sm font-semibold ${
                                transaction.amount > 0 ? 'text-success' : 'text-ink'
                            }`}
                        >
                            {formatEuroSigned(transaction.amount)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}