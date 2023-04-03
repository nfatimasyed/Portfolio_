const getLocation = document.getElementById("getlocation");
getLocation.addEventListener('click',evt=>{
if('geolocation' in navigator){
navigator.geolocation.getCurrentPostion(position=>
let latitude = posiion.coords.latitude;
let longitude = position.coords.longitude;
console.log(latitutde,longitude);
let googleMapURL ='https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400';
},error=>{
console.log(latitude,longitude);
},error=>{
console.log(error.code);
});
}
else{
console.log("Not Supported");
}
});