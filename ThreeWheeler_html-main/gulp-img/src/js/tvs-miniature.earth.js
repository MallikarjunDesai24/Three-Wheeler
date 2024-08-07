var myearth, sprite;
var localNewsMarker;
var news = [];
var zoomFlag = true;
var countriesLatLng = [
	{
		CountryName: "india",
		Latitude: 21.7679,
		Longitude: 78.8718,
		ThreeLetterCountryCode: "IND",
		TwoLatterCountryCode: "IN",
		UrlLabelText: "Visit Country website",
		//	flagUrl: "/-/media/Feature/IB/LandingPage/Indiaflag.png", 
		//	internalUrl: "http://tvssite.sc.local/en/india"
	},
	{
		CountryName: "Egypt",
		Latitude: 26.820553,
		Longitude: 30.802498,
		ThreeLetterCountryCode: "Egy",
		TwoLatterCountryCode: "EG",
		UrlLabelText: "Visit Country website",
		//flagUrl: "/-/media/Feature/IB/LandingPage/Indiaflag.png", 
		//	internalUrl: ""
	},
	{
		CountryName: "Nepal",
		Latitude: 28.24648563667009,
		Longitude: 84.25880535240071,
		ThreeLetterCountryCode: "NPL",
		TwoLatterCountryCode: "NP",
		UrlLabelText: "Visit Country website",
		//	flagUrl: "/-/media/Feature/IB/LandingPage/Nepalflag.png", 
		//	internalUrl: "http://tvssite.sc.local/en/nepal"
	},
	{
		CountryName: "Bangladesh",
		Latitude: 24.070238549854203,
		Longitude: 90.47049108450739,
		ThreeLetterCountryCode: "BDS",
		TwoLatterCountryCode: "BD",
		UrlLabelText: "Visit Country website",
		//	flagUrl: "/-/media/Feature/IB/LandingPage/banglaflag.png", 
		//	internalUrl: "http://tvssite.sc.local/en/bangladesh"
	},
	{
		CountryName: "SriLanka",
		Latitude: 7.873054,
		Longitude: 80.771797,
		ThreeLetterCountryCode: "SRL",
		TwoLatterCountryCode: "LK",
		UrlLabelText: "Visit Country website",
		//	flagUrl: "/-/media/Feature/IB/LandingPage/banglaflag.png", 
		//	internalUrl: ""
	},
	{
		CountryName: "Iraq",
		Latitude: 33.223190,
		Longitude: 43.679291,
		ThreeLetterCountryCode: "Ira",
		TwoLatterCountryCode: "IQ",
		UrlLabelText: "Visit Country website",
		//	flagUrl: "/-/media/Feature/IB/LandingPage/banglaflag.png", 
		//	internalUrl: ""
	},
	{
		CountryName: "Afghanistan",
		Latitude: 33.939110,
		Longitude: 67.709953,
		ThreeLetterCountryCode: "AFG",
		TwoLatterCountryCode: "AF",
		UrlLabelText: "Visit Country website",
	},
	{
		CountryName: "Lebanon",
		Latitude: 33.854721,
		Longitude: 35.862286,
		ThreeLetterCountryCode: "LEB",
		TwoLatterCountryCode: "LB",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "UAE",
		Latitude: 23.424076,
		Longitude: 53.847816,
		ThreeLetterCountryCode: "UAE",
		TwoLatterCountryCode: "AE",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Ethiopia",
		Latitude: 9.145000,
		Longitude: 40.489674,
		ThreeLetterCountryCode: "ETH",
		TwoLatterCountryCode: "ET",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Somalia",
		Latitude: 5.152149,
		Longitude: 46.199615,
		ThreeLetterCountryCode: "SOM",
		TwoLatterCountryCode: "SO",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Sudan",
		Latitude: 12.862897,
		Longitude: 30.217636,
		ThreeLetterCountryCode: "SUD",
		TwoLatterCountryCode: "SD",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Djibouti",
		Latitude: 11.825138,
		Longitude: 42.590275,
		ThreeLetterCountryCode: "DJI",
		TwoLatterCountryCode: "DJ",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Kenya",
		Latitude: -0.023559,
		Longitude: 37.906193,
		ThreeLetterCountryCode: "KEN",
		TwoLatterCountryCode: "KE",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Uganda",
		Latitude: 1.373333,
		Longitude: 32.290276,
		ThreeLetterCountryCode: "UGA",
		TwoLatterCountryCode: "UG",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Burundi",
		Latitude: -3.373056,
		Longitude: 29.918886,
		ThreeLetterCountryCode: "BUR",
		TwoLatterCountryCode: "BI",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Nigeria",
		Latitude: 9.081999,
		Longitude: 8.675277,
		ThreeLetterCountryCode: "NIG",
		TwoLatterCountryCode: "NG",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Ghana",
		Latitude: 7.946527,
		Longitude: -1.023194,
		ThreeLetterCountryCode: "GHA",
		TwoLatterCountryCode: "GH",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "DR Congo",
		Latitude: -4.643601,
		Longitude: 21.362312,
		ThreeLetterCountryCode: "CON",
		TwoLatterCountryCode: "CD",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Mauritania",
		Latitude: 21.007891,
		Longitude: -10.940835,
		ThreeLetterCountryCode: "MAR",
		TwoLatterCountryCode: "MR",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Malawi",
		Latitude: -13.254308,
		Longitude: 34.301525,
		ThreeLetterCountryCode: "MAL",
		TwoLatterCountryCode: "MW",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "South Africa",
		Latitude: -30.559483,
		Longitude: 22.937506,
		ThreeLetterCountryCode: "SOA",
		TwoLatterCountryCode: "ZA",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Guinea",
		Latitude: 9.945587,
		Longitude: -9.696645,
		ThreeLetterCountryCode: "GUI",
		TwoLatterCountryCode: "GN",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Liberia",
		Latitude: 6.428055,
		Longitude: -9.429499,
		ThreeLetterCountryCode: "LIB",
		TwoLatterCountryCode: "LR",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Togo",
		Latitude: 8.619543,
		Longitude: 0.824782,
		ThreeLetterCountryCode: "TOG",
		TwoLatterCountryCode: "TG",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Burkina Faso",
		Latitude: 12.238333,
		Longitude: -1.561593,
		ThreeLetterCountryCode: "BUR",
		TwoLatterCountryCode: "BF",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "PR Congo",
		Latitude: -0.6605788,
		Longitude: 14.8965794,
		ThreeLetterCountryCode: "CON",
		TwoLatterCountryCode: "CG",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Indonesia",
		Latitude: -0.789275,
		Longitude: 113.921326,
		ThreeLetterCountryCode: "IND",
		TwoLatterCountryCode: "ID",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Myanmar",
		Latitude: 21.916222,
		Longitude: 95.955971,
		ThreeLetterCountryCode: "MYN",
		TwoLatterCountryCode: "MM",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Cambodia",
		Latitude: 12.565679,
		Longitude: 104.990967,
		ThreeLetterCountryCode: "CAM",
		TwoLatterCountryCode: "KH",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Bolivia",
		Latitude: -16.290154,
		Longitude: -63.588654,
		ThreeLetterCountryCode: "BOL",
		TwoLatterCountryCode: "BO",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Madagascar",
		Latitude: -18.766947,
		Longitude: 46.869106,
		ThreeLetterCountryCode: "MAD",
		TwoLatterCountryCode: "MG",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Honduras",
		Latitude: 15.199999,
		Longitude: -86.241905,
		ThreeLetterCountryCode: "HON",
		TwoLatterCountryCode: "HN",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Peru",
		Latitude: -9.189967,
		Longitude: -75.015152,
		ThreeLetterCountryCode: "PER",
		TwoLatterCountryCode: "PE",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Colombia",
		Latitude: 4.570868,
		Longitude: -74.297333,
		ThreeLetterCountryCode: "COL",
		TwoLatterCountryCode: "CO",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Ecuador",
		Latitude: -1.831239,
		Longitude: -78.183403,
		ThreeLetterCountryCode: "ECU",
		TwoLatterCountryCode: "EC",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Philippines",
		Latitude: 12.8797,
		Longitude: 121.7740,
		ThreeLetterCountryCode: "PHI",
		TwoLatterCountryCode: "PH",
		UrlLabelText: "Visit Country website", 
	},
	
	{
		CountryName: "Sierra Leone",
		Latitude: 8.460555,
		Longitude: -11.779889,
		ThreeLetterCountryCode: "SIL",
		TwoLatterCountryCode: "SL",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Tanzania",
		Latitude: -6.369028,
		Longitude: 34.888821,
		ThreeLetterCountryCode: "TAN",
		TwoLatterCountryCode: "TZ",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Mexico",
		Latitude: 23.634501,
		Longitude: -102.552788,
		ThreeLetterCountryCode: "MEX",
		TwoLatterCountryCode: "MX",
		UrlLabelText: "Visit Country website", 
	},
	{
		CountryName: "Guatemala",
		Latitude: 15.783471,
		Longitude: -90.230759,
		ThreeLetterCountryCode: "GUA",
		TwoLatterCountryCode: "GT",
		UrlLabelText: "Visit Country website", 
	}
];
var modalPopup;
var countryIds = [];

