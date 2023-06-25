document.addEventListener('DOMContentLoaded', function() {
    const summaryContainer = document.getElementById('summary-container');
    const summaryData = JSON.parse(localStorage.getItem('summaryData'));
  
    if (summaryData) {
      summaryData.forEach(function(expense, index) {
        const itemDiv = createSummaryItem(index + 1, expense.label, expense.price);
        summaryContainer.appendChild(itemDiv);
      });
  
      const totalCost = summaryData.reduce(function(acc, expense) {
        return acc + expense.price;
      }, 0);
  
      const totalCostElement = document.getElementById('summary-total-cost');
      totalCostElement.textContent = totalCost.toFixed(2);
    }
  
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html'; // Go back to the home page
    });
  });
  
  
  function createSummaryItem(index, label, price) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('summary-item');
  
    const indexSpan = document.createElement('span');
    indexSpan.textContent = index + '. ';
    indexSpan.classList.add('summary-index');
  
    const labelSpan = document.createElement('span');
    labelSpan.classList.add('summary-label');
    labelSpan.textContent = label;
  
    const priceSpan = document.createElement('span');
    priceSpan.textContent = price.toFixed(2);
  
    itemDiv.appendChild(indexSpan);
    itemDiv.appendChild(labelSpan);
    itemDiv.appendChild(priceSpan);
  
    return itemDiv;
  }
  