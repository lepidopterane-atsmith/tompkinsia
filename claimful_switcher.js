const notebook = document.getElementById("notebook");
const notebook_iframe = document.getElementById("notebook_iframe");
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
      

      if (this.id.indexOf("1") > -1){
        notebook.innerHTML = '<iframe id="notebook_iframe" src="notebook_1.html" style="width: 100%;object-position: 100% 100%; overflow: show; border: 1px solid cornflowerblue;" height="2000px" scrolling="yes"></iframe>';
      } else if (this.id.indexOf("2") > -1){
        notebook.innerHTML = '<iframe id="notebook_iframe" src="notebook_2.html" style="width: 100%;object-position: 100% 100%; overflow: show; border: 1px solid cornflowerblue;" height="2000px" scrolling="yes"></iframe>';
      } else {
        notebook.innerHTML = '<iframe id="notebook_iframe" src="notebook_3.html" style="width: 100%;object-position: 100% 100%; overflow: show; border: 1px solid cornflowerblue;" height="2000px" scrolling="yes"></iframe>';
      }
      
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