window.addEventListener("earthjsload", function () {

	var mapStyles = "";
	var countryIds = countriesLatLng.map(a => a.TwoLatterCountryCode);
	mapStyles = countryIds.map(a => "#" + a).toString() + ' { fill: #18407e; stroke: #81dcb0; } ';
	myearth = new Earth(document.getElementById('Earth-element-3w'), {
		location: {
			lat: 18,
			lng: 50
		},
		zoomMax: 1.8,
		zoom: 1.27,
		zoomMin: 1.27,
		light: 'none',
		transparent: true,
		mapSeaColor: '#c0eaff',
		mapLandColor: '#81dcb0',
		mapBorderColor: '#5fbda5',
		mapBorderWidth: 0.25,
		mapStyles: mapStyles,
		mapHitTest: false,
		autoRotate: true,
		autoRotateSpeed: 2,
		autoRotateDelay: 500,
		quality: 4,
		lightType: "sun",
		lightIntensity: 1
	});

	myearth.addEventListener("ready", function () {

		if (sprite) sprite.remove();
		for (var i = 0; i < countriesLatLng.length; i++) {
			sprite = this.addSprite({
				location: {
					lat: countriesLatLng[i].Latitude,
					lng: countriesLatLng[i].Longitude
				},
				//image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY1QkM3N0ZEMjRGMTFFQUFBMjZCODY0NDI0NzlGRDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY1QkM3ODBEMjRGMTFFQUFBMjZCODY0NDI0NzlGRDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjVCQzc3REQyNEYxMUVBQUEyNkI4NjQ0MjQ3OUZEMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjVCQzc3RUQyNEYxMUVBQUEyNkI4NjQ0MjQ3OUZEMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtyaNjcAAAGbSURBVHja7JRBSwJREMfnWVgWUSwEdvAW6DHp5Dk6BYEgHvoCXsKDEPQN+hAeOoXiISEJIrFPENSpk9C1g1GUittuvf4Dz+Xt+lwX6lYDP9h5O/Nf3uzMCCklRbA02ASP4CE0kgWnYIFT8C79NgRnIGnKmya2D55luL2CgyiCOWDLaOaCXT1fGGp4B7Y8r9kkajSIej0iyyLK54mKRaJYbBzRBRnwyU5QcBvceh4LVauThS8UiEol/WQH3PBDLBCa83n1uvlPtlpErqufeDcKCiZ83mBgFrRtIsfRT6xpgl2fl82aBTMoWSJhzAsKXoG+55XLRKmUPyKZJKpU9JMPcBHW2Me+xnAcKTsdKWs1KdtttPUw2Dons/pwDpxH7MNrEI8yKcyhYez08TtSH6dZja3bOthTbZFWxb8Hl+DJlCCibBshhK/mobH/gn9YcFHN+TyIB97x7PLu+gIjkyB/fhWsgaWJFTbbWHQIXsAbC/L6XqbfsREL8nLcUNf8idk8jnoNF8CKEo4rX9/kQl1Nr6Wtrtwf1/NbgAEA9/EcbDgDF6QAAAAASUVORK5CYII=',//image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADPUExURQAAAP////////////////////////////////////////////////////////////////////////////////////////////////////8AAP///1VVVf/v7/8wMP9gYP9QUP9AQP8QEP+/v/+fn//Pz/+vr/8gIP9/f//f3/9wcP7v7/fz8/0BAdljY9wREchcXN5xcdSlpfLl5fny8u54ePG2tv3w8OsKCsoaGvYEBPgUFN/Pz/zx8ftycvTk5Nyxsetqav+Pj+0ZGewKCpuIuUMAAAAadFJOUwA308OSd7In+YdHF+maigjQgUSwYoJXUiGztKftYgAAA0BJREFUeNrtmmd7mzAQxzEJAbxXRqEYsI1X9t6z/f6fqZZETCgySEhyn/S5/8sEcz+dTtLpDk0DgUAgUDm1up1e243V7nW6rU1ar9hbbkZbdmUz1k1bd9dIt03l5qtNy81To6p29I2VpdEsGDixBsFslCAo9IIRj94bB05Gwdgj/7UMVcPfIQYi31kjP/bDjhIn9MnwR6GTo5AgWH359reJ832nQD6ZiG019idDp1DDiQoCMv2+wySfBIL08XsDh1EDT7IPsP05s33pBH08/qHDoSEmkLQWTIvL/198YJnyApDT/pJAWiAalPj3I7Qmw+K1YEiagEl6cPP43MlflhM5k9DIBKCfHL5hYSA2hM//zEgHXgIQFU9CVYIDRqnXRl/zj2kuATqZmoIRkHG0n0qA8uMwFI8CO+OACQcA9pYtBKBnYt3lAUDu0oXyb7QE0qGdsu8VbUcoYCuCMzDOARgXAYwF5wDdP4LsmFYOmBYBBOjGInD/QlYoY/rUovhIQI+Vv7V1M2vAcaYe+wTEW0G3NEBn+etZxqsxgbdgORRnyyc7pQF62RBAPkCzMP+YMp3KKAh6pQHa6xKBKVda0C4NQIlBbqF3AEBZ+wco2L69B1D6dgAx8G0B2mVuJDI3IvpWzCWxrZh6GPFJ7DCiHcecEjuOW+JRKJaQ0FIy/hAQSMkoSSmnRJPSCkvqrTItp1xMuCR8McFzEJUHEL+a4fJEWNa+hMup1hRxQSR+PacUKPgiQLhAgV3AVyNMlWhEHUAtUjFKUpGKlOkW/PYXksp0/75QqdXqy1cd8pZqD5c/qtfkFIv3XG4CbN/dk1quv+Up19+qaBg8M++I4bP0pg1pGb2w2X9R0TQiBDcsTasbNW2zXfzaq+si+9dX+MFd+Y3D/Tp+8+t7nvn3V/xQfV9F67QWt24vzx/p1h/PL+PWbU1TI4M4wT16O/n9t/VfJ29H5L91Vc1r5AR79fXA08XZ/endw/Hxw93p/dnF0+ffLbumqZSZILg/V3IT8+q/oTANfR2Abqg3T7J18hFLGuCHsaGPWJLSQRpA26wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+H4A/pS8FD7bhxLoAAAAASUVORK5CYII=',
				image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAbCAYAAACTHcTmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdNJREFUeNrsljtLQ0EQhc/6ICbGoKBFkKSwMFpoJdjEX2BhISioP8BKa5vU9hb2BrEyiEUI2ImglooIqYMPbgi+RSXJ9axuLpuwbi6iheDAx93dzJzcnd2ZRLiuC5/WS7qIQ56snlLUQpyskYJbb2dkmQRNcTbBWfLg2u2cDPoVnSRl159dkqgeLww57SR50v8xq1aB7W0gmwVub4FYDJifB8bH9ZhNslCbmETnlNOnra8DmUy9hxBAKgUkk7WVComSopy0GM5uwhvd3QE7O6bTBdJpfaVVjzOJ9nijYvFz+yZzHNOV+1L0whvJ/IVCZtFEonGlYBPd80aBALC0RK8Gt3AYWFzUV2Qx7NsOSiockzFvJc/LkMsBpRIQjwNTU0Bfnx6zSlaaVdQwcXze0yMS8ltRQ+SkieAWiTTGiiYNRV6VGTJNRtXNuCYHZIMcfqeh6IyQUz++LfgF+xf9I6Jtls+Euqdt6ss71DOk+mdZPa2i7BKIqKAgaVfCNRuQLYYMa2uyL76SF/IoO7Cc195iUP2M2OyG7BrSF1TIaovJipNlKtRbdP9AOuWbX+m1H1DbD6r8BQwpaBR407b/TO5lroWPfyhCbVMemqvEKraAdwEGAFhzCobuUg+tAAAAAElFTkSuQmCC',
				//need to work on image value.0
				anchorY: 0.2,
				scale: 0.5,
			});
		}
		modalPopup = document.getElementById("exampleModalCenter");
		errorPopup = document.getElementById("errorModalCenter");
	});

	var selectedId;

	myearth.addEventListener('click', function (event) {

		if (countryIds.includes(event.id)) {
			if (event.id && selectedId != event.id) {
				selectedId = event.id;
				myearth.goTo(event.location, {
					relativeDuration: 400,
					approachAngle: 0,
					zoom: 1.6
				});
				myearth.autoRotate = false;
				zoomFlag = false;
				document.getElementById("IN").src = "assets/images/zoom-in-dis.png";
				addOverlay();
			} else {
				var countryDetail = countriesLatLng.find(a => a.TwoLatterCountryCode == event.id);

				document.getElementById("countryname").innerHTML = countryDetail.CountryName;
				document.getElementById("flagUrl").src = countryDetail.flagUrl;
				document.getElementById("dealer").innerHTML = countryDetail.popupInfo.Informations[0].Value;
				document.getElementById("cities").innerHTML = countryDetail.popupInfo.Informations[1].Value;
				document.getElementById("products").innerHTML = countryDetail.popupInfo.Informations[2].Value;

				document.getElementById("b1").onclick = function () {
					if (countryDetail.internalUrl != "")
						window.open(countryDetail.internalUrl);
					else {
						document.getElementById("errorPopupBody").innerHTML = "No website found for '" + countryDetail.CountryName + "'";
						errorPopup.classList.add('show');
					}

				};

				modalPopup.classList.add('show');
			}
		}
	});



});
document.addEventListener("DOMContentLoaded", function () {
	document.addEventListener("mousemove", function (event) {
		var flag = myearth.getLocation({
			x: event.pageX,
			y: event.pageY
		});

		if (!flag) {
			if (zoomFlag)
				myearth.autoRotate = true;
		} else
			myearth.autoRotate = false;
	});
});

