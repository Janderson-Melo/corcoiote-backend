import { useState, useEffect } from 'react';

import InvoicePage from './InvoicePage.tsx';

export default function App() {

  const users: any[] = [];

 async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const datas = await response.json();

  datas.map((user: any) => {
    users.push(user)
  });

  console.log(users)
 }

 getUsers();

  return (
    <main>
     
    </main>
  );
}
