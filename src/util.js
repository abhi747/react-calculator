const trimStr = (str, end) => str.slice(0, end);

const overrideOperator = (input, operator) =>
input.replace(/[\*\/\+\-]*$/, operator);

const isOperator = (text) => {
    return isNaN(text) && text !== "."
};

const toggleMinus = (input) => {
    const negatedInput = -input.replace(",","");
    return formatNumberWithCommas(negatedInput.toString());
}

const popInput = (input) => {
   return input.length > 1? input.slice(0, -1) : "0"
};

const peekInput = (input) => {
    return input.substr(input.length - 1);
}

const formatNumberWithCommas = (numberStr) =>  numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const formatNumberWithDecimals = (numberStr) => {
    if (Number.isNaN(Number(numberStr)))
        return numberStr;
    if (Number.isInteger(Number(numberStr)))
        return formatNumberWithCommas(numberStr);
    return Number(numberStr).toFixed(4).toString();
}

export { trimStr, overrideOperator, isOperator, toggleMinus, popInput, peekInput,formatNumberWithCommas, formatNumberWithDecimals };

