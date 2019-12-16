function ready(){
  let subjects = ['math', 'science', 'ela', 'sstudies', 'language', 'other']
  let help = ['math_help', 'science_help', 'ela_help', 'sstudies_help', 'language_help', 'other_help']
  submit.onclick = function() {
    let index = 0;
    while (index < subjects.length) {
      let help_elem = document.getElementById(help[index]);
      let regular_elem = document.getElementById(subjects[index]);
      if (help_elem.checked){
        regular_elem.classList.remove('hide')
      }else {
        regular_elem.classList.add('hide')
      }
      index++;
    }
  }
};