function addOverlay() {
	for (var i = 0; i < countriesLatLng.length; i++) {
		myearth.addOverlay({
			location: {
				lat: countriesLatLng[i].Latitude,
				lng: countriesLatLng[i].Longitude
			},
			content: '<span> ' + countriesLatLng[i].CountryName.toUpperCase() + ' </span>',
			className: 'docs-tip',
			depthScale: 0.5
		});
	}
}

function searchCountry() {
	var searchText = document.getElementById('inputSearch').value;
	var countryDetail = countriesLatLng.find(a => a.CountryName.toLowerCase() == searchText.toLowerCase());
	if (countryDetail != null && countryDetail != undefined) {
		selectedId = countryDetail.TwoLatterCountryCode;
		myearth.goTo({
			lat: countryDetail.Latitude,
			lng: countryDetail.Longitude
		}, {
			relativeDuration: 400,
			approachAngle: 0,
			//zoom: 1.8
		});
		document.getElementById("IN").src = "assets/images/zoom-in-dis.png";
		addOverlay();
		this.zoomFlag = false;
		myearth.autoRotate = false;
	} else {
		document.getElementById("errorPopupBody").innerHTML = "No country found for '" + searchText + "'";
		errorPopup.classList.add('show');
	}
}

function closeModal(popupType) {
	if (popupType == "modal")
		modalPopup.classList.remove('show');
	else if (popupType == "error")
		errorPopup.classList.remove('show');
}

