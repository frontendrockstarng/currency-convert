

const convertBtn = document.querySelector("#convert-btn");

const USD_RATES = {
    INR: 75,
    NGN: 480,
    GBP: 1.5,
    CAD: 1.74,
    EUR: 1.3,
    USD: 1,
};

const formatAmount = (amount) => parseFloat(amount).toLocaleString('en');

convertBtn.addEventListener('click', () => {
    const toCurrency = document.getElementById("toCurrency").value;
const fromCurrency = document.getElementById("fromCurrency").value;
const amount = document.getElementById("amount").value;

    const error = !amount ? 'Enter the amount you want to convert'
                : (!toCurrency || !fromCurrency) ? 'Please select both of the currencies for the conversion'
                : (toCurrency === fromCurrency) ? 'Please select two different currencies'
                : false;
    
    if(error) {
        document.querySelector('.error').innerHTML = `<span class="text-danger">${error}</span>`;
        return;
    }

    document.querySelector('.error').innerHTML = ``;
    const result = ((USD_RATES[toCurrency]/USD_RATES[fromCurrency]) * amount).toFixed(2);

    document.querySelector('.result').innerHTML = `${fromCurrency} ${formatAmount(amount)} = ${toCurrency} ${formatAmount(result)}`
})