"use strict"

$(document).ready(function(){
var words = ["freedom",
"God Bless America",
"Chuck Norris",
"bacon cheeseburgers",
"fireworks",
"explosions",
"bald eagles",
"better dead than red",
"liberty",
"anti-metric system",
"mission accomplished",
"stars and stripes",
"Uncle Sam",
"fighter jets",
"super-size",
"Wal-Mart",
"NASCAR",
"Michael Bay movies",
"Texas",
"bigger",
"southwest breakfast burrito",
"low taxes",
"pro-wrestling",
"no-terrorist-zone",
"second amendment rights",
"Bud heavy tall-boy",
"MGD",
"Dallas Cowboys",
"Medal of Honor",
"Call of Duty",
"enemies of freedom",
"Dale Earnhardt Jr",
"pickup trucks",
"mud flaps",
"extra beef",
"automatic rifle",
"wanted dead or alive",
"RoboCop",
"Arnold Schwarzenegger",
"Die Hard 2: Die Harder",
"I only speak American",
"red white and blue",
"nuclear-powered aircraft carrier",
"John Cena",
"SUVs",
"Mega-Stuf Oreos",
"Philly cheesesteak",
"NASA",
"Championship Pro Bass Fishing",
"Denny's Grand Slam Breakfast",
"shock and awe",
"Star-Spangled Banner",
"truck nuts",
"dual-wielded machine guns",
"route 66",
"the economy",
"super bowl",
"border wall",
"democracy",
"capitalism",
"commies get out of my country",
"John Wayne",
"CSI: Miami",
"74-inch HDTV",
"Hanes boxer briefs",
"Mountain Dew",
"Disney World",
"Branson Missouri",
"Van Halen",
"WMD",
"jean shorts",
"Marlboro reds",
"gigantic",
"huge",
"monster truck rally",
"85oz soda",
"chili cheese fries",
"patriotic",
"extra pulled pork",
"Harley Davidson",
"Hot Pockets",
"sweatpants",
"more bullets",
"tomahawk cruise missile",
"propane tanks",
"drive-thru",
"Garth Brooks",
"exploding",
"explosive",
"extra value meal",
"juicy flame-grilled",
"stock market",
"low gas prices",
"Mount Rushmore",
"Lynyrd Skynyrd",
"DirecTV",
"cheese-stuffed",
"crunch-tastic",
"lunchables",
"DiGiorno",
"slurpees",
"Starbucks",
"country-fried",
"USA-4-Life-Bro",
"the government",
"FBI CIA NSA",
"hot dogs",
"potato salad",
"Fox News",
"supreme court ruling",
"freedom fries",
"crispy chicken strips",
"condiments",
"BBQ",
"apple pie",
"twinkies",
"MOPAR",
"XXXL",
"18-wheeler",
"Nashville",
"corporations",
"bigfoot",
"redwood",
"extra-large",
"TGIF",
"7-Eleven",
"cholesterol",
"microwaved",
"taco night",
"television",
"DVD",
"3D Blu-Ray",
"credit cards",
"consumerism",
"Costco",
"malls",
"shopping",
"Checkers",
"milkshakes",
"congress",
"voting",
"official sponsor",
"constitutional rights",
"independence",
"1776",
"Proud To Be An American",
"truthers",
"CNN",
"boneless buffalo wings",
"Applebee's",
"drone strike",
"online multiplayer",
"controversial",
"the media",
"velcro",
"foreign policy",
"national security",
"elections",
"Home Depot",
"ESPN2",
"weekends"];

document.getElementById("ipsum").innerHTML = randoParagraph() + randoParagraph() + randoParagraph() + randoParagraph();

function randoLength(){
	return Math.floor(Math.random() * (8 - 4) + 4);
};

function randoComma(){
	var c = Math.floor(Math.random() * (10 - 0) + 0);
	if (c % 2 === 0){
		return ","
	}
	else {
		return "";
	}
}

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randoWord(){
	var p = words[Math.floor(Math.random() * (words.length - 0) + 0)];
	//Math.floor(Math.random() * (max - min)) + min
	return p;
}

function randoSentence(){
		var sentence = capFirst(randoWord());
		var l = randoLength();
		for (var i = 1; i < l; i++){
				if (i > 2 && i < (l - 2) && l % 2 === 0){
					sentence = sentence + " " + randoWord() + randoComma();
				}
				else{
					sentence = sentence + " " + randoWord();
				}
		}
		return sentence + ".";
	};

function randoParagraph(){
	var paragraph = "";
	var l = Math.floor(Math.random() * (7 - 5) + 5);
	for (var i = 0; i < l; i++){
		paragraph = paragraph + " " + randoSentence(); 
	}	
	paragraph = "<p>" + paragraph + "</p>"
	return paragraph;
};

document.getElementById("generate").addEventListener("click", function(){
		var paras = document.getElementById("paras").value;
		var output = "";
		for (var i = 0; i < paras; i++){
			output = output + randoParagraph();
		}
		document.getElementById("ipsum").innerHTML = output;
});
		
});	




