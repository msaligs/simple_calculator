var x;
function set(x) {
    if (x == "infinity")
        x = "&infin";
    document.getElementById("input").innerHTML = x;
}
function add(y) {
    if (y == "infinity")
        y = "&infin";
    document.getElementById("input").innerHTML += y;
}

function del() {
    var x = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = x.substring(0, x.length - 1);
}



function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("dte").innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000);