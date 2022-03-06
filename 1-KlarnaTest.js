const getBalanceByCategoryInPeriod = (
    transactions,
    categories,
    start,
    end
) => {
    // if categories is empty, simply return
    if (categories.length === 0) return {};
    // initialize the BalanceByCategory object with 0
    const balanceByCategory = {};
    categories.forEach(category => {
        balanceByCategory[category] = 0;
    });

    // if transactions is empty return the object
    if (transactions.length === 0) return balanceByCategory;

    // pre-compute the start time and end time as they are used in every iteration
    const startTime = start.valueOf();
    const endTime = end.valueOf();

    /** for block is used since I can continue when neede
     where as in foreach I don't have that option**/
    for (let i = 0; i < transactions.length; i++) {
        // get the element in array for future usage
        const transaction = transactions[i];

        // if category is not relevant, we ignore this transaction
        if (!categories.includes(transaction.category)) continue;

        // if amount is not an integer, we ignore this transaction
        if (!Number.isInteger(transaction.amount)) continue;

        // convert the date time string into milliseconds for comparison
        const transactionTime = Date.parse(transaction.time);
        // guard clauses are used to filter proper transaction

        // if time is not valid, we ignore this transaction
        if (isNaN(transactionTime)) continue;


        // if time is before start time, we ignore this transaction
        if (startTime > transactionTime) continue;

        // if time is after or equal to end time, we ignore this transaction
        if (transactionTime >= endTime) continue;

        // if all guards are escaped, it is added to the balance
        balanceByCategory[transaction.category] += transaction.amount;
    }
    return balanceByCategory;
};

console.log(getBalanceByCategoryInPeriod(
    [
        {
            id: '11ff73b5-e771-441c-886a-498d93b5093d',
            sourceAccount: 'my_account',
            targetAccount: 'restaurant',
            amount: 9600,
            currency: 'EUR',
            category: 'sports',
            time: '2021-04-08T05:15:56.905Z',
        },
        {
            id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
            sourceAccount: 'my_account',
            targetAccount: 'cinema',
            amount: -5700,
            currency: 'EUR',
            category: 'entertainment',
            time: '2021-04-07T21:16:57.819Z',
        },
        {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            sourceAccount: 'my_account',
            targetAccount: 'book_store',
            amount: -7400,
            currency: 'EUR',
            category: 'entertainment',
            time: '2021-04-07T22:46:44.071Z',
        },
        {
            id: '837127ab-f523-4b11-bed3-ae488be4545d',
            sourceAccount: 'my_account',
            targetAccount: 'fitness_club',
            amount: 1000,
            currency: 'EUR',
            category: 'sports',
            time: '2021-04-05T01:55:16.646Z',
        },
    ],
    ['sports', 'entertainment', 'restaurant', 'fitness_club'],
    new Date('2021-04-01'),
    new Date('2021-04-30')
));
