//map and filter
// map and filter - dono hi array pe chalta hai , aur dono ka kaam hai array par kuch perform karna and "ek naya array return karna "

var arr = [1,2,3,4,5];
// map - har element par kuch karo and naye array mein rakho
// map ke andar aata hai function and function ke andar aata hai value
const ans =arr.map(val=>val*2)
console.log(ans);
//map ke andar return krne ke wajah se hi element naye array mein place hote hai

// ek array hai saare numbers jo 5se bade ho unke 5 jod dena and baki numbers waise ki waise return karo naye array mein

var state = [11,2,32,4,5,6,3,1,13];
const ans1 = state.map(elem => elem>5 ? elem+5: elem)

// map filter mein ek hi farak hai , map saare bande lautata hai matlab ki count kam nahi hoga , filter bando kokan=m kar sakta hai

// ek array mein se saare wo nums hata do jo ki 5 se chote hai

var arr1 = [1,2,3,4,5,6];
const ans2 = arr1.filter(elem => elem>4);

var arr2 = [
    {name:"harsh", gender:"male"},
    {name:"harshita", gender:"female"},
    {name:"harshika", gender:"female"},
  
]
const ans3 = arr2.filter(elem => elem.gender==="male")