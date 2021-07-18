const input = document.querySelectorAll(".input-number");
const outlineDiv = document.querySelectorAll(".input-section__input");
for (let i = 0; i < input.length; i++) {
    if (input[i].parentNode.tagName.toString().toLowerCase() == "div") {
        input[i].onfocus = function() {
            this.parentNode.style.borderColor = "#26C2AE";
        }
        input[i].onblur = function() {
           this.parentNode.style.borderColor = "#f3f9fa";
        }
    }
}
