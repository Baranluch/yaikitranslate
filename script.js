 var curLanguage = "yaiki";

 var socket = new WebSocket("ws://localhost:8081");
 socket.onmessage = function(event) {
        var incomingMessage = event.data;
        /*if (incomingMessage == "peich") {
        	alert("YES");
        }*/
        document.getElementById("out").innerHTML = "<div id='have'>" + incomingMessage + "</div>";
    };

var curText = "";

window.setInterval(function() {
	var input = document.getElementById("input").value;
	if (curText != input) {
		translate();
		curText = input;
	}
}, 1000);

function translate() {
	var translation = "";
	var text = document.getElementById("input").value;
	text = text.split(" ");
	if (curLanguage == "rus") {
		for (var i=0;i<text.length; i++) {
			if (text[i] != "") {
				if ("аеиоуэюяы".indexOf(text[i].charAt(0)) !== -1 || "АЕИОУЭЮЯЫ".indexOf(text[i].charAt(0)) !== -1) {
					translation += text[i].charAt(0) + "йч ";
				}
				if ("бвгджзклмнпрстфхцчшщ".indexOf(text[i].charAt(0)) !== -1 || "БВГДЖЗКЛМНПРСТФХЦЧШЩ".indexOf(text[i].charAt(0)) !== -1) {
					translation += text[i].charAt(0) + "эйч ";
				}
			}
		}
    } else {
    	socket.send(text);
    }
	document.getElementById("out").innerHTML = "<div id='have'>" + translation + "</div>";
}