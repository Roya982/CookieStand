'use strict';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const totalTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function ShopLocation(location, minCustumer, maxCustumer, avSales) {
  this.location = location;
  this.minCustumer = minCustumer;
  this.maxCustumer = maxCustumer;
  this.avSales = avSales;
  this.randomCust = 0;
  this.hourSales = [];
}
ShopLocation.prototype.getRandomCust = function(){
  this.randomCust = getRandomNumber(this.minCustumer, this.maxCustumer);
};
ShopLocation.prototype.render = function (){
  let totalCookies = 0;

  const container = document.getElementById('allSales');
  const tableRow = document.createElement('tr');
  container.appendChild(tableRow);

  const tableHeadingEl = document.createElement('th');
  tableRow.appendChild(tableHeadingEl);
  tableHeadingEl.setAttribute('scope', 'row');
  tableHeadingEl.textContent = this.location;

  for (let i = 0; i < workHours.length; i++) {
    this.getRandomCust();
    let perHourCookies = this.randomCust * this.avSales;
    totalTotals[i] += Math.ceil(perHourCookies);
    this.hourSales.push(`${workHours[i]}: ${Math.ceil(perHourCookies)}`);
    totalCookies = totalCookies + perHourCookies;

    const dataEl = document.createElement('td');
    tableRow.appendChild(dataEl);
    dataEl.textContent = Math.ceil(perHourCookies);
  }
  totalTotals[14] += Math.ceil(totalCookies);
  const dataEl = document.createElement('td');
  tableRow.appendChild(dataEl);
  dataEl.textContent = Math.ceil(totalCookies);
};



const seattle = new ShopLocation('Seattle', 23, 65, 6.3);
const tokyo = new ShopLocation('Tokyo', 3, 24, 1.2);
const dubai = new ShopLocation('Dubai', 11, 38, 3.7);
const paris = new ShopLocation('Paris', 20, 38, 2.3);
const lima = new ShopLocation('Lima', 2, 16, 4.6);


  function renderHeader(){
  const container = document.getElementById('allSales');
  const tableRow = document.createElement('tr');
  container.appendChild(tableRow);

  const tableHeadingEl = document.createElement('th');
  tableRow.appendChild(tableHeadingEl);
  tableHeadingEl.textContent = 'Location';

  for (let i = 0; i < workHours.length; i++) {
    const tableHeadingEl = document.createElement('th');
    tableRow.appendChild(tableHeadingEl);
    tableHeadingEl.textContent = workHours[i];
  }
  const lastTableHeadingEl = document.createElement('th');
  tableRow.appendChild(lastTableHeadingEl);
  lastTableHeadingEl.textContent = 'Daily Location Total';
}


function renderFooterTotals(){
  const container = document.getElementById('allSales');
  const tableRow = document.createElement('tr');
  container.appendChild(tableRow);

  const tableHeadingEl = document.createElement('th');
  tableRow.appendChild(tableHeadingEl);
  tableHeadingEl.setAttribute('scope', 'row');
  tableHeadingEl.textContent = 'Totals';

  for (let i = 0; i < totalTotals.length; i++) {
    const tableHeadingEl = document.createElement('th');
    tableRow.appendChild(tableHeadingEl);
    tableHeadingEl.textContent = Math.ceil(totalTotals[i]);
  }
}


renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterTotals();
