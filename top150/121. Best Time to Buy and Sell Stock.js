function bestTimeToSell(arr) {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[buy] < arr[sell]) {
      let profit = arr[sell] - arr[buy];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy = sell
    }

    sell++;
  }

  return maxProfit
}

bestTimeToSell([7, 1, 5, 3, 6, 4]);
