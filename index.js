function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
}
function closeCoupon(){
    document.getElementById('coupon').style.display = 'None';
}
// var mode = document.getElementById("mode");
// mode.onclick = function(){
//   mode.body.classList.toggle("dark-theme");
// }
function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-theme")
}