'use strict';
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let workHours=['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total']

function Sales(location,minCustomer,maxCustomer,avSales){
  this.location=location;
  this.minCustomer=minCustomer;
  this.maxCustomer=maxCustomer;
  this.avSales=avSales;
  this.tSales=0;
  this.hourSales=[];
}
  Sale.prototype.cookiePurnchCust= function(){
    for (let i = 0; i < (this.workHours.length-1); i++) {
      this.hourSales[i]=Math.floor(getRandomNumber(this.minCustomer,this.maxCustomer)*this.avSales);
      this.tSales+=this.hourSales[i];
    }
    this.hourSales[14]=this.tSales;
  },
  Sale.prototype.render= function(){
    const container= document.getElementById('allSales');
    const secElement=document.createElement('section');
    container.appendChild(secElement);
    const hElement=document.createElement('h3');
    secElement.appendChild(hElement);
    hElement.textContent=this.location;
    const ulElement=document.createElement('ul');
    secElement.appendChild(ulElement);
    for (let i = 0; i < workHours.length; i++) {
      let liEl=document.createElement('li');
      ulElement.appendChild(liEl);
      liEl.textContent=`${workHours[i]}:${this.hourSales[i]}`;
    }
  }

const seattle = new Sales('Seattle', 23, 65, 6.3);
seattle.render();
const tokyo = new Sales('Tokyo', 3, 24, 1.2);
tokyo.render();
const dubai = new Sales('Dubai', 11, 38, 3.7);
dubai.render();
const paris = new Sales('Paris', 20, 38, 2.3);
paris.render();
const lima = new Sales('Lima', 2, 16, 4.6);
lima.render();




// const tokyo={
//   location: 'Tokyo',
//   minCustomer:3,
//   maxCustomer:24,
//   avSales:1.2,
//   hourSales:[],
//   tSales:0,
//   workHours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'],
//   cookiePurnchCust: function(){
//     for (let i = 0; i < (this.workHours.length-1); i++) {
//       this.hourSales[i]=Math.floor(getRandomNumber(this.minCustomer,this.maxCustomer)*this.avSales);
//       this.tSales+=this.hourSales[i];
//     }
//     this.hourSales[14]=this.tSales;
//   },
//   render: function(){
//     const container= document.getElementById('allSales');
//     const secElement=document.createElement('section');
//     container.appendChild(secElement);
//     const hElement=document.createElement('h3');
//     secElement.appendChild(hElement);
//     hElement.textContent=this.location;
//     const ulElement=document.createElement('ul');
//     secElement.appendChild(ulElement);
//     for (let i = 0; i < this.workHours.length; i++) {
//       let liEl=document.createElement('li');
//       ulElement.appendChild(liEl);
//       liEl.textContent=`${this.workHours[i]}:${this.hourSales[i]}`;
//     }
//   },

// };
// tokyo.cookiePurnchCust();
// tokyo.render();

// const dubai={
//   location: 'Dubai',
//   minCustomer:11,
//   maxCustomer:38,
//   avSales:3.7,
//   hourSales:[],
//   tSales:0,
//   workHours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'],
//   cookiePurnchCust: function(){
//     for (let i = 0; i < (this.workHours.length-1); i++) {
//       this.hourSales[i]=Math.floor(getRandomNumber(this.minCustomer,this.maxCustomer)*this.avSales);
//       this.tSales+=this.hourSales[i];
//     }
//     this.hourSales[14]=this.tSales;
//   },
//   render: function(){
//     const container= document.getElementById('allSales');
//     const secElement=document.createElement('section');
//     container.appendChild(secElement);
//     const hElement=document.createElement('h3');
//     secElement.appendChild(hElement);
//     hElement.textContent=this.location;
//     const ulElement=document.createElement('ul');
//     secElement.appendChild(ulElement);
//     for (let i = 0; i < this.workHours.length; i++) {
//       let liEl=document.createElement('li');
//       ulElement.appendChild(liEl);
//       liEl.textContent=`${this.workHours[i]}:${this.hourSales[i]}`;
//     }
//   },

// };
// dubai.cookiePurnchCust();
// dubai.render();

// const paris={
//   location: 'Paris',
//   minCustomer:20,
//   maxCustomer:38,
//   avSales:2.3,
//   hourSales:[],
//   tSales:0,
//   workHours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'],
//   cookiePurnchCust: function(){
//     for (let i = 0; i < (this.workHours.length-1); i++) {
//       this.hourSales[i]=Math.floor(getRandomNumber(this.minCustomer,this.maxCustomer)*this.avSales);
//       this.tSales+=this.hourSales[i];
//     }
//     this.hourSales[14]=this.tSales;
//   },
//   render: function(){
//     const container= document.getElementById('allSales');
//     const secElement=document.createElement('section');
//     container.appendChild(secElement);
//     const hElement=document.createElement('h3');
//     secElement.appendChild(hElement);
//     hElement.textContent=this.location;
//     const ulElement=document.createElement('ul');
//     secElement.appendChild(ulElement);
//     for (let i = 0; i < this.workHours.length; i++) {
//       let liEl=document.createElement('li');
//       ulElement.appendChild(liEl);
//       liEl.textContent=`${this.workHours[i]}:${this.hourSales[i]}`;
//     }
//   },

// };
// paris.cookiePurnchCust();
// paris.render();

// const lima={
//   location: 'Lima',
//   minCustomer:2,
//   maxCustomer:16,
//   avSales:4.6,
//   hourSales:[],
//   tSales:0,
//   workHours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'],
//   cookiePurnchCust: function(){
//     for (let i = 0; i < (this.workHours.length-1); i++) {
//       this.hourSales[i]=Math.floor(getRandomNumber(this.minCustomer,this.maxCustomer)*this.avSales);
//       this.tSales+=this.hourSales[i];
//     }
//     this.hourSales[14]=this.tSales;
//   },
//   render: function(){
//     const container= document.getElementById('allSales');
//     const secElement=document.createElement('section');
//     container.appendChild(secElement);
//     const hElement=document.createElement('h3');
//     secElement.appendChild(hElement);
//     hElement.textContent=this.location;
//     const ulElement=document.createElement('ul');
//     secElement.appendChild(ulElement);
//     for (let i = 0; i < this.workHours.length; i++) {
//       let liEl=document.createElement('li');
//       ulElement.appendChild(liEl);
//       liEl.textContent=`${this.workHours[i]}:${this.hourSales[i]}`;
//     }
//   },

// };
// lima.cookiePurnchCust();
// lima.render();
