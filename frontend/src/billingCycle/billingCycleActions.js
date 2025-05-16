import axios from "axios";
import { toastr } from "react-redux-toastr";
import { initialize, reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3000/api";

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request,
    };
}

export function create(values) {
    return (dispatch) => {
        axios.post(`${BASE_URL}/billingCycles`, values).then((resp) => {
            toastr.success("Sucesso", "Operação realizada com sucesso");
            dispatch([
                resetForm("billingCycleForm"),
                getList(),
                selectTab("tabList"),
                showTabs('tabList', 'tabCreate')
            ]);
        });
    };
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}
