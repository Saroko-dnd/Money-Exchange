function makeExchange(currency) {
    const exchangeResult = {};

    if (currency > 10000) {
        exchangeResult.error =
            "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency > 0) {
        makeExchange.coins.forEach(coin => {
            if (currency >= coin.denomination) {
                exchangeResult[coin.name] = Math.trunc(
                    currency / coin.denomination
                );
            }
            currency %= coin.denomination;
        });
    }

    return exchangeResult;
}

makeExchange.coins = [
    { name: "H", denomination: 50 },
    { name: "Q", denomination: 25 },
    { name: "D", denomination: 10 },
    { name: "N", denomination: 5 },
    { name: "P", denomination: 1 }
];

// PLEASE DON'T change function name
module.exports = makeExchange;
