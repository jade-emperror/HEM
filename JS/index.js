var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("navbar").style.top = "-10vh";
  } else {
    document.getElementById("navbar").style.top = "0vh";
  }
  prevScrollpos = currentScrollPos;
};
function routeme(id) {
  var sc_width = window.innerWidth;
  if (sc_width > 768) {
    window.location.href = "/services/" + id + ".html";
  } else {
    window.location.href = "/mob_services/" + id + ".html";
  }
}