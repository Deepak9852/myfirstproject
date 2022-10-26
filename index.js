// for coupon popup

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
}
function closeCoupon(){
    document.getElementById('coupon').style.display = 'None';
}

//  for light mode or dark mode

// var mode = document.getElementById("mode");
// mode.onclick = function(){
//   mode.body.classList.toggle("dark-theme");
// }
function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-theme")
}

//   for geolocation

let x = document.getElementById('out');
let y = document.getElementById('weatherout');
function geolocation(){
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
   }
    else{
       alert("browser does not support geolocation api");
   }
}
function showPosition(data){
    // var lat = data.coords.latitude;
    // var lng = data.coords.longitude;
    let x = document.getElementById('out');
    let y = document.getElementById('weatherout');
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    // $.get(myapi,function(data){
        console.log(data);
        fetch(url,{method: 'GET'})
        //return promise
        .then((res) => res.json())
        //resolve promise
        .then((data) => {
          console.log(data);
           let cityname = data.city.name;
           let temp = data.list[0].temp.day;
           y.innerText = `${cityname} / ${temp} °c`;
          })
        .catch((err) => {
          console.log(err);
        });
    }
