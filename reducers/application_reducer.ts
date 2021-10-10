import { Action, State } from '../types';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_ALL_INVOICES':
      return {
        ...state,
        all_invoices: [state.all_invoices, ...action.payload],
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
