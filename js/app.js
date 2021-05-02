/* eslint-disable no-unused-vars */
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomNumber(65, 23));
let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avgsale: 6.3,
    custemersPerHour: [],
    cookiePerHour: [],
    getcustemersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custemersPerHour.push(randomNumber(this.min, this.max));

            console.log(this.custemersPerHour);
        }
    },
    getcookiePerHour: function () {
        for (let i = 0; i < this.custemersPerHour.length; i++) {
            this.cookiePerHour.push(Math.floor(this.custemersPerHour[i] * this.avgsale));

            console.log(this.cookiePerHour);
        }
    },


};

seattle.getcustemersPerHour();
seattle.getcookiePerHour();

let theParent = document.getElementById('seattleCity');
console.log(theParent);
let h2Sea = document.createElement('h2');
theParent.appendChild(h2Sea);
h2Sea.textContent = seattle.name;

let article = document.createElement('p');
theParent.appendChild(article);
article.textContent = `${seattle.name} City object`;

let unOrderedlist = document.createElement('ul');
theParent.appendChild(unOrderedlist);
for (let i = 0; i < hours.length; i++) {
    let listOfhours = document.createElement('li');
    unOrderedlist.appendChild(listOfhours);
    listOfhours.textContent = hours[i] + ' : ' + seattle.cookiePerHour[i];
}

let sum = 0;
for (let i = 0; i < hours.length; i++) {
    sum = sum + seattle.cookiePerHour[i];
}
console.log(sum);

let listOfhours = document.createElement('li');
unOrderedlist.appendChild(listOfhours);
listOfhours.textContent = 'Total :' + sum;




let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 2,
    avgsale: 1.2,
    custemersPerHour: [],
    cookiePerHour: [],
    getcustemersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custemersPerHour.push(randomNumber(this.min, this.max));
            
            console.log(this.custemersPerHour);
        }
    },
    getcookiePerHour: function () {
        for (let i = 0; i < this.custemersPerHour.length; i++) {
           this.cookiePerHour.push(Math.floor(this.custemersPerHour[i] * this.avgsale));

            console.log(this.cookiePerHour);
        }
    },


};

Tokyo.getcustemersPerHour();
Tokyo.getcookiePerHour();

let theParent1 = document.getElementById('TokyoCity');
console.log(theParent);
let h2Sea1 = document.createElement('h2');
theParent.appendChild(h2Sea);
h2Sea.textContent=Tokyo.name;

let article1=document.createElement('p');
theParent.appendChild(article);
article.textContent=`${Tokyo.name} City object`;

let unOrderedlist1=document.createElement('ul');
theParent.appendChild(unOrderedlist);
for (let i = 0; i < hours.length; i++) {
    let listOfhours=document.createElement('li');
    unOrderedlist.appendChild(listOfhours);
    listOfhours.textContent=hours[i] + ' : ' + Tokyo.cookiePerHour[i];
}

let sum1 = 0;
for (let i = 0; i < hours.length; i++) {
    sum1=sum1 + seattle.cookiePerHour[i];
}
console.log(sum1);

let listOfhours1=document.createElement('li');
unOrderedlist.appendChild(listOfhours);
listOfhours.textContent= 'Total :' + sum1;
