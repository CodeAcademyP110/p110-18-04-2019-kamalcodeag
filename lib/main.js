"use strict";

window.onload = function () {
  if (window.localStorage) {
    var checkbox = document.getElementById("autoplay");

    checkbox.onchange = function () {
      console.log("samdsaf");
      localStorage.setItem("autoPlayOn", this.checked);
    };

    var autoPlayOn = localStorage.getItem("autoPlayOn");

    if (autoPlayOn !== null && autoPlayOn !== undefined) {
      if (autoPlayOn === "true") {
        checkbox.setAttribute("checked", "checked");
      }
    }
  }
};