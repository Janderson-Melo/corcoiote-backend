import { Router } from "express";
import { findManyInvoices } from "../services/invoice.service.ts";

const router = Router();

router.get('/', (request, response) => {
    const invoices = findManyInvoices();

    response.setHeader('Acess-control-Allow-Origin', '*')
    response.status(200).json(invoices);
})
export default router;