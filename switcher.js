const notebook = document.getElementById("notebook");
const source_text = document.getElementById("source_text");
notebook.style.display = "none";

const source = document.getElementById("source");
console.log(source.style.height);

document.addEventListener('DOMContentLoaded', () => {
  const analysis_toggle = document.getElementById('analysis_toggle');

  analysis_toggle.addEventListener('click', function() {
    if (this.innerHTML.indexOf("Show") > -1) {
      this.innerHTML = "Hide Claim Analysis";
      source_text.style.display = "none";
      notebook.style.display = "block";
    } else {
      this.innerHTML = "Show Claim Analysis";
      notebook.style.display = "none";
      source_text.style.display = "block";
    }
  }
  );

});