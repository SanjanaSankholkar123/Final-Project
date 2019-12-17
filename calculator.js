function display_grades(){ // I figured out how to use the values given to show some information.
  var current_grade = document.getElementById('current_grade').value;
  var wanted_grade = document.getElementById('wanted_grade').value;
  var final_worth = document.getElementById('final_worth').value;
  var result = (wanted_grade-(current_grade*(1-(final_worth/100))))/(final_worth/100)
  document.getElementById('answer').innerHTML = "You need to get a " + result.toFixed(2) + "% to achieve your wanted grade.";
}

function point_system(){
  var tot_points = document.getElementById('tot_points').value;
  var fin_points = document.getElementById('fin_points').value;
  var result = ((fin_points/tot_points)*100)
  document.getElementById('answer1').innerHTML = "Your final is worth " + result.toFixed(2) + "% of your grade."
}

function more_grades(){
  var curr_grade = document.getElementById('curr_grade').value;
  var fin_grade = document.getElementById('fin_grade').value;
  var fin_worth = document.getElementById('fin_worth').value;
  var result = ((curr_grade*(1-(fin_worth/100)))+(fin_grade*(fin_worth/100)))
  document.getElementById('ans').innerHTML = "Your final grade in that class will be a " + result.toFixed(2) + "%."
}
