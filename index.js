document.addEventListener("DOMContentLoaded", ready);

function ready(){
  let i = 0
  console.log("hi")
      setInterval(function(){
        let color = ["black","grey","blue"]
        document.getElementById('color').style.color = color[i]
          if(i == 2){
              i = 0
          } else {
              i++
          }
      }, 500);
}
