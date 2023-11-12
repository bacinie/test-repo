function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var ce = document.getElementById("c").value;
    var fa = (ce * 9/5) + 32
    document.getElementById("f").value = fa
}

function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kilo = document.getElementById("kg").value;
    var p = kilo * 2.2
    document.getElementById("lbs").value = p
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("m").value = m
}