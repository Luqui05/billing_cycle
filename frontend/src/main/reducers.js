import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dashboard: () => ({ summary: { credit: 100, debit: 50 } }),
});

export default rootReducer;