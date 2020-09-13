const trimStr = (str, end) => str.slice(0, end);

const overrideOperator = (input, operator) =>
input.replace(/[\*\/\+\-]*$/, operator);

const isOperator = (text) => {
    return isNaN(text) && text !== "."
};

const toggleMinus = (input) => {
    const negatedInput = -unFormatNumberWithCommas(input);
    return formatNumberWithCommas(negatedInput.toString());
}

const popInput = (input) => {
   return input.length > 1? input.slice(0, -1) : "0"
};

const peekInput = (input) => {
    return input.substr(input.length - 1);
}

const isValidKeyInput = (input) => {
    if (!isNaN(Number(input)) || input === "/" || input === "*" || input === "+" || input === "-")
        return true;
    return false
}

const formatNumberWithCommas = (numberStr) => numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const formatNumberWithDecimals = (numberStr) => {
    const numStrWithoutCommas = unFormatNumberWithCommas(numberStr);
    if (Number.isNaN(Number(numStrWithoutCommas)))
        return numberStr;
    if (Number.isInteger(Number(numStrWithoutCommas)))
        return formatNumberWithCommas(numStrWithoutCommas);
    return Number(numberStr).toFixed(4).toString();
}

const unFormatNumberWithCommas = (numberStr) => numberStr.replace(/,/g, '');

export { trimStr, overrideOperator, isOperator, toggleMinus, popInput, peekInput, isValidKeyInput, formatNumberWithCommas, formatNumberWithDecimals, unFormatNumberWithCommas };

