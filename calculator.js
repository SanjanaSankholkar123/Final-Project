function display_grades(){
  var curr_grade = document.getElementById('current_grade').value;
  var wanted_grade = document.getElementById('wanted_grade').value;
  var final_worth = document.getElementById('final_worth').value;
  var result = (wanted_grade-(curr_grade*(1-(final_worth/100))))/(final_worth/100)
  document.getElementById('answer').innerHTML =result.toFixed(2);
}
