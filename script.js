
var h1=document.createElement("h1");
var text=document.createTextNode("Random Emojis😀 API")
h1.append(text)
var div1=document.createElement("div");
div1.setAttribute("class","container");
var input=document.createElement("input");
input.setAttribute("type","button");
input.setAttribute("value","CLICK ME!!!😊");
input.setAttribute("id","search")
var div2=document.createElement("div");
div2.setAttribute("id","name");
var div3=document.createElement("div");
div3.setAttribute("id","category");
var div4=document.createElement("div");
div4.setAttribute("id","unicode");
var div5=document.createElement("div");
div5.setAttribute("id","group");
document.body.append(h1,div1,input,div2,div3,div4,div5)
 var search=document.getElementById("search")
 search.addEventListener("click",emoji);



 async function emoji(){


var url= await fetch("https://emojihub.herokuapp.com/api/random")
//console.log(url);
let result=await url.json();
//console.log(result);


document.getElementById("name").innerHTML=`The Emoji Name is"${result.name}"`
document.getElementById("category").innerHTML=`The Emoji Category is" ${result.category}"`
document.getElementById("group").innerHTML=`The Emoji Group is"${result.group}"`
document.getElementById("unicode").innerHTML=`The Emoji Unicode is "${result.unicode}"`



 }
 emoji()
 
 
 
 
