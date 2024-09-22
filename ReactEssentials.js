// react js mein aapko ek state naam ki cheej milegi us bande ko aap mutate nahi karsakte mtlb ki directly uski value nahi hata ya jod sakte

// This is how we can change the value in react using spread operator
var state=[1,2,3,4,5];
var copy = [...state];
copy.pop();

var state2 = {name:"harsh", age:24};
var copy2 ={...state2};
copy2.name= "harsita";
state2 = copy;

// destructuring
//obj
var obj = {name: "string", 
    social:{
        facebook:{
            first:"asd",
            second: "kjhg",
        },
    },
};
const {second}= obj.social.facebook;

//array
var arr=[12, function(){},13];
var[first,sec]= arr;

/*
hum log component banaate hai , component matlab page ka hissa, navbar, sidebar, cart, landing , second, ab dikkat
ye aati hai ki har hissa alag alag component hai aur components ko hum log alag alag file mai rakhte hai, to inko 
last mein jodna bhi padta hai , jodne ke liye use hota import and export
*/



