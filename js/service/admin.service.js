"use strict";
var gSortBy = "NAME";
function init() {
  var users = _loadFromStorege();
  sotrByName(users);
  randerTable(users);
  var admin = loadFromStorage("currLoggenInUser");
  document.querySelector("h1 span").innerText = admin.userName.toUpperCase();
}
function randerTable(users) {
  console.log("users :>> ", users);
  var strHtml = "<tr>\n";
  for (var i = 0; i < users.length; i++) {
    strHtml += `<td>${users[i].userName}</td>`;
    strHtml += `<td>${users[i].password}</td>`;
    strHtml += `<td>${users[i].lastLoginTime}</td>`;
    strHtml += `<td>${users[i].isAdmin}</td>`;
    strHtml += "</tr>";
  }
  var elTbody = document.querySelector("tbody");
  elTbody.innerHTML = strHtml;
}
function sotrByName(users) {
  users.sort((user1, user2) => {
    let a = user1.userName.toLowerCase(),
      b = user2.userName.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  });

  _saveUsersToStorge();
}
function sortByLastLoginTime(users) {
  users.sort((a, b) => a.lastLoginTime - b.lastLoginTime);
  _saveUsersToStorge();
}
function _saveUsersToStorge() {
  saveToStorage("safeConectDB", gUsers);
}
function _loadFromStorege() {
  return loadFromStorage("safeConectDB");
}
function setSort(sortby) {
  gSortBy = sortby;
}
