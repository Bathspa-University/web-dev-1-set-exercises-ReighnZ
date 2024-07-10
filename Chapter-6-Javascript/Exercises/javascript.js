document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements from the DOM
    const costPerLiterInput = document.getElementById('costPerLiter');
    const litersPurchasedInput = document.getElementById('litersPurchased');
    const calculateButton = document.getElementById('calculateButton');
    const totalCostOutput = document.getElementById('totalCost');
  
    // Adding click event listener to the calculate button
    calculateButton.addEventListener('click', function() {
      // Getting values from input fields and converting to numbers
      const costPerLiter = parseFloat(costPerLiterInput.value);
      const litersPurchased = parseFloat(litersPurchasedInput.value);
  
      // Calculating total cost
      const totalCost = costPerLiter * litersPurchased;
  
      // Displaying total cost to the user
      totalCostOutput.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
  });
  