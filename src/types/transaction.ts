export type Tone = 'orange' | 'blue' | 'purple' | 'green'

export interface Transaction {
    id: number
    name: string
    category: string
    date: string
    amount: number
    initial: string
    tone: Tone
}