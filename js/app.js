/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
'use srtict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', ' 12pm ', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const parent = document.getElementById('parent');
const theTable = document.createElement('table');

let totalPerHour = [];
let finalTotal = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ShopeSales(name, min, max, avgCookie) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
    this.cookiePerHour = [];
    this.total = 0;
}
ShopeSales.prototype.getCookie = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiePerHour.push(Math.floor(randomNumber(this.min, this.max) * this.avgCookie));
        this.total += this.cookiePerHour[i];
        totalPerHour[i] += this.cookiePerHour[i];

    }
};


//Header For The Table Function

function headOfTeable() {
    parent.appendChild(theTable);
    let headRow = document.createElement('tr');
    theTable.appendChild(headRow);

    let thE1 = document.createElement('th');
    headRow.appendChild(thE1);
    thE1.textContent = ' ';

    for (let i = 0; i < hours.length; i++) {
        let theE12 = document.createElement('th');
        headRow.appendChild(theE12);
        theE12.textContent = hours[i];
        totalPerHour.push(0);
    }

    let thE13 = document.createElement('th');
    headRow.appendChild(thE13);
    thE13.textContent = 'Location Total';
}

headOfTeable();


// The Render Function

ShopeSales.prototype.render = function () {
    parent.appendChild(theTable);
    let trE1 = document.createElement('tr');
    theTable.appendChild(trE1);
    let tdE1 = document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let tdE1 = document.createElement('td');
        trE1.appendChild(tdE1);
        tdE1.textContent = this.cookiePerHour[i];
    }
    let tdE12 = document.createElement('td');
    trE1.appendChild(tdE12);
    tdE12.textContent = Math.floor(this.total);
    finalTotal += this.total;
}


const Seattle = new ShopeSales('Seattle', 23, 65, 6.3);
console.log(Seattle);
Seattle.getCookie();
Seattle.render();

const Tokyo = new ShopeSales('Tokyo', 3, 24, 1.2);
console.log(Tokyo);
Tokyo.getCookie();
Tokyo.render();


const Dubai = new ShopeSales('Dubai', 11, 38, 3.7);
console.log(Dubai);
Dubai.getCookie();
Dubai.render();

const Paris = new ShopeSales('Paris', 20, 38, 2.3);
console.log(Paris);
Paris.getCookie();
Paris.render();

const Lima = new ShopeSales('Lima', 2, 16, 4.6);
console.log(Lima);
Lima.getCookie();
Lima.render();




// Footer For The Table Function

function bottomOfTable() {
    parent.appendChild(theTable);
    let trE1 = document.createElement('tr');
    theTable.appendChild(trE1);
    let tdE1 = document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent = 'Total Per Hour For All Locations';
    for (let i = 0; i < hours.length; i++) {
        let tdE1 = document.createElement('td');
        trE1.appendChild(tdE1);
        tdE1.textContent = totalPerHour[i];
    }
    let tdE12 = document.createElement('td');
    trE1.appendChild(tdE12);
    tdE12.textContent = finalTotal;
}
bottomOfTable();
