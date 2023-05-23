import state from "./state.js";
import variable from "./exvariables.js";

const { success, results } = variable;

export const handleChange = ({ target: { value, name } }) => {
    state.pair = {
        ...state.pair,
        [name]: value
    }
}

export const handleInput = ({ target: { value, name } }) => {
    state[name] = Number(value);
}

const insertResults = ({
    base_code: baseCode,
    target_code: targetCode,
    conversion_rate: rate,
    conversion_result: result,
    time_last_update_utc: time,
}) => {
    results.innerHTML =
        `<div>
            <a>Value: ${baseCode} = ${state.amount}</a><br>
            <a>Rate: ${baseCode}/${targetCode} = ${rate}</a><br>
            <a>Result: ${result} ${targetCode}</a><br>
            <a>Last update: ${time}</a><br>
        </div>`;
}

export const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, amount, pair: { from, to } } = state;

    if (!amount || !from || !to) return;

    try {
        const response = await fetch(`${url}/pair/${from}/${to}/${amount}`);
        const data = await response.json();

        if (data.result === success) insertResults(data)

    } catch (error) {
        console.log(error);
    }
}