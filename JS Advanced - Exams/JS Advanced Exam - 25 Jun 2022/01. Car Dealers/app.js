window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const publishBtn = document.getElementById('publish');
  const tableBody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');
  let totalProfit = 0;

  publishBtn.addEventListener('click', publish);

  function publish(e) {
    e.preventDefault();
    const makeValue = make.value;
    const modelValue = model.value;
    const yearValue = year.value;
    const fuelValue = fuel.value;
    const originalCostValue = Number(originalCost.value);
    const sellingPriceValue = Number(sellingPrice.value);

    if (!makeValue || !modelValue || !yearValue || !fuelValue || originalCostValue > sellingPriceValue) {
      return;
    }
    const tr = genElement('tr', tableBody, null, 'row');
    genElement('td', tr, `${makeValue}`);
    genElement('td', tr, `${modelValue}`);
    genElement('td', tr, `${yearValue}`);
    genElement('td', tr, `${fuelValue}`);
    genElement('td', tr, `${originalCostValue}`);
    genElement('td', tr, `${sellingPriceValue}`);
    const td = genElement('td', tr);
    editBtn = genElement('button', td, 'Edit', 'action-btn edit');
    sellBtn = genElement('button', td, 'Sell', 'action-btn sell');

    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);

    function edit() {
      tr.remove();
      make.value = makeValue;
      model.value = modelValue;
      year.value = yearValue;
      fuel.value = fuelValue;
      originalCost.value = originalCostValue;
      sellingPrice.value = sellingPriceValue;
    }
    function sell() {
      tr.remove();
      const li = genElement('li', carsList, null, 'each-list');
      genElement('span', li, `${makeValue} ${modelValue}`);
      genElement('span', li, `${yearValue}`);
      genElement('span', li, `${sellingPriceValue - originalCostValue}`);

      totalProfit += sellingPriceValue - originalCostValue;
      profit.textContent = totalProfit.toFixed(2);
    }

    [make.value, model.value, year.value, fuel.value, originalCost.value, sellingPrice.value] = ['', '', '', '', '', ''];
  }
  function genElement(tag, parent, textContent, className) {
    const element = document.createElement(tag);
    if (textContent) {
      element.textContent = textContent;
    }
    if (className) {
      element.className = className;
    }
    parent.appendChild(element);
    return element;
  }
}