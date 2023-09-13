//Format an amount of money according to a given currency and locale to display
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    if (typeof amount !== 'number' || isNaN(amount)) {
        throw new Error('Invalid input: num must be a valid number.');
    }

    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount);
}

