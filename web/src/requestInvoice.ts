export async function getAllInvoices() {
  const response = await fetch('https://localhost:3000/invoices')

 return await response.json();
}