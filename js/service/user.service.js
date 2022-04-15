"use strict";
const IMG_1 = "./img/secret1.png";
const IMG_2 = "./img/secret2.png";
const IMG_3 = "./img/secret3.png";
const LOGGED_KEY = "currLoggenInUser";
var gUsers;
var gUserId = 100;
_creatUsers();

function _creatUser(userName, password, isAdmin, url) {
  const user = {
    id: gUserId++,
    userName: userName,
    password: password,
    lastLoginTime: Date.now(),
    isAdmin: isAdmin,
    img: `<img src=${url} class="signned-up-img" alt="">`,
  };
  return user;
}
function _creatUsers() {
  var users = [
    _creatUser("dorin", "123", false, IMG_1),
    _creatUser("meny", "123", true, IMG_3),
    _creatUser("yossi", "123", false, IMG_1),
    _creatUser("aliza", "123", false, IMG_2),
    _creatUser("dan", "123", true, IMG_2),
  ];
  gUsers = users;
  _saveUsersToStorge();
}
function _saveUsersToStorge() {
  saveToStorage("safeConectDB", gUsers);
}
function _loadFromStorege() {
  return loadFromStorage("safeConectDB");
}
function doLogin(userName, password) {
  var idxUser = gUsers.findIndex(
    (user) => user.userName === userName && user.password === password
  );
  if (idxUser === -1) return null;
  gUsers[idxUser].lastLoginTime = Date.now();
  saveToStorage(LOGGED_KEY, gUsers[idxUser]);
  _saveUsersToStorge();

  return gUsers[idxUser];
}
function doLogout() {
  saveToStorage(LOGGED_KEY, "");
}
