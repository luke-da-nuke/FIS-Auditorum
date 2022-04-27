var allids = ["AllRng", "GallaryRng", "PublicFRng", "PublicBRng", "StageRng"] //All HTML group id's
  function testt(){
    console.log("test test");
  }
  function RangeFunc(id, btnID, OppositebtnID, state) { //func for changing slider value when pressing btn| state = on/off
    var slider = document.getElementById(id);
    if (state == "on"){
      document.getElementById(btnID).style.boxShadow = "4px 4px 0 #F4CD8A"; //makes it easier to see which button is on
      document.getElementById(OppositebtnID).style.boxShadow = "none";
      slider.value = "255"
    }
    if (state == "off"){
      document.getElementById(btnID).style.boxShadow = "4px 4px 0 #F4CD8A";
      document.getElementById(OppositebtnID).style.boxShadow = "none";
      slider.value = "0"
    }
  }

  function RangeFuncAll(state) { //func for changing all slider values when using 'all' btns
    if (state == "on")
      var i = 0
      while (allids.length > i){
        document.getElementById(allids[i]).value = 255; //sorts thru list with all id's
        i++;
      }
    if (state == "off")
      var i = 0
      while (allids.length > i){
        document.getElementById(allids[i]).value = 0;
        i++;
      }
  }

  function RangesyncAll(){ //Syncs all sliders to 'all' slider
    AllSlider = document.getElementById("AllRng")
    i = 0
    while (allids.length > i){
      x = document.getElementById(allids[i])
      x.value = AllSlider.value
      i++
    }
  }
function testt(){
  console.log("test");
}
  // function ButtonOnAnimation(state){
  //   if(state == "on"){
  //     document.getElementById("GallaryRngBtn").style.boxShadow = "4px 4px 0 #F4CD8A";
  //   }
  // }