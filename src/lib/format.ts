export function formatEuro(value: number, decimals = 2): string {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: 'always',
    }).format(value)
}

export function formatEuroSigned(value: number): string {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        signDisplay: 'always',
        useGrouping: 'always',
    }).format(value)
}