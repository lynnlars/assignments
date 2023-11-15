let button = document.getElementById("clicker");
      let clickCount = 0;
      let display = document.getElementById("click-count");
      if (localStorage.getItem(clickCount)) {
         clickCount = parseInt(localStorage.getItem(clickCount));
      }
      button.addEventListener("click", () => {
         clickCount++;
         display.innerHTML = "Button clicked: " +  clickCount + " times";
         localStorage.setItem("clickCount", clickCount);
        })