// BEGIN
const usdToEur = 0.7;
const eurToUsd = 1.2;

/**
 * @param {number} value
 * @param {string} sourceCurrency
 * @param {string} expectedCurrency
 */
const exchanger = (value, sourceCurrency, expectedCurrency) => {
    if (sourceCurrency === expectedCurrency)
        return value;

    if (expectedCurrency === 'eur')
        return value * usdToEur;

    if (expectedCurrency === 'usd')
        return value * eurToUsd;

    return value;
}

/**
 * @param {number} value
 * @param {string} currency
 */
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function getValue() {
    return this.value;
}

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
}
/**
 * @param {Money} money
 */
Money.prototype.add = function add(money) {
    return new Money(this.getValue() + exchanger(money.getValue(), money.getCurrency(), this.getCurrency()), this.getCurrency());
}

Money.prototype.exchangeTo = function exchangeTo(currency) {
    return new Money(exchanger(this.value, this.getCurrency(), currency), currency)
};

Money.prototype.format = function format() {
    return this.getValue().toLocaleString(undefined, {
        style: 'currency',
        currency: this.getCurrency()
    })
};

export default Money;
// END
