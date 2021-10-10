import { FC, createContext, useContext, useReducer } from 'react';
import { Context } from '../types';
import reducer from '../reducers/application_reducer';

const Store = {
  all_invoices: [],
  single_invoice_loading: false,
  single_invoice_error: false,
  single_invoice_success: false,
  single_invoice: {},
};

const InvoicesContext = createContext<Partial<Context>>({});

const InvoicesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Store);

  return (
    <InvoicesContext.Provider value={{ state, dispatch }}>
      {children}
    </InvoicesContext.Provider>
  );
};

const useInvoicesContext = () => useContext(InvoicesContext);

export { InvoicesContext, InvoicesProvider, useInvoicesContext };
