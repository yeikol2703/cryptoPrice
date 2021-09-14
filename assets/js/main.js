setInterval(showTime, 1000);
setInterval(getCoinData, 3000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + " " + min + " " + sec;

  document.getElementById("clock-time").innerHTML = currentTime;
}
showTime();

function getCoinData(){
fetch('https://api.coincap.io/v2/assets').then(
  resp => resp.json() // this returns a promise
).then(repos => {
  
  let data = repos.data;

  var padre = document.getElementById("coins-container");


  for (var i = 0; i < data.length; i++){

var symbol = document.createTextNode( data[i].symbol );
var name = document.createTextNode( data[i].id );
var priceUsd =  document.createTextNode( "$ " + data[i].priceUsd );

var div = document.createElement("div");
div.classList.add("col");
div.classList.add("card");
var h1 = document.createElement("h1");
h1.appendChild(symbol);
div.appendChild(h1);
var subDiv = document.createElement("div");
subDiv.classList.add("card-body");
var h5 = document.createElement("h5");
h5.classList.add("card-title");
var p = document.createElement("p");
p.classList.add("card-text");
h5.appendChild(name);
p.appendChild(priceUsd);
subDiv.appendChild(h5);
subDiv.appendChild(p);
div.appendChild(subDiv);
padre.appendChild(div);

  }
 
  
}).catch(ex => {
  console.error(ex);
})
}
getCoinData();

