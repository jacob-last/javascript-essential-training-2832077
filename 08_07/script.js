/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = (sum, percentage, currencySymbol) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${currencySymbol}${sum}
  Tip percentage: ${percentage}%
  Tip:            ${currencySymbol}${tip.toFixed(2)}
  Total:          ${currencySymbol}${total.toFixed(2)}
`);
};

tipCalculator(30, 25, "£");
