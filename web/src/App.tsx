import { useState, useEffect } from 'react';

import { get } from './request.ts';

import InvoicePage from './InvoicePage.tsx';

export default function App() {
const [invoices, setInvoices] = useState([])

useEffect(() => {
  async function getInvoices() {
      const users = await get();
  
      setInvoices(users);
  }
  
  getInvoices();
}, [])


  return (
    <main>
    <InvoicePage data={invoices} />
    </main>
  );
}
