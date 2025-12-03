let button = document.querySelector(".button")
button.addEventListener("click", () => {
    alert('Dziękujemy za wystawienie opini :)');
})


const buttons = document.querySelectorAll(".buttons .one");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {

   
    buttons.forEach(b => b.classList.remove("active"));

   
    for (let i = 0; i <= index; i++) {
      buttons[i].classList.add("active");
    }
  });
});

