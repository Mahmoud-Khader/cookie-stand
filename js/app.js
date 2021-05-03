/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
'use srtict';

const hours= ['6am','7am','8am','9am','10am','11am',' 12pm ','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//...........................................................................
let parent=document.getElementById('parent');
console.log(parent);

let Seattle = {
    min:23,
    max:65,
    AvgCookie:6.3,
    customers:[],
    cookiePerHour:[],

    customersPerHour: function(){

        for (let i = 0; i < hours.length; i++) {
            let x=randomNumber(this.min,this.max);
            this.customers.push(x);
            console.log(this.customers);
            
        }
    },

    getcookiesPerHour: function(){
        for (let j = 0; j < this.customers.length; j++) {
            let z = Math.floor(this.customers[j] * this.AvgCookie);
            this.cookiePerHour.push(z);
            console.log(this.cookiePerHour);

        }
    },
    renderfunction:function(){
        
        let unorderedlist=document.createElement('ul');
        parent.appendChild(unorderedlist);
        console.log(unorderedlist);
        unorderedlist.textContent=('Seattle');
        
        for (let i = 0; i < hours.length; i++) {
            let listItems=document.createElement('li');
            unorderedlist.appendChild(listItems);
            listItems.textContent=hours[i] + ' : ' + Seattle.cookiePerHour[i];
           
        }
        
        let sum=0;
        for (let j = 0; j < hours.length; j++) {
            sum=sum + Seattle.cookiePerHour[j];   
        }
        console.log(sum);
        
        let listItems=document.createElement('li');
        unorderedlist.appendChild(listItems);
        listItems.textContent = 'Total :' + sum;
    }

}

Seattle.customersPerHour();
Seattle.getcookiesPerHour();
Seattle.renderfunction();


//................................................


let Tokyo = {
    min:3,
    max:25,
    AvgCookie:1.2,
    customers:[],
    cookiePerHour:[],

    customersPerHour: function(){

        for (let i = 0; i < hours.length; i++) {
            let x=randomNumber(this.min,this.max);
            this.customers.push(x);
            console.log(this.customers);
            
        }
    },

    getcookiesPerHour: function(){
        for (let j = 0; j < this.customers.length; j++) {
            let z = Math.floor(this.customers[j] * this.AvgCookie);
            this.cookiePerHour.push(z);
            console.log(this.cookiePerHour);

        }
    },
  renderfunction:function(){
    

    let unorderedlist1=document.createElement('ul');
    parent.appendChild(unorderedlist1);
    console.log(unorderedlist1);
    unorderedlist1.textContent=('Tokyo');
    
    for (let i = 0; i < hours.length; i++) {
        let listItems1=document.createElement('li');
        unorderedlist1.appendChild(listItems1);
        listItems1.textContent=hours[i] + ' : ' + Tokyo.cookiePerHour[i];
       
    }
    
    let sum1=0;
    for (let j = 0; j < hours.length; j++) {
        sum1=sum1 + Tokyo.cookiePerHour[j];   
    }
    console.log(sum1);
    
    let listItems1=document.createElement('li');
    unorderedlist1.appendChild(listItems1);
    listItems1.textContent = 'Total :' + sum1;
}
}

Tokyo.customersPerHour();
Tokyo.getcookiesPerHour();
Tokyo.renderfunction();

//----------------------------------------------------------------------------------

let Dubai = {
    min:11,
    max:38,
    AvgCookie:3.7,
    customers:[],
    cookiePerHour:[],

    customersPerHour: function(){

        for (let i = 0; i < hours.length; i++) {
            let x=randomNumber(this.min,this.max);
            this.customers.push(x);
            console.log(this.customers);
            
        }
    },

    getcookiesPerHour: function(){
        for (let j = 0; j < this.customers.length; j++) {
            let z = Math.floor(this.customers[j] * this.AvgCookie);
            this.cookiePerHour.push(z);
            console.log(this.cookiePerHour);

        }
    },
    renderfunction:function(){
        let unorderedlist2=document.createElement('ul');
        parent.appendChild(unorderedlist2);
        console.log(unorderedlist2);
        unorderedlist2.textContent=('Dubai');
        
        for (let i = 0; i < hours.length; i++) {
            let listItems2=document.createElement('li');
            unorderedlist2.appendChild(listItems2);
            listItems2.textContent=hours[i] + ' : ' + Dubai.cookiePerHour[i];
           
        }
        
        let sum2=0;
        for (let j = 0; j < hours.length; j++) {
            sum2=sum2 + Dubai.cookiePerHour[j];   
        }
        console.log(sum2);
        
        let listItems2=document.createElement('li');
        unorderedlist2.appendChild(listItems2);
        listItems2.textContent = 'Total :' + sum2;
        
    }

}

Dubai.customersPerHour();
Dubai.getcookiesPerHour();
Dubai.renderfunction();

//------------------------------------------------------------------------------

let Paris = {
    min:20,
    max:38,
    AvgCookie:2.3,
    customers:[],
    cookiePerHour:[],

    customersPerHour: function(){

        for (let i = 0; i < hours.length; i++) {
            let x=randomNumber(this.min,this.max);
            this.customers.push(x);
            console.log(this.customers);
            
        }
    },

    getcookiesPerHour: function(){
        for (let j = 0; j < this.customers.length; j++) {
            let z = Math.floor(this.customers[j] * this.AvgCookie);
            this.cookiePerHour.push(z);
            console.log(this.cookiePerHour);

        }
    },
    renderfunction:function(){
        let unorderedlist3=document.createElement('ul');
parent.appendChild(unorderedlist3);
console.log(unorderedlist3);
unorderedlist3.textContent=('Paris');


for (let i = 0; i < hours.length; i++) {
    let listItems3=document.createElement('li');
    unorderedlist3.appendChild(listItems3);
    listItems3.textContent=hours[i] + ' : ' + Paris.cookiePerHour[i];
   
}


let sum3=0;
for (let j = 0; j < hours.length; j++) {
    sum3=sum3 + Paris.cookiePerHour[j];   
}
console.log(sum3);


let listItems3=document.createElement('li');
unorderedlist3.appendChild(listItems3);
listItems3.textContent = 'Total :' + sum3;
    }

}

Paris.customersPerHour();
Paris.getcookiesPerHour();
Paris.renderfunction();

//----------------------------------------------------------------------------------

let Lima = {
    min:2,
    max:16,
    AvgCookie:4.6,
    customers:[],
    cookiePerHour:[],

    customersPerHour: function(){

        for (let i = 0; i < hours.length; i++) {
            let x=randomNumber(this.min,this.max);
            this.customers.push(x);
            console.log(this.customers);
            
        }
    },

    getcookiesPerHour: function(){
        for (let j = 0; j < this.customers.length; j++) {
            let z = Math.floor(this.customers[j] * this.AvgCookie);
            this.cookiePerHour.push(z);
            console.log(this.cookiePerHour);

        }
    },
    renderfunction:function(){
        let unorderedlist4=document.createElement('ul');
        parent.appendChild(unorderedlist4);
        console.log(unorderedlist4);
        unorderedlist4.textContent=('Lima');
        
        
        for (let i = 0; i < hours.length; i++) {
            let listItems4=document.createElement('li');
            unorderedlist4.appendChild(listItems4);
            listItems4.textContent=hours[i] + ' : ' + Lima.cookiePerHour[i];
           
        }
        
        
        let sum4=0;
        for (let j = 0; j < hours.length; j++) {
            sum4=sum4 + Lima.cookiePerHour[j];   
        }
        console.log(sum4);
        
        
        let listItems4=document.createElement('li');
        unorderedlist4.appendChild(listItems4);
        listItems4.textContent = 'Total :' + sum4; 
    }

}

Lima.customersPerHour();
Lima.getcookiesPerHour();
Lima.renderfunction();
