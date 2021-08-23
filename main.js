var Names_of_the_Guest_Array = [];
function Submit(){
	var Guest_name = document.getElementById("Enter_name").value;
	Names_of_the_Guest_Array.push("Guest_name");
	document.getElementById("Display_names").innerHTML = Names_of_the_Guest_Array;
	console.log("length_of_the_array");
}

function Show_List(){
var i = Names_of_the_Guest_Array.join("<br>");
console.log(Names_of_the_Guest_Array);
document.getElementById("Show_names").innerHTML = i.toString();
}

function sorting(){
	Names_of_the_Guest_Array.sort();
	var i = Names_of_the_Guest_Array.join("<br>");
console.log(Names_of_the_Guest_Array);
document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search(){
	var s =  document.getElementById("Search_name").value;
	var found = 0;
	var j;
	for (j=0; j<Names_of_the_Guest_Array.length; j++){
		if(s==Names_of_the_Guest_Array[j]){
			found = found=1;
		}
	}
	document.getElementById("Search_names").innerHTML = "Name found"+found+"Time/s";
	console.log("Found Name "+found+" Time/s");
}