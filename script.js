document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', addExpense);

  const expenseContainer = document.getElementById('expense-container');
  expenseContainer.addEventListener('input', function (event) {
    if (event.target.classList.contains('price-input')) {
      updateTotalCost();
    }
  });

  expenseContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
      deleteExpense(event.target.parentElement);
    }
  });

  updateTotalCost(); // Update total cost initially

  // Trigger input event for existing price-input element
  const initialPriceInput = document.querySelector('.price-input');
  if (initialPriceInput) {
    initialPriceInput.dispatchEvent(new Event('input'));
  }
});

function addExpense() {
  const expenseContainer = document.getElementById('expense-container');

  const expenseLabel = document.createElement('div');
  expenseLabel.classList.add('expense-label');

  const labelInput = document.createElement('input');
  labelInput.type = 'text';
  labelInput.placeholder = 'Label';

  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.placeholder = 'Price';
  priceInput.classList.add('price-input');
  priceInput.addEventListener('input', updateTotalCost);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function () {
    deleteExpense(expenseLabel);
  });

  expenseLabel.appendChild(labelInput);
  expenseLabel.appendChild(priceInput);
  expenseLabel.appendChild(deleteButton);

  expenseContainer.appendChild(expenseLabel);

  updateTotalCost();
}

function deleteExpense(expenseLabel) {
  const expenseContainer = document.getElementById('expense-container');
  expenseContainer.removeChild(expenseLabel);

  updateTotalCost();
}

function updateTotalCost() {
  const priceInputs = document.querySelectorAll('.price-input');
  let totalCost = 0;

  priceInputs.forEach(function (input) {
    const price = parseFloat(input.value);
    if (!isNaN(price)) {
      totalCost += price;
    }
  });

  const totalCostElement = document.getElementById('total-cost');
  totalCostElement.textContent = totalCost.toFixed(2);
}

//change
