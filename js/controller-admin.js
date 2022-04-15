"use strict";

function shownDetailsAdmin(admin) {
  window.location = "admin.html";
}
function onSetSort(sotrBy) {
  console.log("sorting By:", sotrBy);
  var users = _loadFromStorege();
  setSort(sotrBy);
  if (sotrBy === "NAME") sotrByName(users);
  else sortByLastLoginTime(users);

  randerTable(users);
}
function onLogOutAdmin() {
  doLogout();
  window.location = "index.html";
}
