export type State = {
  all_invoices: [] | object[];
  single_invoice_loading: boolean;
  single_invoice_success: boolean;
  single_invoice_error: boolean;
  single_invoice: object;
};
