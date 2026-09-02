/** @param {NS} ns */
export async function main(ns) {

    const stocks = ns.stock.getSymbols();

    const buyForecast = 0.60;
    const sellForecast = 0.50;

    const moneyPercent = 0.20;

    while (true) {

        for (const stock of stocks) {

            const forecast = ns.stock.getForecast(stock);
            const volatility = ns.stock.getVolatility(stock);
            const price = ns.stock.getPrice(stock);

            const position = ns.stock.getPosition(stock);
            const sharesOwned = position[0];

            // SELL
            if (sharesOwned > 0 && forecast < sellForecast) {

                ns.stock.sellStock(stock, sharesOwned);

                continue;
            }

            // BUY
            if (sharesOwned === 0 && forecast >= buyForecast) {

                const money = ns.getServerMoneyAvailable("home");
                const investment = money * moneyPercent;

                const shares = Math.floor(investment / price);

                if (shares > 0) {

                    ns.stock.buyStock(stock, shares);

                }
            }
        }

        await ns.sleep(30000);
    }
}
