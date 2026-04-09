const notebook = document.getElementById("notebook");
const source_text = document.getElementById("source_text");
notebook.style.display = "none";

const source = document.getElementById("source");
console.log(source.style.height);

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.analysis_toggle');

  toggles.forEach( toggle => {
    toggle.addEventListener('click', function(){
      if (this.innerHTML.indexOf("Show") > -1) {
      toggles.forEach( hide_toggle => {hide_toggle.innerHTML = "Hide Claim Analysis";});
      source_text.style.display = "none";
      notebook.style.display = "block";
    } else {
      toggles.forEach( show_toggle => {show_toggle.innerHTML = "Show Claim Analysis";});
      notebook.style.display = "none";
      source_text.style.display = "block";
    }
    } );
  });

});