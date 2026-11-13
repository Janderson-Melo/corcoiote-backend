
type InvoiceStatus = 'paid' | 'pending';

interface customer {
  id: number;
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: customer;
}

const invoices: Invoice[] = [
  {
    id: 1,
    amount: 520354,
    status: 'pending',
    issueDate: '2026-09-10',
    dueDate: '2026-10-15',
    customer: {
      id: 3,
      name: 'Contrutora Meridiano',
      email: 'comercial@meridiano.com.br'
    }
  },
  {
    id: 2,
    amount: 89600,
    status: 'paid',
    issueDate: '2026-10-01',
    dueDate: '2026-10-31',
    customer: {
      id: 6,
      name: 'Gráfica Nova Vida',
      email: 'grafica@novavida.com.br'
    }
  },
  {
    id: 3,
    amount: 125037,
    status: 'pending',
    issueDate: '2026-10-12',
    dueDate: '2026-11-17',
    customer: {
      id: 7,
      name: 'Tendi Tudo',
      email: 'contato@tenditudo.com.br'
    }
  }
];

export function findManyInvoices(): Invoice[] {
    return invoices;
}