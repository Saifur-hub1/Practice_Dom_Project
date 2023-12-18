function change(){
  const red = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  let result = `rgb(${red} ,${green} ,${blue})`;
  let hexRed = (red.toString(16)).toUpperCase();
  let hexGreen = green.toString(16).toUpperCase();
  let hexBlue = blue.toString(16).toUpperCase();

  let hexResult = `${hexRed}${hexGreen}${hexBlue}`
  document.body.style.backgroundColor = result;
  document.querySelector(".js-position").innerHTML = `
  <button class="js-button" onclick="change()">Change Background</button>
  <div>
    <button class="js-pick-rgb" onclick="
      copyToClipboard('${result}');
      ">
        ${result}
      </button>
    <button class="js-pick-rgb" onclick="
      copyToClipboard('${hexResult}')
      ">
        #${hexResult}
    </button>
  </div>
  `;
}

function copyToClipboard(text){
  navigator.clipboard.writeText(text).then( showCopyMessage(text) );
}

function showCopyMessage(text){
  const messageElement = document.createElement("div");
  messageElement.innerText = `Coppied to Clipboard`;
  messageElement.classList.add("copy-message");

  document.body.appendChild(messageElement);
  
  setTimeout(function () { document.body.removeChild(messageElement);}, 500)
}