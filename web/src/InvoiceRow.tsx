import { Invoice } from "./InvoiceType.ts"

import { FormatCurrency, formatDate, formatStatus } from "./utils.ts";

interface InvoiceRowProps{
    data: Invoice;
}

export default function InvoiceRow({ data }: InvoiceRowProps) {
    const {customer, amount, issueDate, dueDate, status} = data
    return <tr>
        <td>{customer.name}</td>
        <td>{FormatCurrency(amount)}</td>
        <td>{formatDate(issueDate)}</td>
        <td>{formatDate(dueDate)}</td>
        <td>{formatStatus(status)}</td>
    </tr>
}