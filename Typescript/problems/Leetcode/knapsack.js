function knapsack(weight, profit, capacity) {
    const ratio = []
    let totalProfit = 0;
    for (let i = 0; i < wt.length; i++) {
        ratio.push(profit[i] / weight[i])
    }
    ratio.sort((x, y) => x > y ? -1 : 0)
    for (let j = 0; j < ratio.length; j++) {
        if (capacity > 0 && weight[j] < capacity) {
            capacity -= weight[j]
            totalProfit += profit[j]
            continue;
        }
        if (capacity > 0) {
            totalProfit = totalProfit + profit[j] * (capacity / weight[j])
        }
    }
    return totalProfit
}

let val = [10, 5, 15, 7, 6, 18, 3];
let wt = [2, 3, 5, 7, 1, 4, 1];
let W = 15;
console.log(knapsack(wt, val, W))
