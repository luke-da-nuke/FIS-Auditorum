var i = 0;

function updatepoints(action, team){
    homepoints = document.getElementById("homepoints")
    awaypoints = document.getElementById("awaypoints")
    
    if(team == "home" && homepoints.value == ""){
        homepoints.value = 0;
    }
    if(team == "away" && awaypoints.value == ""){
        awaypoints.value = 0;
    }
    if (team =="home" && action == "add"){
        homepoints.value++;
    }
    if (team =="home" && action == "sub"){
        homepoints.value--;
    }
    if (team =="away" && action == "add"){
        awaypoints.value++;
    }
    if (team =="away" && action == "sub"){
        awaypoints.value--;
    }
}
function updateperiod(action){
    period = document.getElementById("period");
    if(period.value == ""){
        period.value = 0; 
    }
    if(action == "add"){
        period.value++;
    }
    if(action == "sub"){
        period.value--; 
    }
}
function reset(){
    homepoints = document.getElementById("homepoints")
    awaypoints = document.getElementById("awaypoints")
    period = document.getElementById("period");
    hometeam = document.getElementById("hometeam")
    awayteam = document.getElementById("awayteam")
    

    homepoints.value = "";
    awaypoints.value = "";
    period.value = "";
    hometeam.value = "null"
    awayteam.value = "null"
    i= 0
}

function updatelink(){
    i++;
    localStorage.setItem("forceupdate", i)
    localStorage.setItem("hometeam", document.getElementById("hometeam").value)
    localStorage.setItem("awayteam", document.getElementById("awayteam").value)
    localStorage.setItem("homepoints", document.getElementById("homepoints").value)
    localStorage.setItem("awaypoints", document.getElementById("awaypoints").value)
    localStorage.setItem("period", document.getElementById("period").value)

}


// function update(){
//     var updatelist = ["name_away", "name_home"]
//     i=0;
//     while(i<updatelist.length){
//         fs.writeFile((updatelist[i] + "txt"), (document.getElementById(updatelist[i]).value), err => { 
//             if(err){
//                 console.err;
//                 return;
//             }
//         })
//         i++;
//     }
// }   
// const fs = require('fs');
// fs.readFile('data.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data)
// })

// const content = "testetxt";
// fs.writeFile('data.txt', content, err => { 
//     if(err){
//         console.err;
//         return;
//     }
// })