// cord is the location of the map
cord = [31.80758225130327, 34.65825645891311];
var enter = document.getElementById("button"),
mark = document.getElementById("radioMark"),
lay1 = document.getElementById("layer1");
lay2 = document.getElementById("layer2");
lay3 = document.getElementById("layer3");
lay4 = document.getElementById("layer4");
lay5 = document.getElementById("layer5");
lay6 = document.getElementById("layer6");

var map = L.map('map'),
color1="blue",
color2="blue",
firstConection = true,
checkMark = false,
checkLay1 = false,
checkLay2 = false,
checkLay3 = false,
checkLay4 = false,
checkLay5 = false,
checkLay6 = false,
zone,
marker = L.marker(cord);


addToMap();
//Event Listener from all button in the site 

//OpenCycleMap
lay1.addEventListener('click',function(){	
	checkLay1 = !checkLay1;
	lay1.checked = checkLay1;
	if(checkLay1)
    {
		lay_1 = L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);
		map.addLayer(lay_1);
		cordMark();
	}
	else
		map.removeLayer(lay_1);
})

//Transport layer
lay2.addEventListener('click',function(){	
	checkLay2 = !checkLay2;
	lay2.checked = checkLay2;
	if(checkLay2)
    {
		lay_2 = L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);
		map.addLayer(lay_2);
		cordMark();
	}
	else
		map.removeLayer(lay_2);
})
//Landscape layer
lay3.addEventListener('click',function()
{	
	checkLay3 = !checkLay3;
	lay3.checked = checkLay3;
	if(checkLay3)
    {
		lay_3 = L.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);
		map.addLayer(lay_3);
		cordMark();
	}
	else
		map.removeLayer(lay_3);
})

//Outdoors layer
lay4.addEventListener('click',function()
{	
	checkLay4 = !checkLay4;
	lay4.checked = checkLay4;
	if(checkLay4)
    {
		lay_4 = L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);//set view (cordinatote , zoom)
		map.addLayer(lay_4);//add new layer to my map
		cordMark();
	}
	else
		map.removeLayer(lay_4);
})
//Neighbourhood layer
lay5.addEventListener('click',function()
{	
	checkLay5 = !checkLay5;
	lay5.checked = checkLay5;
	if(checkLay5)
    {
		lay_5 = L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);//set view (cordinatote , zoom)
		map.addLayer(lay_5);//add new layer to my map
		cordMark();
	}
	else
		map.removeLayer(lay_5);
})

//Atlas layer
lay6.addEventListener('click',function()
{	
	checkLay6 = !checkLay6;
	lay6.checked = checkLay6;
	if(checkLay6)
    {
		lay_6 = L.tileLayer('https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=efc43b4c7ded430ab5c2f980f3ec54e6', {
			maxZoom: 20,
		});
		map.setView(cord,15);//set view (cordinatote , zoom)
		map.addLayer(lay_6);//add new layer to my map
		cordMark();
	}
	else
		map.removeLayer(lay_6);
})

//The "Mark loc" button:blue circle mark
mark.addEventListener('click',function(){

	checkMark = !checkMark;
	mark.checked = checkMark;
	if(checkMark)
		changeZone(color1,color2);
	else
		map.removeLayer(zone);
});
//The "enter" button: click enter after the user put cordinatote
enter.addEventListener('click',function(){
	var lat = document.getElementById("lat").value;
	var lon = document.getElementById("lon").value;
	if(isNaN(lat) === false && isNaN(lon) === false){
		cord = [Number(lat),Number(lon)];
		cordMark();
		addToMap();
	}
});

//------------------------------------- Help function --------------------------------------------------
//when we click on "Mark on the map" in web we get the blue circle on the cordiatote
function changeZone(color1,color2)
{
	zone = L.circle(cord,{
		color:color1,
		fillColor:color2,
		opacity:75,
		radius:100
	});
	map.setView(cord,15);
	map.addLayer(zone);

}




//add the default map on a web
function addToMap()
{
	map.setView(cord,13);
	if(firstConection){
		StartMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 20,});
		map.addLayer(StartMap);
		map.addLayer(marker);
		if (cord[0]==31.80758225130327 & cord[1]== 34.65825645891311){
			marker.bindPopup("<b>Sami Shamoon College of Engineering.</b><br> <u>Cordinatote<br></u> "+"Latitude: "+cord[0]+"<br>Longitude: "+cord[1]).openPopup();
		}
		else {marker.bindPopup("<u>Cordinatote</u><br>"+"Latitude: "+cord[0]+"<br>Longitude: "+cord[1]).openPopup();}
		firstConection = false;
	}
}

// add the blue marker on the map and when we click on the marker we get the cordinatote
function cordMark()
{
	map.removeLayer(marker);
	marker = L.marker(cord);
	map.addLayer(marker);
	if (cord[0]==31.80758225130327 & cord[1]== 34.65825645891311){
		marker.bindPopup("<b>Sami Shamoon College of Engineering.</b><br> <u>Cordinatote<br></u> "+"Latitude: "+cord[0]+"<br>Longitude: "+cord[1]).openPopup();
	}
	else {marker.bindPopup("<u>Cordinatote</u><br>"+"Latitude: "+cord[0]+"<br>Longitude: "+cord[1]).openPopup();}
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

