import { Invoice } from '.';

export type Action =
  | { type: 'GET_ALL_INVOICES'; payload: Invoice[] }
  | { type: 'GET_SINGLE_INVOICE_BEGIN' }
  | { type: 'GET_SINGLE_INVOICE_SUCCESS' }
  | { type: 'GET_SINGLE_INVOICE_ERROR' };
