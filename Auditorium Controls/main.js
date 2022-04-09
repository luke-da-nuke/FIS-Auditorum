var allids = ["AllRng", "GallaryRng", "PublicFRng", "PublicBRng", "StageRng"] //All HTML group id's
  

  function RangeFunc(id, state) { //func for changing slider value when pressing btn| state = on/off
          var slider = document.getElementById(id);
          if (state == "on")
            slider.value= "255"
          if (state == "off")
            slider.value= "0"
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
