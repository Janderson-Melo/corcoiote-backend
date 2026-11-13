export async function get() {
  const response = await fetch('https://localhost:3000/invoices')

 return await response.json();
}