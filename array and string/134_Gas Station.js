function canCompleteCircuit(gas, cost) {
  // Step 1: Calculate the total gas and total cost
  let totalGas = 0;
  let totalCost = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }

  // Step 2: If totalGas is less than totalCost, return -1
  if (totalGas < totalCost) {
    return -1;
  }

  // Step 3: Initialize current gas and start station
  let currentGas = 0;
  let startStation = 0;

  // Step 4: Iterate through each station
  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];

    // If currentGas drops below zero, reset startStation and currentGas
    if (currentGas < 0) {
      currentGas = 0;
      startStation = i + 1; // Try starting from the next station
    }
  }

  // Step 5: Return the starting station
  return startStation;
}
