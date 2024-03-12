// Initial Fetch variables and functions
const ria_api_key = "482944e26d320a80bd5e4f23b3de7d1f";
const my_api_key = "0f625f5b0482a767f98983091bdac3d4";
const http = "http://";
const placeholder_cities = {"city1":"RIO DE JANEIRO", "city2":"BEIJING", "city3":"LOS ANGELES"};
function fetchData(city){
const forecast_url = `${http}api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${my_api_key}`;
fetch(forecast_url) // api for the get request
    .then(response => response.json())
    .then(data => document.getElementById('csv').innerText = JSON.stringify(data));
}

// sample offline weather object
var timeWeather1  = [{ "temp": 75, "rain": 0, "icon": "file:///android_asset/icons/sunny.png", "time": "3:00PM"},
{ "temp": 50, "rain": 30, "icon": "file:///android_asset/icons/light_shower.png", "time": "4:00PM"},
{ "temp": 30, "rain": 70, "icon": "file:///android_asset/icons/shower.png", "time": "5:00PM"},
{ "temp": 20, "rain": 90, "icon": "file:///android_asset/icons/cloudy.png", "time": "6:00PM"}];
var dayWeather1 = [{ "icon": "file:///android_asset/icons/sunny.png", "date": "Fri, Nov 1",
"desc": "Clear throughout the day", "high": 75, "low": 36},
{ "icon": "file:///android_asset/icons/light_shower.png", "date": "Sat, Nov 2",
"desc": "Light Shower later in the day", "high": 65, "low": 31},
{ "icon": "file:///android_asset/icons/shower.png", "date": "Sun, Nov 3",
"desc": "Moderate shower throughout the day", "high": 59, "low": 30},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Mon, Nov 4",
"desc": "Cloudy throughout the day", "high": 38, "low": 20},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Tue, Nov 5",
"desc": "Cloudy throughout the day", "high": 30, "low": 18}];

var timeWeather2  = [{ "temp": 80, "rain": 5, "icon": "file:///android_asset/icons/sunny.png", "time": "3:00PM"},
{ "temp": 50, "rain": 45, "icon": "file:///android_asset/icons/light_shower.png", "time": "4:00PM"},
{ "temp": 30, "rain": 60, "icon": "file:///android_asset/icons/shower.png", "time": "5:00PM"},
{ "temp": 20, "rain": 95, "icon": "file:///android_asset/icons/cloudy.png", "time": "6:00PM"}];
var dayWeather2 = [{ "icon": "file:///android_asset/icons/sunny.png", "date": "Fri, Nov 1",
"desc": "Clear throughout the day", "high": 75, "low": 36},
{ "icon": "file:///android_asset/icons/light_shower.png", "date": "Sat, Nov 2",
"desc": "Light Shower later in the day", "high": 65, "low": 31},
{ "icon": "file:///android_asset/icons/shower.png", "date": "Sun, Nov 3",
"desc": "Moderate shower throughout the day", "high": 59, "low": 30},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Mon, Nov 4",
"desc": "Cloudy throughout the day", "high": 38, "low": 20},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Tue, Nov 5",
"desc": "Cloudy throughout the day", "high": 30, "low": 18}];

var timeWeather3  = [{ "temp": 90, "rain": 0, "icon": "file:///android_asset/icons/sunny.png", "time": "3:00PM"},
{ "temp": 50, "rain": 30, "icon": "file:///android_asset/icons/light_shower.png", "time": "4:00PM"},
{ "temp": 30, "rain": 70, "icon": "file:///android_asset/icons/shower.png", "time": "5:00PM"},
{ "temp": 20, "rain": 90, "icon": "file:///android_asset/icons/cloudy.png", "time": "6:00PM"}];
var dayWeather3 = [{ "icon": "file:///android_asset/icons/sunny.png", "date": "Fri, Nov 1",
"desc": "Clear throughout the day", "high": 75, "low": 36},
{ "icon": "file:///android_asset/icons/light_shower.png", "date": "Sat, Nov 2",
"desc": "Light Shower later in the day", "high": 65, "low": 31},
{ "icon": "file:///android_asset/icons/shower.png", "date": "Sun, Nov 3",
"desc": "Moderate shower throughout the day", "high": 59, "low": 30},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Mon, Nov 4",
"desc": "Cloudy throughout the day", "high": 38, "low": 20},
{ "icon": "file:///android_asset/icons/cloudy.png", "date": "Tue, Nov 5",
"desc": "Cloudy throughout the day", "high": 30, "low": 18}];

const timeWeatherMap = new Map();
timeWeatherMap.set(placeholder_cities.city1, timeWeather1);
timeWeatherMap.set(placeholder_cities.city2, timeWeather2);
timeWeatherMap.set(placeholder_cities.city3, timeWeather3);

