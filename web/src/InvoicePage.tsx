import InvoiceTable from './InvoiceTable';

import { useState, useEffect } from 'react';

import { getAllInvoices } from './requestInvoice.ts';

import type { Invoice } from './InvoiceType.ts';


export default function InvoicePage() {
  const [Invoice, setInvoices] = useState<Invoice[]>([]);

useEffect(() => {
  async function get() {
    const datas = await getAllInvoices()

    setInvoices(datas);
  }

  get();
}, []);

  return (
    <>
      <h1>Faturas</h1>

      <div className="panel">
        <InvoiceTable datas={Invoice} />
      </div>
    </>
  );
}