// function zoomInOut(zoomType) {
// 	this.zoomFlag = false;
// 	myearth.autoRotate = false;
// 	var location = this.myearth.location;
// 	var zoom = this.myearth.zoom;
// 	var zoomMinMax = 0;
// 	var zoomSrc = "";
// 	var zoomDisSrc = "";
// 	var IdToEnable = 0;
// 	var zoomL = 0;
// 	var zoomR = 0;
// 	if (zoomType == "IN") {
// 		zoomL = this.myearth.zoomMax;
// 		zoomR = this.myearth.zoom;
// 		zoomMinMax = this.myearth.zoomMax;
// 		zoomDisSrc = "assets/images/zoom-in-dis.png"
// 		zoomSrc = "assets/images/zoom-out.png"
// 		zoom = zoom + 0.3;
// 		IdToEnable = "OUT";

// 	} else {
// 		zoomL = this.myearth.zoom;
// 		zoomR = this.myearth.zoomMin;
// 		zoomMinMax = this.myearth.zoomMin;
// 		zoomDisSrc = "assets/images/zoom-out-dis.png"
// 		zoomSrc = "assets/images/zoom-in.png"
// 		zoom = zoom - 0.3;
// 		IdToEnable = "IN";
// 	}
// 	console.log(zoomL);
// 	console.log(zoomR);
// 	if (zoomL > zoomR) {
// 		myearth.animate('zoom', zoom, {
// 			loop: false,
// 			oscillate: true,
// 			duration: 1000
// 		});
// 		document.getElementById(IdToEnable).src = zoomSrc;
// 		if (zoomType == "IN") {
// 			if (this.myearth.zoomMax < zoom) {
// 				document.getElementById(zoomType).src = zoomDisSrc;
// 			}
// 			addOverlay();
// 		}
// 		if (zoomType == "OUT") {
// 			if (this.myearth.zoomMin > zoom) {
// 				document.getElementById(zoomType).src = zoomDisSrc;
// 				this.zoomFlag = true;
// 				for (var i = 0; i < myearth.overlays.length;) {
// 					myearth.overlays[i].remove();
// 				}
// 			}
// 		}

// 	} else {
// 		myearth.animate('zoom', zoomMinMax, {
// 			loop: false,
// 			oscillate: true,
// 			duration: 1000
// 		});
// 	}
// }