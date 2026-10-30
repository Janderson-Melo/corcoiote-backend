import { InvoiceStatus } from "./InvoiceType.ts";

export function FormatCurrency(value: number): string {
const formarter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
return formarter.format(value / 100);
}

export function formatDate(date: string): string {
    const formartter = Intl.DateTimeFormat('pt-BR', { 
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
})
    return formartter.format(new Date(`${date}T00:00:00`));
}

export function formatStatus(status: InvoiceStatus){
    return status === 'paid' ? 'Paga' : 'Pendente';
}