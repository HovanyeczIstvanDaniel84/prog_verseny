let radios = document.querySelectorAll(".form-check-label")
radios.forEach(element => {  
  element.addEventListener("click", ()=>{
    radios.forEach(element => {
      document.querySelector(`.${element.classList[2]} img`).src = "img/pipa.png"
    });
    document.querySelector(`.${element.classList[2]} img`).src = "img/pipa-active.png"
  })
});
