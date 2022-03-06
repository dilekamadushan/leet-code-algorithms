const categorizeSimilarTransactions = (transactions) => {
    // initialize a map to store categories and amounts by targetAccount for O(1) access
    const categoryMap = new Map();

    // populate map with target accounts for each categorized transaction
    for (let i = 0; i < transactions.length; i++) {
        const transaction = transactions[i];
        const {category} = transaction;
        // if no category continue
        if (!category) continue;
        // if invalid number, ignore
        if(!Number.isInteger(transaction.amount)) continue;

        // check whether there's an entry in the map for the target Account
        const value = categoryMap.get(transaction.targetAccount)
        const amount = transaction.amount;

        // check whether a value already exists
        if (value) {
            value.push({category, amount});
        } else {
            // add a new entry to the map
            categoryMap.set(transaction.targetAccount, [{category, amount}])
        }
    }

    // define a customized sort function to sort the objects by amount because native sort functions sort alphabetically
    const sort = (array) => array.sort((a, b) => a.amount - b.amount);
    // sort the values in the map to retrieve fast
    categoryMap.forEach(value => sort(value));
    // customized binary search algorithm to find the nearest
    const binarySearchClosest = (array, value) => {
        // return the first element as it's the lowest
        if (value < array[0].amount) {
            return array[0];
        }
        if (value > array[array.length - 1].amount) {
            return array[array.length - 1];
        }
        // set a lowerBoundary and higher boundary
        let lowerBoundary = 0;
        let higherBoundary = array.length - 1;
        // use binary search and adjust the lowerBoundary and higherBoundary
        while (lowerBoundary <= higherBoundary) {
            const mid = (higherBoundary + lowerBoundary) / 2;

            if (value < array[mid].amount) {
                higherBoundary = mid - 1;
            } else if (value > array[mid].amount) {
                lowerBoundary = mid + 1;
            } else {
                return array[mid];
            }
        }
        // check to which boundary the value is the closest, and then return the index
        return (array[lowerBoundary].amount - value) < (value - array[higherBoundary].amount) ? array[lowerBoundary] : array[higherBoundary];
    }


    // iterate over every transaction to assign a category
    for (let j = 0; j < transactions.length; j++) {
        const transaction = transactions[j];
        // if there's a category already, continue
        if (transaction.category) continue;
        // if not a valid number, ignore
        if (!Number.isInteger(transaction.amount)) continue;
        // check whether there's an entry in the map
        const value = categoryMap.get(transaction.targetAccount);
        // if there's no entry, there's no category for this transaction
        if (!value) continue;
        // get the closest element
        const closestElement = binarySearchClosest(value, transaction.amount);
        // check whether the difference is <=1000, if so assign the category
        if (Math.abs(transaction.amount - closestElement.amount) <= 1000) {
            transaction.category = closestElement.category;
        }
    }
    return transactions;
}


const transactions = [
    {
        id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: 350,
        time: "2021-04-10T10:30:00Z",
    },
    {
        id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -150,
        category: "eating_out",
        time: "2021-03-12T12:34:00Z",
    },
    {
        id: "6359091e-1187-471f-a2aa-81bd2647210f",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: 100,
        category: "entertainment",
        time: "2021-01-12T08:23:00Z",
    },
    {
        id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -1690,
        time: "2021-04-12T08:20:00Z",
    },
];
const t = [
    {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -620,
        time: '2021-04-10T10:30:00Z',
    },
    {
        id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -350,
        category: 'eating_out',
        time: '2021-03-12T12:34:00Z',
    },
    {
        id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -1690,
        time: '2021-04-12T08:20:00Z',
    },
];

console.log(categorizeSimilarTransactions([
    {
        id: 'a001bb66-6f4c-48bf-8ae0-f73453aa8dd5',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: "-620",
        time: '2021-04-10T10:30:00Z',
    },
    {
        id: 'bfd6a11a-2099-4b69-a7bb-572d8436cf73',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -350,
        category: 'eating_out',
        time: '2021-03-12T12:34:00Z',
    },
    {
        id: 'a8170ced-1c5f-432c-bb7d-867589a9d4b8',
        sourceAccount: 'my_account',
        targetAccount: 'coffee_shop',
        amount: -800,
        time: '2021-04-12T08:20:00Z',
    },
]))
