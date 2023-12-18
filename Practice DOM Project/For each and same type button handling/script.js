document.addEventListener("DOMContentLoaded", function(){
  const buttonElement = document.querySelectorAll(".css-greeting");
  
  buttonElement.forEach(function(button){
    button.addEventListener("click", destination);
  });
});

function destination(){
  alert("You arived at the end of this task");
}