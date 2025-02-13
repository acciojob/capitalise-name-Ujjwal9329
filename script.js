//your JS code here. If required.
document.getElementById("fname").onblur = function() {
    this.value = this.value.toUpperCase();
};