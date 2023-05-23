import variable from "./exvariables.js";
import { fetchCodes } from "./main.js";
import { handleInput, handleSubmit } from "./conversion.js";

const { amountInput, form } = variable;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);
form.addEventListener("submit", handleSubmit);