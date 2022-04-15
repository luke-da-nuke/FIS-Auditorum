window.addEventListener('storage', test, false);

function test(){
    var hometeam = localStorage.getItem("hometeam");
    var awayteam = localStorage.getItem("awayteam");
    var homepoints = localStorage.getItem("homepoints");
    var awaypoints = localStorage.getItem("awaypoints");
    var period = localStorage.getItem("period");

    document.getElementById("disperiod").innerHTML = period;
    document.getElementById("dishometeam").innerHTML = hometeam;
    document.getElementById("disawayteam").innerHTML = awayteam;
    document.getElementById("dishomepoints").innerHTML = homepoints;
    document.getElementById("disawaypoints").innerHTML = awaypoints;

    document.getElementById("homeimg").src = "assets/" + hometeam + "logo.png";
    document.getElementById("awayimg").src = "assets/" + awayteam + "logo.png"; 
    
    
    //assets/MISlogo.png

}


