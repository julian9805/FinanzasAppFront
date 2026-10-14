import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import BalanceHero from './components/dashboard/BalanceHero'
import BudgetsCard from './components/dashboard/BudgetsCard'
import RecentTransactions from './components/dashboard/RecentTransactions'
import { summary } from './data/summary'
import { budgets } from './data/budgets'
import { transactions } from './data/transactions'

function App() {
    const [active, setActive] = useState('Resumen')

    return (
        <div className="min-h-screen lg:flex">
            <Sidebar active={active} onNavigate={setActive} />

            <main className="min-w-0 flex-1 px-4 pt-5 pb-10 sm:px-7 sm:pt-7 lg:px-10 xl:px-14">
                <div className="mx-auto max-w-7xl">
                    <Header userName="Javier" onNew={() => console.log('Nueva transacción')} />

                    <div className="mt-7">
                        <BalanceHero summary={summary} />
                    </div>

                    <div className="mt-5 grid gap-5 lg:grid-cols-3">
                        <div className="panel text-sm text-muted lg:col-span-2">
                            Aquí irá el gráfico de flujo de caja
                        </div>
                        <BudgetsCard budgets={budgets} />
                    </div>

                    <div className="mt-5">
                        <RecentTransactions transactions={transactions} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App