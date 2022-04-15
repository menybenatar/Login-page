"use strict";
function onLogin() {
  const elUser = document.querySelector("input[type=userName]");
  const elPass = document.querySelector("input[type=Password]");
  const userName = elUser.value;
  const password = elPass.value;
  if (userName === "" || password === "") return;

  var loggedInUser = doLogin(userName, password);
  if (!loggedInUser) return;
  if (loggedInUser.isAdmin) {
    shownDetailsAdmin(loggedInUser);
  } else {
    shownDetailsUser(loggedInUser);
  }
  elUser.value = "";
  elPass.value = "";
}
function shownDetailsUser(user) {
  document.querySelector(".sing-in").style.display = "none";
  document.querySelector(".after-login").style.display = "block";
  document.querySelector("#Wellcom-user span").innerText = user.userName;
  document.querySelector(".img-user").innerHTML = user.img;
}
function onLogOut() {
  doLogout();
  document.querySelector("#Wellcom-user span").innerText = "";
  document.querySelector(".after-login").style.display = "none";
  document.querySelector(".sing-in").style.display = "block";
  document.querySelector(".img-user").innerHTML = "";
}