const dayWeatherMap = new Map();
dayWeatherMap.set(placeholder_cities.city1, dayWeather1);
dayWeatherMap.set(placeholder_cities.city2, dayWeather2);
dayWeatherMap.set(placeholder_cities.city3, dayWeather3);

/*
// Android Mobile Interfaces
var city = Android.loadPage();
//const csv = Android.loadFileString();
var searchBar = document.getElementById("location");
var isSearchBarClicked = Android.searchBarClicked();
if (isSearchBarClicked){
   searchBar.style.display="block";
 } else {
   searchBar.style.display="none";
 }

const tabSwiped = Android.getTabSwipeMotion();
if (tabSwiped){
 city = Android.loadPage();
 isSearchBarClicked = Android.searchBarClicked();
}

function showLoc(){
var searchBar = document.getElementById("location");
if (searchBar.style.display==="none"){
 searchBar.style.display="block";
} else {
  searchBar.style.display="none";
 }
}

*/

// ==========Timely update division =================
// getting and creating elements
const page = document.getElementById('page');
const locSelect = document.getElementById('location');
const timeBlock = document.createElement('div');
const hour_heading = document.createElement('p');
const t_row = document.createElement('div');

// setting elements attributes
timeBlock.setAttribute("class", "div-block-top");
hour_heading.setAttribute("class", "div_heading");
t_row.setAttribute("class", "t_row");

// adding columns contents dynamically
for(i=0; i<4; i++){
// =========== Start loop ===============
const col = document.createElement('div');
const t_temp = document.createElement('p');
const t_rain = document.createElement('p');
const t_icon = document.createElement('img');
const t_time = document.createElement('p');
const deg = String.fromCharCode(176);
const pert = String.fromCharCode(37);

col.setAttribute('class', 't_col');
t_temp.setAttribute('class', 't_temp');
t_rain.setAttribute('class', 't_rain');
t_icon.setAttribute('class', 't_icon');
t_time.setAttribute('class', 't_time');
timeBlock.setAttribute('onclick', 'showLoc()');

col.appendChild(t_temp);
col.appendChild(t_rain);
col.appendChild(t_icon);
col.appendChild(t_time);
t_row.appendChild(col);

t_temp.innerText = timeWeatherMap.get(city)[i].temp+deg;
t_rain.innerText = timeWeatherMap.get(city)[i].rain+pert;
t_icon.src = timeWeatherMap.get(city)[i].icon;
t_time.innerText = timeWeatherMap.get(city)[i].time;
} // =============   End  Loop ==============f

// assigning values to other elements
hour_heading.innerText = "Next Hours";

// appending elements
timeBlock.appendChild(hour_heading);
timeBlock.appendChild(t_row);
page.appendChild(timeBlock);


// =========== Daily Update Division ==========
// getting and creating elements
const dailyBlock = document.createElement('div');
const daily_heading = document.createElement('p');
const d_col = document.createElement('div');
dailyBlock.setAttribute('onclick', 'showLoc()');

// setting elements attributes
dailyBlock.setAttribute("class", "div-block-bottom");
daily_heading.setAttribute("class", "div_heading");
d_col.setAttribute("class", "d_col");

// adding columns contents dynamically
for(j=0; j<5; j++){
// =========== Start loop ===============
const row = document.createElement('div');
const d_span1 = document.createElement('span');
const d_span2 = document.createElement('span');
const d_span3 = document.createElement('span');
const d_icon = document.createElement('img');
const d_date = document.createElement('p');
const d_desc = document.createElement('p');
const d_temp = document.createElement('p');
const deg = String.fromCharCode(176);

row.setAttribute('class', 'd_row');
d_span1.setAttribute('class', 'd_span1');
d_span2.setAttribute('class', 'd_span2');
d_span3.setAttribute('class', 'd_span3');
d_icon.setAttribute('class', 'd_icon');
d_date.setAttribute('class', 'd_date');
d_desc.setAttribute('class', 'd_desc');
d_temp.setAttribute('class', 'd_temp');

d_span1.appendChild(d_icon);
d_span2.appendChild(d_date);
d_span2.appendChild(d_desc);
d_span3.appendChild(d_temp);
row.appendChild(d_span1);
row.appendChild(d_span2);
row.appendChild(d_span3);
d_col.appendChild(row);

d_icon.src = dayWeatherMap.get(city)[j].icon;
d_date.innerText = dayWeatherMap.get(city)[j].date;
d_desc.innerText = dayWeatherMap.get(city)[j].desc;
d_temp.innerText = dayWeatherMap.get(city)[j].high+deg+"  "+dayWeatherMap.get(city)[j].low+deg;
} // =============   End  Loop ==============

// assigning values to other elements
daily_heading.innerText = "Next 5 days";

// appending elements
dailyBlock.appendChild(daily_heading);
dailyBlock.appendChild(d_col);
page.appendChild(dailyBlock);




//fetchData(placeholder_cities.city1);



// functions
