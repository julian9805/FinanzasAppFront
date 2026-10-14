import type { Transaction } from '../types/transaction'

export const transactions: Transaction[] = [
    { id: 1, name: 'Mercadona', category: 'Alimentación', date: 'Hoy, 10:42', amount: -64.2, initial: 'M', tone: 'orange' },
    { id: 2, name: 'Nómina Acme', category: 'Ingresos', date: 'Ayer, 09:00', amount: 2450, initial: 'A', tone: 'green' },
    { id: 3, name: 'Metro Madrid', category: 'Transporte', date: '12 Jun, 18:25', amount: -12.5, initial: 'T', tone: 'blue' },
    { id: 4, name: 'Netflix', category: 'Suscripciones', date: '11 Jun, 08:12', amount: -12.99, initial: 'N', tone: 'purple' },
]