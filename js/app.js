document.addEventListener("DOMContentLoaded", function () {
  const eye = document.getElementsByClassName("eye")[0];
  let onoff = false;
  eye.addEventListener("click", function () {
    if (onoff === false) {
      eye.style.backgroundColor = "#ffffff"
      onoff = true
    } else {
      eye.style.backgroundColor = "#663399FF"
      onoff = false
    }

  })
});
