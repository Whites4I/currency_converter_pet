import state from "./state.js";

export const handleChange = ({ target: { value, name } }) => {
    state.pair = {
        ...state.pair,
        [name]: value
    }
    console.log(state.pair)
}

export const handleInput = ({ target: { value, name } }) => {
    state[name] = Number(value);
}

export const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount)
    console.log(url)
    console.log()
    console.log()
    const { url, amount, pair: { from, to } } = state;
    if (!amount || !from || !to) return;

    try {
        const response = await fetch(`${url}/pair/${from}/${to}`);
        const data = await response.json();
    } catch (error) {
        console.log(error);
    }
}