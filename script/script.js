//html 포함하기


//click event - menu, close
const gnbMenu = document.querySelector("#gnb-menu");
const gnbClose = document.querySelector("#gnb-close");
const sideNav = document.querySelector(".side-nav");
const mainBannerText = document.querySelector("#main-banner-text");
gnbMenu.addEventListener("click", ()=>{
  sideNav.style.display = "flex";
  mainBannerText.style.display = "none";
})

gnbClose.addEventListener("click", ()=>{
  sideNav.style.display = "none";
  mainBannerText.style.display = "flex";
})

//click event - login
const gnbLogin = document.querySelector("#gnb-login");
const btnLogin = document.querySelector("#btn-login");
const modalPopupClose = document.querySelector("#modal-popup-close");
const loginPopup = document.querySelector("#login-popup");
const login = document.querySelector("#login")

gnbLogin.addEventListener("click", ()=>{
  loginPopup.style.display = "flex";
  login.style.display = "flex";
})

btnLogin.addEventListener("click", ()=>{
  loginPopup.style.display = "flex";
  login.style.display = "flex";
})

modalPopupClose.addEventListener("click", ()=>{
  loginPopup.style.display = "none";
  login.style.display = "none";
})