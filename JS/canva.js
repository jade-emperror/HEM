function drawcanvas() {
  var sc_width = window.innerWidth;
  var sc_height = window.innerHeight;
  var c = document.getElementById("white");
  var ctx = c.getContext("2d");
  if (sc_width > 768) {
    var cw = sc_width - sc_width * 0.3;
    ctx.canvas.width = sc_width - sc_width * 0.3;
    ctx.canvas.height = sc_height;
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(cw * 0.9, 0);
    ctx.quadraticCurveTo(cw * 1, sc_height * 0.18, cw * 0.9, sc_height * 0.4);
    ctx.quadraticCurveTo(cw * 0.75, sc_height * 0.7, cw * 0.85, sc_height);
    ctx.lineTo(0, sc_height);
    ctx.fill();
  }
}
function sendmsg() {
  var sc_width = window.innerWidth;
  if (sc_width > 768) {
    window.location.href =
      "mailto:dennishabraham08@gmail.Com?subject=Booking&body=Hi%2CHappy%20Event%20Management.I%20viewed%20your%20site%20and%20looking%20for%20your%20service%20on%20...%0D%0A";
  } else {
    window.location.href =
      "https://api.whatsapp.com/send?phone=916383682421&text=Hi%2CHappy%20Event%20Management.I%20viewed%20your%20site%20and%20looking%20for%20your%20service%20on%20...";
  }
}
function gohome() {
  window.location.href = "/#service";
}
drawcanvas();