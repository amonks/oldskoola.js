javascript:
var bodyTag = document.getElementsByTagName("body")[0];
var script = document.createElement("script");
script.src = "//raw.github.com/amonks/oldskoola.js/master/oldskoola.js";
bodyTag.appendChild(script);
script.onload = script.onreadystatechange = function() {oldskoola();};