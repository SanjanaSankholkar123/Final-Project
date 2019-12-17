function ready(){
  let subjects = ['math', 'science', 'ela', 'sstudies', 'language', 'other']
  let help = ['math_help', 'science_help', 'ela_help', 'sstudies_help', 'language_help', 'other_help']
  submit.onclick = function() {
    let index = 0;
    while (index < subjects.length) {
      let help_elem = document.getElementById(help[index]);
      let regular_elem = document.getElementById(subjects[index]); // Using help and other resources, I figured out how to make something show up once you check a text box.
      if (help_elem.checked){
        regular_elem.classList.remove('hide')
      }else {
        regular_elem.classList.add('hide')
      }
      index++;
    }
  }
};

// Math
function AddMathTips(){
  let mathtips = document.getElementById('mathtips');
  mathtips.classList.remove('hide_matht');
}

function AcceptMathTips(){
  let mathtips = document.getElementById('mathtips');
  let math_original_tips = document.getElementById('math_tips_text').innerHTML;
  let math_input = document.getElementById('math_input').value;
  document.getElementById('math_tips_text').innerHTML = math_original_tips + "- " + math_input + "<br><br>"
  mathtips.classList.add('hide_matht');
}

function AddMathResources(){
  let mathresources = document.getElementById('mathresources');
  mathresources.classList.remove('hide_mathr');
}

function AcceptMathResources(){ // I figured out how to show something after inputting that into a text box.
  let mathresources = document.getElementById('mathresources');
  let math_original_resources = document.getElementById('math_resources_text').innerHTML;
  let math_input = document.getElementById('math_input2').value;
  document.getElementById('math_resources_text').innerHTML = math_original_resources + "- " + math_input + "<br><br>"
  mathresources.classList.add('hide_mathr');
}

// Science
function AddScienceTips(){
  let sciencetips = document.getElementById('sciencetips');
  sciencetips.classList.remove('hide_sciencet');
}

function AcceptScienceTips(){
  let sciencetips = document.getElementById('sciencetips');
  let science_original_tips = document.getElementById('science_tips_text').innerHTML;
  let science_input = document.getElementById('science_input').value;
  document.getElementById('science_tips_text').innerHTML = science_original_tips + "- " + science_input + "<br><br>"
  sciencetips.classList.add('hide_sciencet');
}

function AddScienceResources(){
  let scienceresources = document.getElementById('scienceresources');
  scienceresources.classList.remove('hide_sciencer');
}

function AcceptScienceResources(){
  let scienceresources = document.getElementById('scienceresources');
  let science_original_resources = document.getElementById('science_resources_text').innerHTML;
  let science_input = document.getElementById('science_input2').value;
  document.getElementById('science_resources_text').innerHTML = science_original_resources + "- " + science_input + "<br><br>"
  scienceresources.classList.add('hide_sciencer');
}

// ELA
function AddELATips(){
  let elatips = document.getElementById('elatips');
  elatips.classList.remove('hide_elat');
}

function AcceptELATips(){
  let elatips = document.getElementById('elatips');
  let ela_original_tips = document.getElementById('ela_tips_text').innerHTML;
  let ela_input = document.getElementById('ela_input').value;
  document.getElementById('ela_tips_text').innerHTML = ela_original_tips + "- " + ela_input + "<br><br>"
  elatips.classList.add('hide_elat');
}

function AddELAResources(){
  let elaresources = document.getElementById('elaresources');
  elaresources.classList.remove('hide_elar');
}

function AcceptELAResources(){
  let elaresources = document.getElementById('elaresources');
  let ela_original_resources = document.getElementById('ela_resources_text').innerHTML;
  let ela_input = document.getElementById('ela_input2').value;
  document.getElementById('ela_resources_text').innerHTML = ela_original_resources + "- " + ela_input + "<br><br>"
  elaresources.classList.add('hide_elar');
}

// Social Studies
function AddSStudiesTips(){
  let sstudiestips = document.getElementById('sstudiestips');
  sstudiestips.classList.remove('hide_sstudiest');
}

function AcceptSStudiesTips(){
  let sstudiestips = document.getElementById('sstudiestips');
  let sstudies_original_tips = document.getElementById('sstudies_tips_text').innerHTML;
  let sstudies_input = document.getElementById('sstudies_input').value;
  document.getElementById('sstudies_tips_text').innerHTML = sstudies_original_tips + "- " + sstudies_input + "<br><br>"
  sstudiestips.classList.add('hide_sstudiest');
}

function AddSStudiesResources(){
  let sstudiesresources = document.getElementById('sstudiesresources');
  sstudiesresources.classList.remove('hide_sstudiesr');
}

function AcceptSStudiesResources(){
  let sstudiesresources = document.getElementById('sstudiesresources');
  let sstudies_original_resources = document.getElementById('sstudies_resources_text').innerHTML;
  let sstudies_input = document.getElementById('sstudies_input2').value;
  document.getElementById('sstudies_resources_text').innerHTML = sstudies_original_resources + "- " + sstudies_input + "<br><br>"
  sstudiesresources.classList.add('hide_sstudiesr');
}

// Languages
function AddLanguageTips(){
  let languagetips = document.getElementById('languagetips');
  languagetips.classList.remove('hide_languaget');
}

function AcceptLanguageTips(){
  let languagetips = document.getElementById('languagetips');
  let language_original_tips = document.getElementById('language_tips_text').innerHTML;
  let language_input = document.getElementById('language_input').value;
  document.getElementById('language_tips_text').innerHTML = language_original_tips + "- " + language_input + "<br><br>"
  languagetips.classList.add('hide_languaget');
}

function AddLanguageResources(){
  let languageresources = document.getElementById('languageresources');
  languageresources.classList.remove('hide_languager');
}

function AcceptLanguageResources(){
  let languageresources = document.getElementById('languageresources');
  let language_original_resources = document.getElementById('language_resources_text').innerHTML;
  let language_input = document.getElementById('language_input2').value;
  document.getElementById('language_resources_text').innerHTML = language_original_resources + "- " + language_input + "<br><br>"
  languageresources.classList.add('hide_languager');
}

// Other
function AddOtherTips(){
  let othertips = document.getElementById('othertips');
  othertips.classList.remove('hide_othert');
}

function AcceptOtherTips(){
  let othertips = document.getElementById('othertips');
  let other_original_tips = document.getElementById('other_tips_text').innerHTML;
  let other_input = document.getElementById('other_input').value;
  document.getElementById('other_tips_text').innerHTML = other_original_tips + "- " + other_input + "<br><br>"
  othertips.classList.add('hide_othert');
}

function AddOtherResources(){
  let otherresources = document.getElementById('otherresources');
  otherresources.classList.remove('hide_otherr');
}

function AcceptOtherResources(){
  let otherresources = document.getElementById('otherresources');
  let other_original_resources = document.getElementById('other_resources_text').innerHTML;
  let other_input = document.getElementById('other_input2').value;
  document.getElementById('other_resources_text').innerHTML = other_original_resources + "- " + other_input + "<br><br>"
  otherresources.classList.add('hide_otherr');
}
